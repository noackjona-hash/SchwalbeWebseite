import { getSortedPostsData } from '@/lib/posts';
import { getSortedTermineData } from '@/lib/termine';
import { getSponsors } from '@/lib/sponsoren';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import LightboxGallery from '@/components/LightboxGallery';

export default function Home() {
  const allPostsData = getSortedPostsData();
  const alleTermine = getSortedTermineData();
  const sponsorsList = getSponsors();
  
  // Filter for upcoming events (basic string comparison works for YYYY-MM-DD dates)
  const today = new Date().toISOString().split('T')[0];
  const upcomingEvents = alleTermine.filter(t => t.date >= today).slice(-3).reverse(); // closest 3 events

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section clip-diagonal animate-fade-in">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">RSV Ellmendingen</h1>
          <span className="hero-subtitle">Der Radsportverein in Baden</span>
        </div>
        <div className="scroll-indicator">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)', position: 'relative' }}>
        <div className="watermark">RSV</div>
        
        {/* Upcoming Events Widget */}
        {upcomingEvents.length > 0 && (
          <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 className="section-title">Nächste Termine</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
              {upcomingEvents.map((termin, index) => (
                <ScrollReveal key={termin.slug} delay={index * 100}>
                  <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', borderLeft: '4px solid var(--brand-primary)', height: '100%' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--brand-primary)', fontWeight: 700, marginBottom: 'var(--spacing-xs)', textTransform: 'uppercase' }}>
                      {termin.category}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xs)' }}>{termin.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--spacing-sm)' }}>
                      🗓️ {termin.date} {termin.location && <span style={{ marginLeft: 'var(--spacing-sm)' }}>📍 {termin.location}</span>}
                    </div>
                    {termin.link && (
                      <Link href={termin.link} target="_blank" className="link-animated" style={{ fontSize: '0.9rem' }}>
                        Mehr Infos &rarr;
                      </Link>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        <h2 className="section-title">Neues aus dem Verein</h2>

        <div className="blog-grid">
          {allPostsData.map(({ slug, date, title, excerpt, author, image }, index) => (
            <ScrollReveal key={slug} delay={index * 150}>
            <article className="content-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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
                <Link href={`/blog/${slug}`} className="link-animated">
                  Weiterlesen
                </Link>
              </div>
            </article>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Interactive Lightbox Gallery */}
        <div style={{ marginTop: 'var(--spacing-3xl)' }}>
            <h2 className="section-title">Galerie</h2>
            <LightboxGallery 
              images={[
                { src: "/images/Amateure1.webp", alt: "Amateure" },
                { src: "/images/Bellheim.webp", alt: "Bellheim" },
                { src: "/images/Rollentraining-Winter.webp", alt: "Training" }
              ]} 
            />
        </div>

        {/* Sponsors Section */}
        <ScrollReveal>
          <div className="clean-panel" style={{ marginTop: 'var(--spacing-3xl)', padding: 'var(--spacing-xl)' }}>
              <h2 className="section-title" style={{ marginBottom: 'var(--spacing-xl)' }}>Unsere Sponsoren</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xl)', justifyContent: 'center', alignItems: 'center' }}>
                {sponsorsList.map((sponsor, i) => (
                  <a key={i} href={sponsor.url || '#'} target={sponsor.url ? "_blank" : "_self"} rel="noopener noreferrer" style={{ display: 'block' }}>
                    <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" style={{ maxHeight: '60px', width: 'auto', objectFit: 'contain', background: '#fff', padding: '5px' }} />
                  </a>
                ))}
              </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Secondary Parallax Banner */}
      <section className="parallax-banner clip-diagonal animate-fade-in">
        <div className="hero-overlay"></div>
        <div className="hero-content" style={{ marginTop: 0, background: 'transparent', border: 'none', boxShadow: 'none' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--text-inverse)', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
            Leidenschaft
          </h2>
          <span className="hero-subtitle" style={{ color: 'var(--text-inverse)', marginTop: 'var(--spacing-xs)' }}>Auf zwei Rädern</span>
        </div>
      </section>
    </>
  );
}
