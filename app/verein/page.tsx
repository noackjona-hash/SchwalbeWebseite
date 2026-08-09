import { getPageData } from '@/lib/pages';

export async function generateMetadata() {
  const pageData = await getPageData('verein');
  return {
    title: `${pageData?.title || 'Der Verein'} | RSV Schwalbe Ellmendingen`,
    description: 'Informationen über den Verein RSV Schwalbe Ellmendingen e.V.',
  };
}

export default async function DerVerein() {
  const pageData = await getPageData('verein');

  if (!pageData) {
    return (
      <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="glass-panel animate-fade-in" style={{ padding: 'var(--spacing-2xl)' }}>
          <h1 className="title-accent" style={{ fontSize: '2.5rem' }}>Der Verein</h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--spacing-md)' }}>
            Die Seite wird aktuell überarbeitet. (Bitte im CMS befüllen)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: 'var(--spacing-2xl)' }}>
        <h1 className="title-accent" style={{ fontSize: '2.5rem' }}>{pageData.title}</h1>
        {pageData.image && (
          <img 
            src={pageData.image} 
            alt={pageData.title} 
            style={{ width: '100%', height: 'auto', borderRadius: '0', border: '2px solid var(--border-color)', margin: 'var(--spacing-xl) 0' }}
          />
        )}
        <div 
          className="markdown-content" 
          dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} 
          style={{ lineHeight: 1.8, fontSize: '1.1rem', marginTop: 'var(--spacing-md)' }}
        />
      </div>
    </div>
  );
}
