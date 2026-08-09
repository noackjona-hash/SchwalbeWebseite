'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate sending an email or connecting to Formspree/Web3Forms
    setStatus('Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich melden.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div style={{ marginTop: 'var(--spacing-2xl)', padding: 'var(--spacing-xl)', background: 'var(--bg-secondary)', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--spacing-md)' }}>Schreiben Sie uns</h2>
      
      {status ? (
        <div style={{ padding: 'var(--spacing-md)', background: 'var(--accent-primary)', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>
          {status}
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="name" style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Name</label>
            <input 
              type="text" 
              id="name" 
              required 
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="email" style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>E-Mail Adresse</label>
            <input 
              type="email" 
              id="email" 
              required 
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="message" style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Nachricht</label>
            <textarea 
              id="message" 
              rows={5} 
              required 
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', resize: 'vertical' }}
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--spacing-sm)' }}>
            Nachricht senden
          </button>
        </form>
      )}
    </div>
  );
}
