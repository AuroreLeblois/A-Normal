// @ts-ignore
import diceSvg from '/dice.svg'
import { SlideAnimation } from 'react-kariu'

function Header() {
  return (
    <header>
    <SlideAnimation direction="top" duration={500} delay={100} trigger={true}>
      <img src={diceSvg} alt="Icône A/Normal" />
    </SlideAnimation>
    <SlideAnimation direction="top" duration={500} delay={300} trigger={true}> 
      <h1>A/NORMAL</h1>
    </SlideAnimation>
    <SlideAnimation direction="top" duration={500} delay={600} trigger={true}> 
      <h2>Ressources officielles du jeu — Aurore Darcissac</h2>
    </SlideAnimation>
    </header>
  )
}

export default Header
