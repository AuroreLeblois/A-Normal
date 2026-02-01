import { Layout, HoverAnimation, Button } from "react-kariu"

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      © Aurore Darcissac — {currentYear} · Tous droits réservés ·
      <section className="section lower-section">
        <Layout flexDirection="column" gap={"1rem"}>
          <p>
            Ces documents sont offerts avec l'achat du livret officiel.<br />
            Merci de soutenir le travail d'auteurs indépendants 💛
          </p>
          <HoverAnimation
            duration={300}
            intensity={1}
            type="scale"
          >
            <Button
              label="☕ Me soutenir sur Buy Me a Coffee"
              className="buymeacoffee-btn"
              onClick={() => window.open('https://buymeacoffee.com/lebloisaurk', '_blank')}
            />
          </HoverAnimation>
        </Layout>
      </section>
    </footer>
  )
}

export default Footer
