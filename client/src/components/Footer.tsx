import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topGrid}>
            {/* Brand */}
            <div className={styles.brand}>
              <p className="subheading color-ochre" style={{marginBottom:'1rem'}}>Ceylon · Galle</p>
              <h2 className={styles.footerBrand}>FORT<br />VERANDAH</h2>
              <p className={styles.tagline}>Boutique Residence &amp; Bistro</p>
              <p className="body-sm color-warm-grey" style={{marginTop:'1.5rem', maxWidth:'280px'}}>
                A quiet escape in the heart of Galle Fort, where heritage meets refined modern living.
              </p>
            </div>

            {/* Navigation */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Navigate</h4>
              {[
                {href:'/',        label:'Home'},
                {href:'/rooms',   label:'Rooms & Suites'},
                {href:'/bistro',  label:'The Bistro'},
                {href:'/gallery', label:'Gallery'},
                {href:'/about',   label:'Our Story'},
                {href:'/contact', label:'Contact'},
              ].map(l => (
                <Link key={l.href} href={l.href} className={styles.footerLink}>{l.label}</Link>
              ))}
            </div>

            {/* Contact */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Visit Us</h4>
              <p className={styles.footerText}>No. 18, Light House Street</p>
              <p className={styles.footerText}>Galle Fort, Sri Lanka</p>
              <p className={styles.footerText} style={{marginTop:'1rem'}}>
                <a href="mailto:info@fortverandah.com" className={styles.footerLink}>
                  info@fortverandah.com
                </a>
              </p>
              <p className={styles.footerText}>
                <a href="tel:+94912234567" className={styles.footerLink}>
                  +94 91 223 4567
                </a>
              </p>
              <div className={styles.socials}>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="TripAdvisor">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Hours</h4>
              <div className={styles.hours}>
                <div className={styles.hourRow}>
                  <span className={styles.hourDay}>Bistro</span>
                  <span className={styles.hourTime}>7am – 10pm</span>
                </div>
                <div className={styles.hourRow}>
                  <span className={styles.hourDay}>Check-in</span>
                  <span className={styles.hourTime}>2pm – 10pm</span>
                </div>
                <div className={styles.hourRow}>
                  <span className={styles.hourDay}>Check-out</span>
                  <span className={styles.hourTime}>Until 11am</span>
                </div>
              </div>
              <div className={styles.bookCta}>
                <Link href="/contact" className="btn btn-primary">
                  Reserve a Room
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              &copy; 2026 Fort Verandah. All rights reserved.
            </p>
            <p className={styles.credit}>
              Ceylon · Galle Fort · UNESCO World Heritage Site
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
