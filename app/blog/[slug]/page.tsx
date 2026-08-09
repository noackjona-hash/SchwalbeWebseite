import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug);
  
  const siteUrl = "https://schwalbewebseite.pages.dev";
  const postUrl = `${siteUrl}/blog/${resolvedParams.slug}`;
  const imageUrl = postData.image ? `${siteUrl}${postData.image}` : `${siteUrl}/images/Amateure1.webp`;
  const excerpt = (postData as any).excerpt || `Neues aus dem Verein: ${postData.title}`;

  return {
    title: `${postData.title} | RSV Schwalbe Ellmendingen`,
    description: excerpt,
    openGraph: {
      title: postData.title,
      description: excerpt,
      url: postUrl,
      type: "article",
      publishedTime: postData.date,
      authors: postData.author ? [postData.author] : [],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: postData.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: excerpt,
      images: [imageUrl],
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug);

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      <article className="glass-panel animate-fade-in" style={{ padding: 'var(--spacing-2xl)', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="title-accent" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>
          {postData.title}
        </h1>
        <div style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)', fontSize: '0.9rem' }}>
          Publiziert am {postData.date} {postData.author && `von ${postData.author}`}
        </div>
        
        {postData.image && (
          <img 
            src={postData.image} 
            alt={postData.title} 
            style={{ width: '100%', height: 'auto', borderRadius: '0', border: '2px solid var(--border-color)', marginBottom: 'var(--spacing-xl)' }}
          />
        )}
        
        <div 
          className="markdown-content" 
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          style={{ lineHeight: 1.8, fontSize: '1.1rem' }}
        />
        
        <div style={{ marginTop: 'var(--spacing-3xl)' }}>
          <Link href="/" className="btn btn-secondary">
            &larr; Zurück zur Übersicht
          </Link>
        </div>
      </article>
    </div>
  );
}
