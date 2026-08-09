export const metadata = {
  title: 'Archiv | RSV Schwalbe Ellmendingen',
  description: 'Informationen über Archiv beim RSV Schwalbe Ellmendingen e.V.',
};

export default function Archiv() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: 'var(--spacing-2xl)' }}>
        <h1 className="title-accent" style={{ fontSize: '2.5rem' }}>Archiv</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--spacing-md)' }}>
          Hier finden Sie in Kürze alle Informationen zum Thema Archiv.
        </p>
      </div>
    </div>
  );
}
