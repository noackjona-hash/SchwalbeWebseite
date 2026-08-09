export const metadata = {
  title: 'Unsere Wandergruppe | RSV Schwalbe Ellmendingen',
  description: 'Informationen über Unsere Wandergruppe beim RSV Schwalbe Ellmendingen e.V.',
};

export default function UnsereWandergruppe() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: 'var(--spacing-2xl)' }}>
        <h1 className="title-accent" style={{ fontSize: '2.5rem' }}>Unsere Wandergruppe</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--spacing-md)' }}>
          Hier finden Sie in Kürze alle Informationen zum Thema Unsere Wandergruppe.
        </p>
      </div>
    </div>
  );
}
