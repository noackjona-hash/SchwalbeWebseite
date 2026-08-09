import { getSortedTermineData } from '@/lib/termine';

export const metadata = {
  title: 'Renntermine | RSV Schwalbe Ellmendingen',
  description: 'Aktuelle Renntermine des RSV Schwalbe Ellmendingen e.V.',
};

export default function Renntermine() {
  const alleTermine = getSortedTermineData();
  const renntermine = alleTermine.filter(t => t.category === 'Renntermin');

  return (
    <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: 'var(--spacing-2xl)' }}>
        <h1 className="title-accent" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-xl)' }}>Renntermine</h1>
        
        {renntermine.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)' }}>Derzeit sind keine Renntermine eingetragen. (Bitte im CMS hinzufügen)</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {renntermine.map((termin) => (
              <div key={termin.slug} style={{ padding: 'var(--spacing-lg)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{termin.title}</h3>
                    <div style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>{termin.date}</div>
                    {termin.location && <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>📍 {termin.location}</div>}
                  </div>
                  {termin.link && (
                    <a href={termin.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                      Zur Ausschreibung
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
