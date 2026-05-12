export default function Home() {
  return (
    <main className="cha-page">
      <header className="cha-header">
        <div className="cha-logo-area">
          <a href="/" className="cha-logo-wrap" aria-label="Retour à l'accueil">
            <img src="/logo-cha.svg" alt="Les Voyages de Cha" className="cha-logo" />
          </a>
          <a href="/bureau" className="cha-bureau-entry">Entrée Bureau de Cha</a>
        </div>

        <nav className="cha-nav">
          <a href="#accueil">Accueil</a>
          <a href="#approche">Approche</a>
          <a href="#offres">Offres</a>
        </nav>

        <div className="cha-header-actions">
          <a href="#contact" className="cha-rdv">Appel dÃ©couverte</a>
        </div>
      </header>

      <section id="accueil" className="cha-title">
        <h1>Les Voyages de Cha</h1>
      </section>

      <section className="cha-templates">
        <article className="cha-card cha-card-photo-left">
          <div className="cha-card-main">
            <h2>
              Tu nâ€™as pas besoin dâ€™aller loin
              <span>pour te sentir ailleurs.</span>
            </h2>
            <div className="cha-line" />
          </div>

          <div className="cha-card-bottom">
            <img src="/logo-cha.svg" alt="Les Voyages de Cha" />
            <p>Des voyages qui se <strong>vivent.</strong></p>
          </div>
        </article>

        <article className="cha-card cha-card-clean">
          <div className="cha-card-main">
            <h2>
              Voyagez autrement,
              <span>vivez intensÃ©ment.</span>
            </h2>
            <div className="cha-line" />
          </div>

          <div className="cha-expertise">
            <div>
              <span>1</span>
              <p>
                <strong>Des expÃ©riences locales</strong>
                Rencontrer, Ã©changer, comprendre.
              </p>
            </div>

            <div>
              <span>2</span>
              <p>
                <strong>Des voyages sur-mesure</strong>
                PensÃ©s pour vous, dans les moindres dÃ©tails.
              </p>
            </div>

            <div>
              <span>3</span>
              <p>
                <strong>Une approche humaine</strong>
                Ã€ votre Ã©coute, avant, pendant et aprÃ¨s le voyage.
              </p>
            </div>
          </div>

          <div className="cha-card-bottom center">
            <img src="/logo-cha.svg" alt="Les Voyages de Cha" />
          </div>
        </article>

        <article className="cha-card cha-card-photo-right">
          <div className="cha-inner">
            <h2>
              Et si ton prochain voyage
              <span>te ressemblait vraiment&nbsp;?</span>
            </h2>

            <div className="cha-line" />

            <p className="cha-projection">
              Un voyage conÃ§u
              <br />
              <strong>pour toi.</strong>
            </p>

            <p className="cha-hand">On en parle&nbsp;?</p>

            <img src="/logo-cha.svg" alt="Les Voyages de Cha" />
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
          AprÃ¨s 16 ans comme chargÃ©e de patrimoine, elle garde une vraie
          culture du conseil, de lâ€™Ã©coute, de la relation client et du suivi.
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
          avec les liens, contacts et recommandations utiles.
          Vous gardez la main sur vos rÃ©servations.
        </p>
      </section>

      <section id="contact" className="cha-band">
        Voyagez autrement, vivez intensÃ©ment
      </section>
    </main>
  );
}