'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './bistro.module.css';
import { useReveal } from '@/hooks/useReveal';


const menuData = {
  Breakfast: [
    { name: 'Ceylon Egg Hopper', desc: 'Traditional string hoppers with soft egg, sambal and coconut milk curry', price: 'LKR 950' },
    { name: 'Avocado Toast Fort', desc: 'Sourdough, smashed avo, poached egg, chilli flakes & micro herbs', price: 'LKR 1,650' },
    { name: 'Tropical Fruit Platter', desc: 'Seasonal island fruits with yoghurt and kithul treacle', price: 'LKR 780' },
    { name: 'Verandah Full Breakfast', desc: 'Eggs your way, grilled tomato, mushroom, hash brown & artisan toast', price: 'LKR 2,200' },
  ],
  Lunch: [
    { name: 'Grilled Barramundi', desc: 'Lemongrass butter, coconut jasmine rice, pickled mango salad', price: 'LKR 3,400' },
    { name: 'Fort Verandah Burger', desc: 'Wagyu patty, aged cheddar, caramelised onion, truffle aioli', price: 'LKR 2,800' },
    { name: 'Ambul Thiyal Pasta', desc: 'Goraka-cured tuna, al dente linguine, capers and fresh herbs', price: 'LKR 2,600' },
    { name: 'Garden Mezze Plate', desc: 'Hummus, baba ghanoush, falafel, pittu, seasonal vegetables', price: 'LKR 1,900' },
  ],
  Dinner: [
    { name: 'Slow-Roasted Lamb Shank', desc: '12-hour braised, saffron jus, cauliflower purée, pomegranate', price: 'LKR 5,800' },
    { name: 'Lobster Thermidor', desc: 'Local lobster, brandy cream sauce, gruyère gratin, herb salad', price: 'LKR 8,200' },
    { name: 'Prawn Curry Verandah', desc: 'Jumbo tiger prawns, coconut curry, pol roti, mango chutney', price: 'LKR 4,400' },
    { name: 'Eggplant Parmigiana', desc: 'Layered aubergine, buffalo mozzarella, san marzano, basil oil', price: 'LKR 2,900' },
  ],
  Cocktails: [
    { name: 'Galle Sunset', desc: 'Ceylon arrack, passion fruit, ginger beer, fresh lime', price: 'LKR 1,800' },
    { name: 'Fort Sling', desc: 'Gin, triple sec, fresh pineapple, grenadine, club soda', price: 'LKR 2,100' },
    { name: 'Verandah Negroni', desc: 'Bombay Sapphire, Campari, sweet vermouth, orange peel', price: 'LKR 2,400' },
    { name: 'Ceylon Old Fashioned', desc: 'Premium arrack, palm sugar, angostura bitters, cinnamon', price: 'LKR 2,200' },
  ],
};

type MenuKey = keyof typeof menuData;

export default function BistroPage() {
  useReveal();
  const [activeTab, setActiveTab] = useState<MenuKey>('Breakfast');

  return (
    <div>
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerOverlay} />
        <div className={`container ${styles.bannerContent}`}>
          <p className="subheading color-ochre reveal">Dining</p>
          <div className="divider divider-left reveal reveal-delay-1" />
          <h1 className="heading-xl color-sand reveal reveal-delay-2">THE<br />BISTRO</h1>
          <p className="body-lg reveal reveal-delay-3" style={{color:'rgba(242,229,217,0.65)', marginTop:'1.5rem', maxWidth:'440px'}}>
            Island flavours. Refined comfort. A table that lingers.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className={`section-pad-lg bg-cream`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className="reveal-left">
              <p className="subheading color-ochre">About the Bistro</p>
              <div className="divider divider-left" />
              <h2 className="heading-lg">Refined Comfort,<br />Island Soul</h2>
            </div>
            <div className="reveal-right">
              <p className="body-lg">
                The Fort Verandah Bistro celebrates the vibrant flavours of Sri Lanka with an
                international sensibility. We source locally, cook with care, and plate with pride.
                Whether it&apos;s a slow morning coffee on the verandah or a late candlelit dinner in
                the courtyard, every moment is crafted to linger.
              </p>
              <div className={styles.hours}>
                {[
                  {time:'7:00 AM – 11:00 AM', label:'Breakfast'},
                  {time:'12:00 PM – 3:00 PM', label:'Lunch'},
                  {time:'6:00 PM – 10:00 PM', label:'Dinner'},
                ].map(h => (
                  <div key={h.label} className={styles.hourItem}>
                    <span className={styles.hourLabel}>{h.label}</span>
                    <span className={styles.hourTime}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className={`section-pad bg-deep-moss`}>
        <div className="container">
          <div className="reveal text-center" style={{marginBottom:'var(--space-lg)'}}>
            <p className="subheading color-ochre">Our Menu</p>
            <div className="divider" />
            <h2 className="heading-lg color-sand">From Our Kitchen</h2>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            {(Object.keys(menuData) as MenuKey[]).map(tab => (
              <button
                key={tab}
                className={[styles.tab, activeTab === tab ? styles.tabActive : ''].join(' ')}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className={styles.menuGrid}>
            {menuData[activeTab].map((item, i) => (
              <div key={item.name} className={`reveal reveal-delay-${Math.min(i+1,4)} ${styles.menuItem}`}>
                <div className={styles.menuItemTop}>
                  <h3 className="heading-sm color-sand">{item.name}</h3>
                  <span className={styles.menuPrice}>{item.price}</span>
                </div>
                <p className="body-sm" style={{color:'var(--color-warm-grey)', marginTop:'0.5rem'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className={`section-pad-lg bg-sand`}>
        <div className="container text-center">
          <div className="reveal">
            <p className="subheading color-ochre">Reserve a Table</p>
            <div className="divider" />
            <h2 className="heading-lg">Join Us for Dinner</h2>
            <p className="body-lg" style={{maxWidth:'480px', margin:'1.5rem auto 2.5rem', color:'var(--color-warm-grey)'}}>
              Private dining available for groups of 6 and above. Special arrangements for special occasions.
            </p>
            <Link href="/contact" className="btn btn-primary">Make a Reservation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
