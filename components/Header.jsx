import Link from 'next/link';
import styles from './Header.module.css';

const navLinks = [
  { href: '/', label: 'Start' },
  { 
    label: 'Verein', 
    subLinks: [
      { href: '/verein', label: 'Der Verein' },
      { href: '/sponsoren', label: 'Sponsoren' },
      { href: '/kontakt', label: 'Kontakt' },
    ]
  },
  { 
    label: 'Radsport', 
    subLinks: [
      { href: '/fahrer', label: 'Fahrer' },
      { href: '/rsv-kids', label: 'RSV-Kids' },
      { href: '/wandergruppe', label: 'Wandergruppe' },
      { href: '/training', label: 'Training' },
    ]
  },
  { 
    label: 'Termine', 
    subLinks: [
      { href: '/renntermine', label: 'Renntermine' },
      { href: '/veranstaltungen', label: 'Veranstaltungen' },
    ]
  },
  { 
    label: 'Mehr', 
    subLinks: [
      { href: '/bilder', label: 'Galerie' },
      { href: '/links', label: 'Links' },
      { href: '/archiv', label: 'Archiv' },
    ]
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        
        {/* Logo */}
        <Link href="/" className={styles.logoText}>
          RSV <span>Ellmendingen</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.label} className={link.subLinks ? styles.dropdownItem : ''}>
                {link.href ? (
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                ) : (
                  <span className={styles.navLink} style={{ cursor: 'pointer' }}>
                    {link.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
                {link.subLinks && (
                  <ul className={styles.dropdownMenu}>
                    {link.subLinks.map(sub => (
                      <li key={sub.href}>
                        <Link href={sub.href} className={styles.dropdownLink}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className={styles.mobileNavTrigger}>
          <span>Menu</span>
          <label htmlFor="nav-toggle" className={styles.navToggleLabel}>
            <div className={styles.hamburger}></div>
          </label>
        </div>
        
        <input type="checkbox" id="nav-toggle" className={styles.navToggle} />
        
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <Link href={link.href} className={styles.mobileNavLink}>{link.label}</Link>
                ) : (
                  <div style={{ padding: 'var(--spacing-sm) 0' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>{link.label}</div>
                    <ul style={{ listStyle: 'none', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {link.subLinks.map(sub => (
                        <li key={sub.href}>
                          <Link href={sub.href} className={styles.mobileNavLink} style={{ borderBottom: 'none', padding: '5px 0', fontSize: '1.1rem' }}>
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
