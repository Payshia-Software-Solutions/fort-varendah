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
            <svg viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="38">
              <rect x="6" y="2" width="36" height="46" rx="3" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="10" y="6" width="28" height="38" rx="2" stroke="currentColor" strokeWidth="1"/>
              <line x1="24" y1="6" x2="24" y2="44" stroke="currentColor" strokeWidth="0.8"/>
              <line x1="10" y1="28" x2="38" y2="28" stroke="currentColor" strokeWidth="0.8"/>
              <rect x="16" y="32" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1"/>
              <text x="24" y="22" textAnchor="middle" fontSize="10" fontFamily="Georgia,serif" fill="currentColor" fontWeight="600">F</text>
              <text x="24" y="52" textAnchor="middle" fontSize="7" fontFamily="Georgia,serif" fill="currentColor">V</text>
            </svg>
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoBrand}>FORT VERANDAH</span>
            <span className={styles.logoSub}>BOUTIQUE RESIDENCE &amp; BISTRO</span>
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
