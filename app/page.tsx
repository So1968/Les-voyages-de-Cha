export default function Home() {
  const logoPath = "/logo-cha.svg";

  return (
    <main className="cha-page">
      <header className="cha-header">
        <div className="cha-logo-wrap">
          <img src={logoPath} alt="Les Voyages de Cha" className="cha-logo" />
        </div>

        <nav className="cha-nav">
          <a href="#templates">Accueil</a>
          <a href="#approche">Approche</a>
          <a href="#offres">Offres</a>
          <a href="#bureau">Bureau de Cha</a>
        </nav>

        <a href="#contact" className="cha-rdv">Appel dÃ©couverte</a>
      </header>

      <section className="cha-title">
        <p>3 faÃ§ons dâ€™imaginer ton voyage</p>
        <h1>Les Voyages de Cha</h1>
      </section>

      <section id="templates" className="cha-templates">
        <article className="cha-card cha-card-photo-left">
          <p className="cha-label">Inspiration 1</p>
          <p className="cha-sub">Se sentir ailleurs</p>

          <div className="cha-card-main">
            <h2>
              Tu nâ€™as pas besoin dâ€™aller loin
              <span>pour te sentir ailleurs.</span>
            </h2>
            <div className="cha-line" />
          </div>

          <div className="cha-card-bottom">
            <img src={logoPath} alt="Les Voyages de Cha" />
            <p>Des voyages qui se <strong>vivent.</strong></p>
          </div>
        </article>

        <article className="cha-card cha-card-clean">
          <p className="cha-label">Inspiration 2</p>
          <p className="cha-sub">Voyager autrement</p>

          <div className="cha-card-main">
            <h2>
              Voyagez autrement,
              <span>vivez intensÃ©ment.</span>
            </h2>
            <div className="cha-line" />
          </div>

          <div className="cha-expertise">
            <div>
              <span>â™¡</span>
              <p><strong>Des expÃ©riences locales</strong>Rencontrer, Ã©changer, comprendre.</p>
            </div>

            <div>
              <span>â–¢</span>
              <p><strong>Des voyages sur-mesure</strong>PensÃ©s pour vous, dans les moindres dÃ©tails.</p>
            </div>

            <div>
              <span>â™§</span>
              <p><strong>Une approche humaine</strong>Ã€ votre Ã©coute, avant, pendant et aprÃ¨s le voyage.</p>
            </div>
          </div>

          <div className="cha-card-bottom center">
            <img src={logoPath} alt="Les Voyages de Cha" />
          </div>
        </article>

        <article className="cha-card cha-card-photo-right">
          <p className="cha-label">Inspiration 3</p>
          <p className="cha-sub">Un voyage qui te ressemble</p>

          <div className="cha-inner">
            <h2>
              Et si ton prochain voyage
              <span>te ressemblait vraiment ?</span>
            </h2>
            <div className="cha-line" />

            <p className="cha-projection">
              Un voyage conÃ§u<br />
              <strong>pour toi.</strong>
            </p>

            <p className="cha-hand">On en parle ? â™¡</p>

            <img src={logoPath} alt="Les Voyages de Cha" />
          </div>
        </article>
      </section>

      <section id="approche" className="cha-section cha-approche">
        <div>
          <p className="cha-mini-title">Lâ€™approche de Cha</p>
          <h2>Doux, clair, humain. Jamais catalogue.</h2>
        </div>
        <p>
          Cha imagine des voyages sur mesure, immersifs et Ã©motionnels.
          AprÃ¨s 16 ans comme chargÃ©e de patrimoine, elle garde une vraie culture
          du conseil, de lâ€™Ã©coute, de la relation client et du suivi.
        </p>
      </section>

      <section id="offres" className="cha-section cha-offres">
        <article>
          <h3>Ã‰vasion express</h3>
          <p>2 Ã  5 jours Â· itinÃ©raire clair Â· PDF rÃ©capitulatif.</p>
        </article>
        <article>
          <h3>Ã‰vasion +</h3>
          <p>5 jours et plus Â· carnet PDF Â· carte interactive selon formule.</p>
        </article>
        <article>
          <h3>Options immersives</h3>
          <p>PlongÃ©e, danse, expÃ©riences locales, bonnes adresses.</p>
        </article>
      </section>

      <section className="cha-note">
        <p className="cha-mini-title">Important Ã  savoir</p>
        <h2>Cha ne rÃ©serve pas Ã  votre place.</h2>
        <p>
          Elle vous remet une sÃ©lection claire, personnalisÃ©e et prÃªte Ã  rÃ©server,
          avec les liens, contacts et recommandations utiles. Vous gardez la main
          sur vos rÃ©servations.
        </p>
      </section>

      <section id="bureau" className="cha-section cha-bureau">
        <div>
          <p className="cha-mini-title">Le Bureau de Cha</p>
          <h2>Un espace pour tout retrouver sans se disperser.</h2>
        </div>
        <div className="cha-tags">
          <span>CRM clients</span>
          <span>Dossiers voyage</span>
          <span>Base destinations</span>
          <span>Marketing</span>
          <span>Traceur de temps</span>
          <span>Focus & Ã©nergie</span>
        </div>
      </section>

      <section id="contact" className="cha-band">
        Voyagez autrement, vivez intensÃ©ment â™¡
      </section>
    </main>
  );
}
