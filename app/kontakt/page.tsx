import { getPageData } from '@/lib/pages';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata() {
  const pageData = await getPageData('kontakt');
  return {
    title: `${pageData?.title || 'Kontakt'} | RSV Schwalbe Ellmendingen`,
  };
}

export default async function Kontakt() {
  const pageData = await getPageData('kontakt');

  if (!pageData) return null;

  return (
    <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: 'var(--spacing-2xl)' }}>
        <h1 className="title-accent" style={{ fontSize: '2.5rem' }}>{pageData.title}</h1>
        {pageData.image && (
          <img src={pageData.image} alt={pageData.title} style={{ width: '100%', height: 'auto', margin: 'var(--spacing-xl) 0' }} />
        )}
        <div 
          className="markdown-content" 
          dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} 
          style={{ lineHeight: 1.8, fontSize: '1.1rem', marginTop: 'var(--spacing-md)' }}
        />
        
        <ContactForm />
      </div>
    </div>
  );
}
