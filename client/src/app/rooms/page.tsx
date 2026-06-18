'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './rooms.module.css';
import { useReveal } from '@/hooks/useReveal';


const rooms = [
  {
    id: 1,
    name: 'The Verandah Suite',
    tag: 'Signature',
    size: '65 m²',
    from: 'USD 180',
    desc: 'Our flagship suite, perched with views of the Galle Fort walls. Features a private verandah, handcrafted teak furniture, and a standalone soaking tub. The ultimate expression of Fort Verandah\'s identity.',
    amenities: ['Private Verandah','King Bed','Soaking Tub','Heritage Minibar','Air Conditioning','Fort Wall Views'],
    color: '#2C3B2E',
  },
  {
    id: 2,
    name: 'Heritage Room',
    tag: 'Heritage',
    size: '42 m²',
    from: 'USD 120',
    desc: 'Steeped in colonial character, this room features arched doorways, wooden shutters, and locally sourced artisan pieces. A deeply curated space that tells the story of Galle.',
    amenities: ['King Bed','Arched Doorways','Wooden Shutters','Rain Shower','Air Conditioning','Courtyard View'],
    color: '#3B3020',
  },
  {
    id: 3,
    name: 'Garden Studio',
    tag: 'Garden',
    size: '35 m²',
    from: 'USD 95',
    desc: 'A serene studio opening onto our private tropical courtyard. Sunlight, lush greenery and morning birdsong make this the perfect writer\'s retreat.',
    amenities: ['Queen Bed','Private Garden Access','Outdoor Shower','Writing Desk','Air Conditioning','Tropical Garden View'],
    color: '#2A3038',
  },
  {
    id: 4,
    name: 'Fort View Room',
    tag: 'Classic',
    size: '30 m²',
    from: 'USD 85',
    desc: 'Elegantly appointed with all the comforts of Fort Verandah — clean lines, curated art, and warm textiles in our signature palette.',
    amenities: ['Queen Bed','Heritage Art','Premium Linens','Ensuite Bathroom','Air Conditioning','Garden View'],
    color: '#1E2A20',
  },
  {
    id: 5,
    name: 'The Loft',
    tag: 'Loft',
    size: '55 m²',
    from: 'USD 155',
    desc: 'A bi-level retreat with exposed timber beams and a mezzanine sleeping area. Perfect for longer stays — with a dedicated workspace and a private plunge pool.',
    amenities: ['Mezzanine Bedroom','Private Plunge Pool','Workspace','Kitchenette','Air Conditioning','Panoramic Views'],
    color: '#2C2D26',
  },
  {
    id: 6,
    name: 'The Courtyard Room',
    tag: 'Courtyard',
    size: '38 m²',
    from: 'USD 100',
    desc: 'Step directly into our sun-dappled courtyard from this ground-floor room. Colonial tile floors and handwoven cushions create an atmosphere of effortless calm.',
    amenities: ['King Bed','Courtyard Access','Colonial Tile Floors','Rain Shower','Air Conditioning','Courtyard View'],
    color: '#3a3028',
  },
];

export default function RoomsPage() {
  useReveal();
  return (
    <div className={styles.page}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerOverlay} />
        <div className={`container ${styles.bannerContent}`}>
          <p className="subheading color-ochre reveal">Accommodation</p>
          <div className="divider divider-left reveal reveal-delay-1" />
          <h1 className={`heading-xl color-sand reveal reveal-delay-2`}>ROOMS<br />&amp; SUITES</h1>
          <p className={`body-lg reveal reveal-delay-3`} style={{color:'rgba(242,229,217,0.65)', marginTop:'1.5rem', maxWidth:'480px'}}>
            Six carefully curated spaces — each one a story of craftsmanship, culture, and quiet luxury.
          </p>
        </div>
      </section>

      {/* Rooms List */}
      <section className={`section-pad-lg bg-cream`}>
        <div className="container">
          {rooms.map((room, i) => (
            <div
              key={room.id}
              className={`${styles.roomRow} ${i % 2 !== 0 ? styles.roomRowReverse : ''}`}
            >
              {/* Image placeholder */}
              <div
                className={`reveal-left ${styles.roomImg}`}
                style={{backgroundColor: room.color}}
              >
                <div className={styles.roomImgPattern} />
                <div className={styles.roomImgTag}>
                  <span className="subheading color-ochre">{room.tag}</span>
                </div>
                <div className={styles.roomImgSize}>
                  <span className="subheading color-sand">{room.size}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`reveal-right ${styles.roomContent}`}>
                <p className="subheading color-ochre">0{room.id} / 06</p>
                <div className="divider divider-left" />
                <h2 className="heading-md">{room.name}</h2>
                <p className="body-lg" style={{margin:'1.25rem 0', color:'var(--color-warm-grey)'}}>{room.desc}</p>

                <div className={styles.amenitiesGrid}>
                  {room.amenities.map(a => (
                    <div key={a} className={styles.amenityItem}>
                      <span className={styles.amenityDot} />
                      <span className="body-sm">{a}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.roomFooter}>
                  <div>
                    <p className="subheading color-warm-grey">Starting From</p>
                    <p className={styles.price}>{room.from} <span>/night</span></p>
                  </div>
                  <Link href="/contact" className="btn btn-primary">Book This Room</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section className={`section-pad bg-deep-moss`}>
        <div className="container">
          <div className={`reveal text-center`} style={{marginBottom:'var(--space-lg)'}}>
            <p className="subheading color-ochre">Good to Know</p>
            <div className="divider" />
            <h2 className="heading-md color-sand">Policies &amp; Inclusions</h2>
          </div>
          <div className={styles.policiesGrid}>
            {[
              {title:'Check-in / Out',  body:'Check-in from 2:00 PM · Check-out by 11:00 AM · Early/late arrangements on request'},
              {title:'Breakfast',        body:'Complimentary breakfast for all guests served at the Bistro from 7:00 AM'},
              {title:'Cancellation',     body:'Free cancellation up to 48 hours before arrival · 1 night charge thereafter'},
              {title:'Inclusions',       body:'High-speed WiFi · Daily housekeeping · Welcome drink · Heritage tour map'},
            ].map(p => (
              <div key={p.title} className={`reveal ${styles.policyCard}`}>
                <h3 className="heading-sm color-ochre" style={{marginBottom:'0.75rem'}}>{p.title}</h3>
                <p className="body-sm" style={{color:'var(--color-warm-grey)'}}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
