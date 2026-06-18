'use client';
import React, { useEffect, useState } from 'react';
import styles from './gallery.module.css';
import { useReveal } from '@/hooks/useReveal';


const categories = ['All', 'Architecture', 'Interiors', 'Food & Drink', 'Lifestyle', 'Galle Fort'];

const items = [
  {id:1, cat:'Architecture', color:'#2C3B2E', size:'large',  label:'The Main Entrance'},
  {id:2, cat:'Interiors',    color:'#3B3020', size:'normal', label:'The Verandah Suite'},
  {id:3, cat:'Food & Drink', color:'#2A3038', size:'normal', label:'Breakfast at the Bistro'},
  {id:4, cat:'Lifestyle',    color:'#1E2A20', size:'normal', label:'Afternoon Tea'},
  {id:5, cat:'Architecture', color:'#2C2D26', size:'tall',   label:'The Courtyard'},
  {id:6, cat:'Galle Fort',   color:'#1a2118', size:'normal', label:'Fort Walls at Dusk'},
  {id:7, cat:'Food & Drink', color:'#3B3020', size:'large',  label:'Chef\'s Signature'},
  {id:8, cat:'Interiors',    color:'#2C3B2E', size:'normal', label:'Garden Studio'},
  {id:9, cat:'Lifestyle',    color:'#2A3038', size:'normal', label:'Morning Swim'},
  {id:10,cat:'Galle Fort',   color:'#1E2A20', size:'tall',   label:'Lighthouse View'},
  {id:11,cat:'Architecture', color:'#2C2D26', size:'normal', label:'Colonial Arches'},
  {id:12,cat:'Food & Drink', color:'#3a3028', size:'normal', label:'Cocktail Hour'},
];

export default function GalleryPage() {
  useReveal();
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? items : items.filter(i => i.cat === active);

  return (
    <div>
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerOverlay} />
        <div className={`container ${styles.bannerContent}`}>
          <p className="subheading color-ochre reveal">Visual Journey</p>
          <div className="divider divider-left reveal reveal-delay-1" />
          <h1 className="heading-xl color-sand reveal reveal-delay-2">GALLERY</h1>
          <p className="body-lg reveal reveal-delay-3" style={{color:'rgba(242,229,217,0.65)', marginTop:'1.5rem', maxWidth:'400px'}}>
            Life at Fort Verandah — architecture, interiors, food, and culture.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className={`section-pad bg-cream`}>
        <div className="container">
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat}
                className={[styles.filterBtn, active === cat ? styles.filterActive : ''].join(' ')}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.galleryMasonry}>
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className={`reveal reveal-delay-${Math.min(i%4+1,4)} ${styles.galleryCard} ${styles[`size_${item.size}`]}`}
                style={{backgroundColor: item.color}}
              >
                <div className={styles.cardPattern} />
                <div className={styles.cardOverlay}>
                  <span className="subheading color-sand">{item.cat}</span>
                  <p className={styles.cardLabel}>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
