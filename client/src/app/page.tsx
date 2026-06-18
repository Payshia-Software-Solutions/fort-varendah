'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { useReveal } from '@/hooks/useReveal';

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.heroBg}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroGrain} />
      </div>

      {/* Decorative corner lines */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerTR} />
      <div className={styles.cornerBL} />
      <div className={styles.cornerBR} />

      {/* Top location pill */}
      <div className={styles.heroTopBar}>
        <div className={styles.locationPill}>
          <span className={styles.locationDot} />
          <span className={styles.locationText}>Galle Fort, Sri Lanka</span>
        </div>
      </div>

      {/* Main content */}
      <div className={styles.heroContent}>
        {/* Eyebrow */}
        <p className={styles.heroEyebrow}>Boutique Residence &amp; Bistro</p>

        {/* Title */}
        <div className={styles.heroTitle}>
          <span className={styles.heroTitleFort}>FORT</span>
          <div className={styles.heroTitleDividerWrap}>
            <span className={styles.heroTitleLine} />
            <span className={styles.heroTitleEstablished}>Est. 2026 · Ceylon</span>
            <span className={styles.heroTitleLine} />
          </div>
          <span className={styles.heroTitleVerandah}>VERANDAH</span>
        </div>

        {/* Description */}
        <p className={styles.heroDesc}>
          A quiet escape in the heart of Galle, where timeless Sri Lankan
          heritage meets refined modern living.
        </p>

        {/* CTAs */}
        <div className={styles.heroCtas}>
          <Link href="/rooms" className={`btn btn-primary ${styles.heroBtn}`}>
            Explore Rooms
          </Link>
          <Link href="/bistro" className={`btn btn-outline-light ${styles.heroBtn}`}>
            The Bistro
          </Link>
        </div>
      </div>

      {/* Bottom strip */}
      <div className={styles.heroBottom}>
        <div className={styles.heroBottomItem}>
          <span className={styles.heroBottomNum}>06</span>
          <span className={styles.heroBottomLabel}>Curated Rooms</span>
        </div>
        <div className={styles.heroBottomDivider} />
        <div className={styles.heroBottomItem}>
          <span className={styles.heroBottomNum}>01</span>
          <span className={styles.heroBottomLabel}>Heritage Bistro</span>
        </div>
        <div className={styles.heroBottomDivider} />
        <div className={styles.heroBottomItem}>
          <span className={styles.heroBottomNum}>UNESCO</span>
          <span className={styles.heroBottomLabel}>World Heritage Site</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}

/* ---------- Brand Intro ---------- */
function BrandIntro() {
  return (
    <section className={`section-pad ${styles.brandIntro}`}>
      <div className="container">
        <div className={styles.brandIntroGrid}>
          <div className={`reveal-left ${styles.brandIntroLeft}`}>
            <p className="subheading color-ochre">About Fort Verandah</p>
            <div className="divider divider-left" />
            <h2 className={`heading-lg ${styles.brandIntroHeading}`}>
              Where Heritage<br />
              Meets Luxury
            </h2>
          </div>
          <div className={`reveal-right ${styles.brandIntroRight}`}>
            <p className="body-lg">
              Fort Verandah is a luxury boutique residence nestled in the heart of Galle,
              where timeless Sri Lankan heritage meets refined modern living. Inspired by
              the charm of traditional southern architecture and the iconic character of
              Galle Fort, Fort Verandah reimagines old-world aesthetics through a
              contemporary lens.
            </p>
            <p className="body-lg" style={{marginTop:'1.5rem'}}>
              Every detail reflects the elegance of classic verandahs, textured walls,
              and artisanal craftsmanship blended seamlessly with modern comforts and
              understated luxury.
            </p>
            <div style={{marginTop:'2.5rem'}}>
              <Link href="/about" className="btn btn-outline">Our Story</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className={`container ${styles.statsRow}`}>
        {[
          {num:'6', label:'Curated Rooms'},
          {num:'1', label:'Heritage Bistro'},
          {num:'2026', label:'Year Founded'},
          {num:'∞', label:'Memories Made'},
        ].map(s => (
          <div key={s.label} className={`reveal ${styles.stat}`}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Featured Rooms ---------- */
function FeaturedRooms() {
  const rooms = [
    {
      id:1,
      title:'The Verandah Suite',
      desc:'Our signature suite overlooking the historic Galle Fort walls.',
      tag:'Signature',
      from:'From USD 180/night',
      color:'#2C3B2E',
    },
    {
      id:2,
      title:'Heritage Room',
      desc:'Colonial-inspired interiors with handcrafted local furniture.',
      tag:'Heritage',
      from:'From USD 120/night',
      color:'#3B3020',
    },
    {
      id:3,
      title:'Garden Studio',
      desc:'A serene studio opening onto our private tropical courtyard.',
      tag:'Garden',
      from:'From USD 95/night',
      color:'#2A3038',
    },
  ];

  return (
    <section className={`${styles.roomsSection} bg-deep-moss`}>
      <div className="container">
        <div className={`reveal text-center ${styles.sectionHeader}`}>
          <p className="subheading color-ochre">Accommodation</p>
          <div className="divider" />
          <h2 className="heading-lg color-sand">Rooms &amp; Suites</h2>
          <p className={`body-lg ${styles.sectionDesc}`} style={{color:'var(--color-warm-grey)'}}>
            Each space tells a story of craftsmanship, culture, and quiet luxury.
          </p>
        </div>

        <div className={styles.roomsGrid}>
          {rooms.map((r, i) => (
            <div
              key={r.id}
              className={`reveal reveal-delay-${i+1} ${styles.roomCard}`}
              style={{'--card-color': r.color} as React.CSSProperties}
            >
              <div className={styles.roomCardImg} style={{backgroundColor: r.color}}>
                <span className={styles.roomTag}>{r.tag}</span>
                <div className={styles.roomCardPattern} />
              </div>
              <div className={styles.roomCardBody}>
                <h3 className={`heading-sm color-sand`}>{r.title}</h3>
                <p className="body-sm" style={{color:'var(--color-warm-grey)', margin:'0.75rem 0 1.25rem'}}>{r.desc}</p>
                <div className={styles.roomCardFooter}>
                  <span className={styles.roomPrice}>{r.from}</span>
                  <Link href="/rooms" className="btn btn-outline-light" style={{fontSize:'0.62rem',padding:'0.5rem 1.2rem'}}>View Room</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal text-center ${styles.roomsCta}`}>
          <Link href="/rooms" className="btn btn-primary">View All Rooms</Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Bistro Feature ---------- */
function BistroFeature() {
  return (
    <section className={`section-pad-lg ${styles.bistroSection}`}>
      <div className="container">
        <div className={styles.bistroGrid}>
          {/* Visual block */}
          <div className={`reveal-left ${styles.bistroVisual}`}>
            <div className={styles.bistroImgMain}>
              <div className={styles.bistroImgPattern} />
              <div className={styles.bistroLabel}>
                <span className="subheading color-ochre">The Bistro</span>
              </div>
            </div>
            <div className={styles.bistroImgAccent}>
              <div className={styles.bistroImgPattern2} />
            </div>
          </div>

          {/* Content */}
          <div className={`reveal-right ${styles.bistroContent}`}>
            <p className="subheading color-ochre">Dining</p>
            <div className="divider divider-left" />
            <h2 className="heading-lg">Refined Comfort,<br/>Island Soul</h2>
            <p className="body-lg" style={{margin:'1.5rem 0'}}>
              Our bistro celebrates the vibrant flavours of Sri Lanka with an
              international sensibility. Morning coffee on the verandah, long lunches
              in the courtyard, or candlelit dinners — every moment is crafted to linger.
            </p>
            <div className={styles.bistroFeatures}>
              {['Breakfast 7am – 11am','Lunch 12pm – 3pm','Dinner 6pm – 10pm','Private Dining Available'].map(f => (
                <div key={f} className={styles.bistroFeatureItem}>
                  <span className={styles.bistroFeatureDot} />
                  <span className="body-sm">{f}</span>
                </div>
              ))}
            </div>
            <div style={{marginTop:'2.5rem', display:'flex', gap:'1rem', flexWrap:'wrap'}}>
              <Link href="/bistro" className="btn btn-primary">View Menu</Link>
              <Link href="/contact" className="btn btn-outline">Reserve a Table</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery Strip ---------- */
function GalleryStrip() {
  const items = [
    {label:'Architecture', color:'#2C3B2E'},
    {label:'Interiors',    color:'#3B3020'},
    {label:'The Bistro',   color:'#2A3038'},
    {label:'Lifestyle',    color:'#2C2D26'},
    {label:'Galle Fort',   color:'#1E2A20'},
  ];
  return (
    <section className={styles.galleryStrip}>
      <div className={styles.galleryHeader}>
        <div className="container">
          <div className="reveal">
            <p className="subheading color-ochre">Visual Journey</p>
            <div className="divider divider-left" style={{margin:'1rem 0'}} />
            <h2 className="heading-md">Life at Fort Verandah</h2>
          </div>
        </div>
      </div>
      <div className={styles.galleryGrid}>
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`reveal reveal-delay-${Math.min(i+1,4)} ${styles.galleryItem}`}
            style={{backgroundColor: item.color}}
          >
            <div className={styles.galleryItemOverlay} />
            <div className={styles.galleryItemLabel}>
              <span className="subheading color-sand">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="container" style={{paddingTop:'2rem', textAlign:'center'}}>
        <Link href="/gallery" className="btn btn-outline">Explore Gallery</Link>
      </div>
    </section>
  );
}

/* ---------- About Galle ---------- */
function AboutGalle() {
  return (
    <section className={`${styles.galleSection} bg-night-forest`}>
      <div className="container">
        <div className={styles.galleGrid}>
          <div className={`reveal ${styles.galleImg}`}>
            <div className={styles.galleImgInner} />
            <div className={styles.galleBadge}>
              <span className="subheading color-ochre" style={{fontSize:'0.55rem'}}>UNESCO</span>
              <p style={{fontFamily:'var(--font-primary)', fontSize:'0.9rem', color:'var(--color-sand)', lineHeight:1.2}}>World Heritage<br/>Site</p>
            </div>
          </div>
          <div className={`reveal-right ${styles.galleContent}`}>
            <p className="subheading color-ochre">About Galle</p>
            <div className="divider divider-left" />
            <h2 className="heading-lg color-sand">A City Frozen<br />in Time</h2>
            <p className="body-lg" style={{color:'var(--color-warm-grey)', margin:'1.5rem 0'}}>
              Galle Fort is one of the most iconic coastal heritage sites in Sri Lanka,
              known for its rich history, unique architecture, and timeless atmosphere.
              Built first by the Portuguese in the 16th century, it is now a UNESCO
              World Heritage Site.
            </p>
            <p className="body-lg" style={{color:'var(--color-warm-grey)', marginBottom:'2.5rem'}}>
              Walking through its narrow cobblestone streets feels like stepping into
              another era — a perfect inspiration for brands like Fort Verandah.
            </p>
            <Link href="/about" className="btn btn-outline-light">Discover More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA Banner ---------- */
function CtaBanner() {
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.ctaBannerOverlay} />
      <div className={`container reveal ${styles.ctaContent}`}>
        <p className="subheading color-ochre">Your Next Chapter Begins Here</p>
        <div className="divider" />
        <h2 className={`heading-xl color-sand ${styles.ctaHeading}`}>REFINED<br />COMFORT</h2>
        <p className="body-lg" style={{color:'rgba(242,229,217,0.7)', maxWidth:'500px', margin:'1.5rem auto 2.5rem'}}>
          Heritage meets modern luxury — a quiet escape in Galle Fort.
        </p>
        <div style={{display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap'}}>
          <Link href="/contact" className="btn btn-primary">Book Your Stay</Link>
          <Link href="/rooms" className="btn btn-outline-light">View Rooms</Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function HomePage() {
  useReveal();
  return (
    <>
      <Hero />
      <BrandIntro />
      <FeaturedRooms />
      <BistroFeature />
      <GalleryStrip />
      <AboutGalle />
      <CtaBanner />
    </>
  );
}
