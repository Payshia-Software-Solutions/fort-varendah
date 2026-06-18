'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/',        label: 'Home' },
  { href: '/rooms',   label: 'Rooms' },
  { href: '/bistro',  label: 'Bistro' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about',   label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname                  = usePathname();
  const isHome                    = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <header
      className={[
        styles.header,
        scrolled ? styles.scrolled : '',
        !isHome || scrolled ? styles.solid : '',
      ].join(' ')}
    >
      <div className={styles.inner}>

        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoIcon}>
            <img src="/images/nav-icon-cropped.png" alt="Icon" className={styles.navIconImg} />
          </span>
          <span className={styles.logoText}>
            <img src="/images/nav-text-cropped.png" alt="Fort Verandah" className={styles.navTextImg} />
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={[styles.navLink, pathname === link.href ? styles.active : ''].join(' ')}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={`btn btn-outline-light ${styles.bookBtn}`}>
            Book Now
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className={[styles.hamburger, menuOpen ? styles.open : ''].join(' ')}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={[styles.mobileMenu, menuOpen ? styles.mobileOpen : ''].join(' ')}>
        <nav className={styles.mobileNav}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={[styles.mobileLink, pathname === link.href ? styles.active : ''].join(' ')}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={`btn btn-primary ${styles.mobileBook}`} onClick={() => setMenuOpen(false)}>
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
