function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      © Aurore Darcissac — {currentYear} · Tous droits réservés ·
    </footer>
  )
}

export default Footer
