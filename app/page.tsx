export default function Home() {
  return (
    <main className="cha-page">
      <header className="cha-header">
        <div className="cha-logo-wrap">
          <img src="/logo-cha.svg" alt="Les Voyages de Cha" className="cha-logo" />
        </div>

        <nav className="cha-nav">
          <a href="#accueil">Accueil</a>
          <a href="#approche">Approche</a>
          <a href="#offres">Offres</a>
          <a href="/bureau">Bureau</a>
        </nav>

        <div className="cha-header-actions">
          <a href="#contact" className="cha-rdv">Appel dÃƒÂ©couverte</a>
        </div>
      </header>

      <section id="accueil" className="cha-title">
        <h1>Les Voyages de Cha</h1>
      </section>

      <section className="cha-templates">
        <article className="cha-card cha-card-photo-left">
          <div className="cha-card-main">
            <h2>
              Tu nÃ¢â‚¬â„¢as pas besoin dÃ¢â‚¬â„¢aller loin
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
              <span>vivez intensÃƒÂ©ment.</span>
            </h2>
            <div className="cha-line" />
          </div>

          <div className="cha-expertise">
            <div>
              <span>1</span>
              <p>
                <strong>Des expÃƒÂ©riences locales</strong>
                Rencontrer, ÃƒÂ©changer, comprendre.
              </p>
            </div>

            <div>
              <span>2</span>
              <p>
                <strong>Des voyages sur-mesure</strong>
                PensÃƒÂ©s pour vous, dans les moindres dÃƒÂ©tails.
              </p>
            </div>

            <div>
              <span>3</span>
              <p>
                <strong>Une approche humaine</strong>
                Ãƒâ‚¬ votre ÃƒÂ©coute, avant, pendant et aprÃƒÂ¨s le voyage.
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
              Un voyage conÃƒÂ§u
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
          <p className="cha-mini-title">LÃ¢â‚¬â„¢approche de Cha</p>
          <h2>Doux, clair, humain. Jamais catalogue.</h2>
        </div>

        <p>
          Cha imagine des voyages sur mesure, immersifs et ÃƒÂ©motionnels.
          AprÃƒÂ¨s 16 ans comme chargÃƒÂ©e de patrimoine, elle garde une vraie
          culture du conseil, de lÃ¢â‚¬â„¢ÃƒÂ©coute, de la relation client et du suivi.
        </p>
      </section>

      <section id="offres" className="cha-section cha-offres">
        <article>
          <h3>Ãƒâ€°vasion express</h3>
          <p>2 ÃƒÂ  5 jours Ã‚Â· itinÃƒÂ©raire clair Ã‚Â· PDF rÃƒÂ©capitulatif.</p>
        </article>

        <article>
          <h3>Ãƒâ€°vasion +</h3>
          <p>5 jours et plus Ã‚Â· carnet PDF Ã‚Â· carte interactive selon formule.</p>
        </article>

        <article>
          <h3>Options immersives</h3>
          <p>PlongÃƒÂ©e, danse, expÃƒÂ©riences locales, bonnes adresses.</p>
        </article>
      </section>

      <section className="cha-note">
        <p className="cha-mini-title">Important ÃƒÂ  savoir</p>
        <h2>Cha ne rÃƒÂ©serve pas ÃƒÂ  votre place.</h2>
        <p>
          Elle vous remet une sÃƒÂ©lection claire, personnalisÃƒÂ©e et prÃƒÂªte ÃƒÂ  rÃƒÂ©server,
          avec les liens, contacts et recommandations utiles.
          Vous gardez la main sur vos rÃƒÂ©servations.
        </p>
      </section>

      <section id="contact" className="cha-band">
        Voyagez autrement, vivez intensÃƒÂ©ment
      </section>
    </main>
  );
}