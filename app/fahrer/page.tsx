import { getSortedFahrerData } from '@/lib/fahrer';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Fahrer & Team | RSV Schwalbe Ellmendingen',
  description: 'Das Rennteam und die Fahrer des RSV Schwalbe Ellmendingen e.V.',
};

export default function Fahrer() {
  const fahrerList = getSortedFahrerData();

  return (
    <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
      <h1 className="title-accent animate-fade-in" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>
        Unser Team
      </h1>
      
      {fahrerList.length === 0 ? (
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>Das Team wird aktuell neu formiert. (Bitte im CMS Fahrer anlegen)</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
          {fahrerList.map((fahrer, index) => (
            <ScrollReveal key={fahrer.slug} delay={index * 100}>
              <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--surface-hover)', marginBottom: 'var(--spacing-md)' }}>
                  {fahrer.image ? (
                    <img src={fahrer.image} alt={fahrer.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                      Kein Bild
                    </div>
                  )}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{fahrer.title}</h3>
                {fahrer.discipline && <span style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 'var(--spacing-sm)' }}>{fahrer.discipline}</span>}
                {fahrer.body && <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: 'var(--spacing-sm)' }}>{fahrer.body}</p>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}
