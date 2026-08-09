import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  { slug: 'renntermine', title: 'Renntermine' },
  { slug: 'verein', title: 'Der Verein' },
  { slug: 'fahrer', title: 'Fahrer' },
  { slug: 'rsv-kids', title: 'RSV-Kids' },
  { slug: 'wandergruppe', title: 'Unsere Wandergruppe' },
  { slug: 'training', title: 'Training' },
  { slug: 'veranstaltungen', title: 'Veranstaltungen' },
  { slug: 'bilder', title: 'Bilder' },
  { slug: 'sponsoren', title: 'Sponsoren' },
  { slug: 'links', title: 'Links' },
  { slug: 'archiv', title: 'Archiv' },
  { slug: 'kontakt', title: 'Kontakt' },
];

const appDir = path.join(__dirname, '../app');

for (const page of pages) {
  const dirPath = path.join(appDir, page.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, 'page.tsx');
  const content = `export const metadata = {
  title: '${page.title} | RSV Schwalbe Ellmendingen',
  description: 'Informationen über ${page.title} beim RSV Schwalbe Ellmendingen e.V.',
};

export default function ${page.title.replace(/[^a-zA-Z]/g, '')}() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: 'var(--spacing-2xl)' }}>
        <h1 className="title-accent" style={{ fontSize: '2.5rem' }}>${page.title}</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--spacing-md)' }}>
          Hier finden Sie in Kürze alle Informationen zum Thema ${page.title}.
        </p>
      </div>
    </div>
  );
}
`;
  
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Created ${filePath}`);
  }
}
