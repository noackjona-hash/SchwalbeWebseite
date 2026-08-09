export const metadata = {
  title: 'RSV-Kids | RSV Schwalbe Ellmendingen',
  description: 'Informationen über RSV-Kids beim RSV Schwalbe Ellmendingen e.V.',
};

export default function RSVKids() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: 'var(--spacing-2xl)' }}>
        <h1 className="title-accent" style={{ fontSize: '2.5rem' }}>RSV-Kids</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--spacing-md)' }}>
          Hier finden Sie in Kürze alle Informationen zum Thema RSV-Kids.
        </p>
      </div>
    </div>
  );
}
