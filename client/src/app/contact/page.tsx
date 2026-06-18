'use client';
import React, { useEffect, useState } from 'react';
import styles from './contact.module.css';
import { useReveal } from '@/hooks/useReveal';


export default function ContactPage() {
  useReveal();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', type: 'room',
    checkin: '', checkout: '', guests: '2', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerOverlay} />
        <div className={`container ${styles.bannerContent}`}>
          <p className="subheading color-ochre reveal">Get in Touch</p>
          <div className="divider divider-left reveal reveal-delay-1" />
          <h1 className="heading-xl color-sand reveal reveal-delay-2">CONTACT<br />&amp; BOOKING</h1>
        </div>
      </section>

      {/* Contact Grid */}
      <section className={`section-pad-lg bg-cream`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Info */}
            <div className="reveal-left">
              <p className="subheading color-ochre">Our Location</p>
              <div className="divider divider-left" />
              <h2 className="heading-md">Find Us in<br />Galle Fort</h2>
              <p className="body-lg" style={{margin:'1.5rem 0', color:'var(--color-warm-grey)'}}>
                Nestled within the UNESCO World Heritage Galle Fort, a short walk from the
                lighthouse and ramparts.
              </p>

              <div className={styles.infoCards}>
                {[
                  {icon:'📍', label:'Address', val:'No. 18, Light House Street, Galle Fort, Sri Lanka'},
                  {icon:'📞', label:'Phone',   val:'+94 91 223 4567'},
                  {icon:'✉️', label:'Email',   val:'info@fortverandah.com'},
                  {icon:'🕐', label:'Hours',   val:'Reception: 24/7 · Bistro: 7am – 10pm'},
                ].map(info => (
                  <div key={info.label} className={styles.infoCard}>
                    <span className={styles.infoIcon}>{info.icon}</span>
                    <div>
                      <p className="subheading color-ochre" style={{fontSize:'0.55rem'}}>{info.label}</p>
                      <p className="body-sm" style={{color:'var(--color-charcoal)'}}>{info.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapBg} />
                <div className={styles.mapPin}>
                  <span>📍</span>
                  <p className="subheading" style={{fontSize:'0.55rem', color:'var(--color-deep-moss)'}}>Fort Verandah</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="reveal-right">
              <p className="subheading color-ochre">Reservation Enquiry</p>
              <div className="divider divider-left" />
              <h2 className="heading-md">Book Your Stay</h2>

              {submitted ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>✓</div>
                  <h3 className="heading-sm" style={{marginBottom:'0.75rem'}}>Enquiry Received!</h3>
                  <p className="body-sm" style={{color:'var(--color-warm-grey)'}}>
                    Thank you for choosing Fort Verandah. We&apos;ll be in touch within 24 hours to confirm your reservation.
                  </p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Full Name *</label>
                      <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Email *</label>
                      <input
                        className={styles.input}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Phone</label>
                      <input
                        className={styles.input}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+XX XXX XXX XXXX"
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Enquiry Type</label>
                      <select className={styles.select} name="type" value={formData.type} onChange={handleChange}>
                        <option value="room">Room Booking</option>
                        <option value="bistro">Bistro Reservation</option>
                        <option value="event">Private Event</option>
                        <option value="other">General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Check-in</label>
                      <input className={styles.input} type="date" name="checkin" value={formData.checkin} onChange={handleChange} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Check-out</label>
                      <input className={styles.input} type="date" name="checkout" value={formData.checkout} onChange={handleChange} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Guests</label>
                      <select className={styles.select} name="guests" value={formData.guests} onChange={handleChange}>
                        {['1','2','3','4','5','6+'].map(n => (
                          <option key={n} value={n}>{n} {n === '1' ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Special Requests or Message</label>
                    <textarea
                      className={styles.textarea}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about any special requirements, dietary needs, or questions..."
                      rows={5}
                    />
                  </div>

                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    Send Enquiry
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
