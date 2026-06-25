const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Qui je suis", href: "#qui-je-suis" },
  { label: "Mes accompagnements", href: "#accompagnements" },
  { label: "Comment ça fonctionne", href: "#fonctionnement" },
  { label: "Destinations", href: "#destinations" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const footerExplorer = [
  "Accueil",
  "Qui je suis",
  "Mes accompagnements",
  "Comment ça fonctionne",
  "Destinations",
  "FAQ",
  "Contact",
];

export default function Home() {
  return (
    <main className="cha-site" id="accueil">
      <header className="cha-header">
        <a href="/bureau" className="cha-logo-link" aria-label="Accès privé au Bureau de Cha">
          <img src="/logo-cha.svg" alt="Les Voyages de Cha" className="cha-logo" />
        </a>

        <nav className="cha-nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>{item.label}</a>
          ))}
        </nav>

        <a href="#contact" className="cha-button cha-header-button">
          Réserver un appel découverte <span>♥</span>
        </a>
      </header>

      <section className="cha-hero" aria-label="Page d'accueil Les Voyages de Cha">
        <div className="hero-left">
          <div className="hero-stamp hero-stamp-left">Échapper<br />& explorer</div>
          <div className="hero-leaf hero-leaf-left" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <div className="hero-photo-card">
            <img src="/hero-cha.png" alt="Vue méditerranéenne vers la mer" className="hero-photo" />
          </div>
          <div className="hero-plane-line" aria-hidden="true">⌁ ⌁ ⌁ ✈</div>
        </div>

        <div className="hero-right">
          <div className="hero-postmark" aria-hidden="true">
            <span>LET'S GO</span>
            <span>SOMEWHERE</span>
            <span>BEAUTIFUL</span>
          </div>

          <div className="hero-blue-leaf" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </div>

          <h1>
            Voyagez<br />
            autrement,<br />
            <span>vivez intensément.</span>
          </h1>

          <div className="hero-separator" aria-hidden="true">♡</div>

          <p className="hero-intro">
            Des voyages sur-mesure,<br />
            <span>créés avec vous pour vous !</span>
          </p>

          <a href="#contact" className="cha-button hero-button">
            Réserver un appel découverte <span>♥</span>
          </a>

          <div className="hero-polaroid" aria-hidden="true">
            <img src="/hero-cha.png" alt="" />
          </div>

          <div className="hero-small-stamp" aria-hidden="true">Voyager<br />c'est<br />vivre</div>
          <div className="hero-bottom-line" aria-hidden="true">♡</div>
        </div>
      </section>

      <footer className="cha-footer" id="contact">
        <div className="footer-content">
          <div className="footer-brand">
            <p className="footer-logo">Les Voyages de Cha <span>♥</span></p>
            <p>
              Créatrice de voyages sur-mesure pour des expériences uniques,
              authentiques et inoubliables.
            </p>
            <div className="footer-socials" aria-label="Réseaux sociaux">
              <a href="#contact" aria-label="Instagram">◎</a>
              <a href="#contact" aria-label="Pinterest">𝑷</a>
              <a href="mailto:contact@lesvoyagesdecha.fr" aria-label="Email">✉</a>
            </div>
          </div>

          <div className="footer-column">
            <h2>Explorer</h2>
            {footerExplorer.map((item) => (
              <a href="#accueil" key={item}>{item}</a>
            ))}
          </div>

          <div className="footer-column">
            <h2>En savoir plus</h2>
            <a href="/travel-planner">Qu'est-ce qu'un Travel Planner ?</a>
            <a href="/temoignages">Vos témoignages</a>
            <a href="#contact">Réserver un appel découverte</a>
          </div>

          <div className="footer-column">
            <h2>Informations légales</h2>
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/politique-confidentialite">Politique de confidentialité</a>
            <a href="/cgv">CGV</a>
          </div>

          <div className="footer-contact">
            <h2>Restons connectés</h2>
            <p className="footer-script">Par ici les rêves... ♡</p>
            <a href="mailto:contact@lesvoyagesdecha.fr">contact@lesvoyagesdecha.fr</a>
            <div className="footer-blue-leaf" aria-hidden="true">
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>♡</span>
          <p>© 2025 Les Voyages de Cha · Tous droits réservés</p>
          <p>Conception avec passion ♡</p>
        </div>
      </footer>
    </main>
  );
}
