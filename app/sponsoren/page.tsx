export const metadata = {
  title: 'Sponsoren | RSV Schwalbe Ellmendingen',
  description: 'Informationen über Sponsoren beim RSV Schwalbe Ellmendingen e.V.',
};

const sponsors = [
  { name: 'Altinger Drucktechnik', url: 'https://www.altinger-drucktechnik.de/', logo: '/images/sponsoren/AltingerHP.jpg' },
  { name: 'Bike Sport Höhn', url: 'https://www.bike-sport-hoehn.de/', logo: '/images/sponsoren/LogoRadHoehnHP.jpg' },
  { name: 'Containerdienst Birkenfeld', url: 'https://www.containerdienst-birkenfeld.de/', logo: '/images/sponsoren/ContainerdienstHP.jpg' },
  { name: 'Drollinger', url: 'https://www.drollinger.de/willkommen', logo: '/images/sponsoren/DrollingerHP.jpg' },
  { name: 'Heizung Sanitär Pforzheim', url: 'http://www.heizung-sanitaer-pforzheim.de/', logo: '/images/sponsoren/GasSchmidtHP.jpg' },
  { name: 'Kaiser Präzision', url: 'https://kaiser-praezision.de/', logo: '/images/sponsoren/LogoKaiserPraezisionHP.jpg' },
  { name: 'Mister Bike', url: 'https://www.misterbike.com/', logo: '/images/sponsoren/MB_logo_hp.jpg' },
  { name: 'OTEC', url: 'https://www.otec.de/de/', logo: '/images/sponsoren/OtecHP.jpg' },
  { name: 'Sparkasse Pforzheim Calw', url: 'https://www.sparkasse-pforzheim-calw.de/de/home.html', logo: '/images/sponsoren/Logo Sparkasse Test.jpg' },
  { name: 'Sport Tex Haag', url: 'https://www.sport-tex.de/', logo: '/images/sponsoren/SportTexHaagHP.jpg' },
];

export default function Sponsoren() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
      <div className="animate-fade-in" style={{ padding: 'var(--spacing-2xl) 0' }}>
        <h1 className="section-title">Unsere Sponsoren</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-2xl)', textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-2xl) auto' }}>
          Wir bedanken uns herzlich bei unseren Sponsoren für die großartige Unterstützung! Ohne ihr Engagement wäre unsere Vereinsarbeit und die Ausrichtung unserer Rennen nicht möglich.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2xl)', justifyContent: 'center', alignItems: 'center' }}>
          {sponsors.map((sponsor, i) => (
            <a key={i} href={sponsor.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
              <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" style={{ maxHeight: '100px', width: 'auto', objectFit: 'contain', background: '#fff', padding: '10px' }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
