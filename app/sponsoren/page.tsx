import { getSponsors } from '@/lib/sponsoren';

export const metadata = {
  title: 'Sponsoren | RSV Schwalbe Ellmendingen',
  description: 'Informationen über Sponsoren beim RSV Schwalbe Ellmendingen e.V.',
};
export default function Sponsoren() {
  const sponsors = getSponsors();
  
  return (
    <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
      <div className="animate-fade-in" style={{ padding: 'var(--spacing-2xl) 0' }}>
        <h1 className="section-title">Unsere Sponsoren</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-2xl)', textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-2xl) auto' }}>
          Wir bedanken uns herzlich bei unseren Sponsoren für die großartige Unterstützung! Ohne ihr Engagement wäre unsere Vereinsarbeit und die Ausrichtung unserer Rennen nicht möglich.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2xl)', justifyContent: 'center', alignItems: 'center' }}>
          {sponsors.map((sponsor, i) => (
            <a key={i} href={sponsor.url || '#'} target={sponsor.url ? "_blank" : "_self"} rel="noopener noreferrer" style={{ display: 'block' }}>
              <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" style={{ maxHeight: '100px', width: 'auto', objectFit: 'contain', background: '#fff', padding: '10px' }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
