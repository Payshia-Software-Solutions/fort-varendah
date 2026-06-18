'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './about.module.css';
import { useReveal } from '@/hooks/useReveal';


export default function AboutPage() {
  useReveal();
  return (
    <div>
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerOverlay} />
        <div className={`container ${styles.bannerContent}`}>
          <p className="subheading color-ochre reveal">Our Story</p>
          <div className="divider divider-left reveal reveal-delay-1" />
          <h1 className="heading-xl color-sand reveal reveal-delay-2">BRAND<br />OVERVIEW</h1>
        </div>
      </section>

      {/* Story */}
      <section className={`section-pad-lg bg-cream`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className="reveal-left">
              <p className="subheading color-ochre">The Vision</p>
              <div className="divider divider-left" />
              <h2 className="heading-lg">A Quiet Escape<br />in Galle</h2>
              <div className={styles.storyVisual}>
                <div className={styles.storyImg} />
                <div className={styles.storyBadge}>
                  <p className="subheading color-ochre" style={{fontSize:'0.5rem'}}>Founded</p>
                  <p style={{fontFamily:'var(--font-primary)', fontSize:'2rem', fontWeight:700, color:'var(--color-sand)', lineHeight:1}}>2026</p>
                </div>
              </div>
            </div>
            <div className="reveal-right">
              <p className="body-lg" style={{marginBottom:'1.5rem'}}>
                Fort Verandah is a luxury boutique residence nestled in the heart of Galle, where
                timeless Sri Lankan heritage meets refined modern living. Inspired by the charm of
                traditional southern architecture and the iconic character of Galle Fort, Fort Verandah
                reimagines old-world aesthetics through a contemporary lens.
              </p>
              <p className="body-lg" style={{marginBottom:'1.5rem'}}>
                Every detail reflects the elegance of classic verandahs, textured walls, and artisanal
                craftsmanship blended seamlessly with modern comforts and understated luxury.
              </p>
              <p className="body-lg">
                Designed for those who appreciate culture, calm, and curated spaces, Fort Verandah
                offers an intimate escape that feels both nostalgic and refreshingly new.
              </p>
              <div className={styles.storyValues}>
                {['Luxury Boutique','Heritage Living','Timeless Elegance','Cultural Escape'].map(v => (
                  <div key={v} className={styles.valueTag}>{v}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Galle */}
      <section className={`section-pad bg-deep-moss`}>
        <div className="container">
          <div className={styles.galleGrid}>
            <div className="reveal-right">
              <p className="subheading color-ochre">About Galle</p>
              <div className="divider divider-left" />
              <h2 className="heading-lg color-sand">A City Frozen<br />in Time</h2>
              <p className="body-lg" style={{color:'var(--color-warm-grey)', margin:'1.5rem 0'}}>
                Galle Fort is one of the most iconic coastal heritage sites in Sri Lanka, known for
                its rich history, unique architecture, and timeless atmosphere. Built first by the
                Portuguese in the 16th century and later fortified by the Dutch, Galle Fort is now
                a UNESCO World Heritage Site.
              </p>
              <p className="body-lg" style={{color:'var(--color-warm-grey)', marginBottom:'2rem'}}>
                Walking through its narrow cobblestone streets feels like stepping into another era,
                where colonial buildings, old churches, and charming villas blend with modern cafés,
                boutique hotels, and art spaces. The balance between old-world charm and contemporary
                lifestyle makes it a perfect inspiration for brands like Fort Verandah.
              </p>
              <div className={styles.galleFacts}>
                {[
                  {num:'16th C', label:'Est. by Portuguese'},
                  {num:'UNESCO', label:'World Heritage Site'},
                  {num:'36 ha', label:'Fort Area'},
                ].map(f => (
                  <div key={f.label} className={styles.galleFact}>
                    <span className={styles.galleFactNum}>{f.num}</span>
                    <span className={styles.galleFactLabel}>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`reveal-left ${styles.galleImgWrap}`}>
              <div className={styles.galleImgMain} />
              <div className={styles.galleImgAccent}>
                <p className="subheading color-sand" style={{fontSize:'0.55rem', writingMode:'vertical-rl'}}>CEYLON · GALLE FORT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className={`section-pad-lg bg-almond`} style={{backgroundColor:'var(--color-almond)'}}>
        <div className="container text-center">
          <div className="reveal">
            <p className="subheading color-ochre">Our Philosophy</p>
            <div className="divider" />
            <h2 className="heading-lg" style={{maxWidth:'700px', margin:'0 auto 2rem'}}>
              &ldquo;Heritage is not a relic. It&apos;s a living story we choose to tell.&rdquo;
            </h2>
            <p className="body-lg" style={{maxWidth:'580px', margin:'0 auto 3rem', color:'var(--color-warm-grey)'}}>
              We believe that great spaces inspire great memories. At Fort Verandah, every room,
              every meal, and every moment is curated with intention.
            </p>
            <Link href="/contact" className="btn btn-primary">Plan Your Visit</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
