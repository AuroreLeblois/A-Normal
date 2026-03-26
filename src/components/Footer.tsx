import { HoverAnimation, Button } from 'react-kariu'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">

      {/* ── Gauche : marque ── */}
      <div className="footer-brand">
        <span className="footer-brand-name">A/Normal Archive</span>
        <span className="footer-copyright">
          © {currentYear} Aurore Darcissac — Tous droits réservés.
        </span>
      </div>

      {/* ── Centre : liens ── */}
      <nav className="footer-links">
        <span className="footer-link">Mentions légales</span>
        <a
          className="footer-link"
          href="https://buymeacoffee.com/lebloisaurk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soutenir
        </a>
      </nav>

      {/* ── Droite : CTA soutien ── */}
      <div className="footer-support">
        <span className="footer-tagline">
          Ces documents sont offerts avec l'achat du livret officiel.
        </span>
      </div>

    </footer>
  )
}

export default Footer
