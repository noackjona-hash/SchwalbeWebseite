import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section animate-fade-in">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">RSV Ellmendingen</h1>
          <p style={{ fontSize: '1.25rem', marginTop: 'var(--spacing-sm)' }}>Der Radsportverein in Baden</p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <h2 className="section-title">Neues aus dem Verein</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--spacing-2xl)' }}>
          {allPostsData.map(({ slug, date, title, excerpt, author, image }) => (
            <article key={slug} className="content-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              {image && (
                <Link href={`/blog/${slug}`}>
                  <div style={{ width: '100%', height: '240px', overflow: 'hidden' }} className="image-hover">
                    <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.05)' }} />
                  </div>
                </Link>
              )}
              <div style={{ paddingTop: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Link href={`/blog/${slug}`}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: 'var(--spacing-xs)' }}>{title}</h3>
                </Link>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-sm)' }}>
                  {date} {author && `| ${author}`}
                </div>
                <p style={{ color: 'var(--text-secondary)', flex: 1 }}>{excerpt}</p>
                <Link href={`/blog/${slug}`} style={{ alignSelf: 'flex-start', marginTop: 'var(--spacing-md)', color: 'var(--text-primary)', fontWeight: 600, borderBottom: '1px solid var(--text-primary)', paddingBottom: '2px' }}>
                  Weiterlesen →
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {/* Additional Gallery Preview if needed */}
        <div style={{ marginTop: 'var(--spacing-3xl)' }}>
            <h2 className="section-title">Galerie</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
                <div style={{ overflow: 'hidden' }} className="image-hover">
                  <img src="/images/Amateure1.webp" alt="Amateure" style={{ width: '100%', height: '300px', objectFit: 'cover', transform: 'scale(1.05)', display: 'block' }} />
                </div>
                <div style={{ overflow: 'hidden' }} className="image-hover">
                  <img src="/images/Bellheim.webp" alt="Bellheim" style={{ width: '100%', height: '300px', objectFit: 'cover', transform: 'scale(1.05)', display: 'block' }} />
                </div>
                <div style={{ overflow: 'hidden' }} className="image-hover">
                  <img src="/images/Rollentraining-Winter.webp" alt="Training" style={{ width: '100%', height: '300px', objectFit: 'cover', transform: 'scale(1.05)', display: 'block' }} />
                </div>
            </div>
        </div>

        {/* Sponsors Section */}
        <div style={{ marginTop: 'var(--spacing-3xl)' }}>
            <h2 className="section-title">Unsere Sponsoren</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xl)', justifyContent: 'center', alignItems: 'center' }}>
              {[
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
              ].map((sponsor, i) => (
                <a key={i} href={sponsor.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                  <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain', background: '#fff', padding: '5px' }} />
                </a>
              ))}
            </div>
        </div>
      </div>

      {/* Secondary Parallax Banner */}
      <section className="parallax-banner animate-fade-in">
        <div className="hero-overlay"></div>
        <div className="hero-content" style={{ marginTop: 0 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', fontWeight: 600 }}>
            Leidenschaft auf zwei Rädern
          </h2>
        </div>
      </section>
    </>
  );
}
