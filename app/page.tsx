export default function Home() {
  return (
    <main className="cha-page">
      <header className="cha-header">
        <a href="/bureau" className="cha-logo-wrap" aria-label="AccÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨s privÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© au Bureau de Cha">
          <img src="/logo-cha.svg" alt="Les Voyages de Cha" className="cha-logo" />
        </a>

        <nav className="cha-nav">
          <a href="#accueil">Accueil</a>
          <a href="#approche">Approche</a>
          <a href="#offres">Offres</a>
        </nav>

        <div className="cha-header-actions">
          <a href="#contact" className="cha-rdv">Appel d&eacute;couverte</a>
        </div>
      </header>

      <section id="accueil" className="cha-title">
        <h1>Les Voyages de Cha</h1>
      </section>

      <section className="cha-templates">
        <article className="cha-card cha-card-photo-left">
          <div className="cha-card-main">
            <h2>
              Tu n&rsquo;as pas besoin d&rsquo;aller loin
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
              <span>vivez intens&eacute;ment.</span>
            </h2>
            <div className="cha-line" />
          </div>

          <div className="cha-expertise">
            <div>
              <span>1</span>
              <p>
                <strong>Des exp&eacute;riences locales</strong>
                Rencontrer, &eacute;changer, comprendre.
              </p>
            </div>

            <div>
              <span>2</span>
              <p>
                <strong>Des voyages sur-mesure</strong>
                Pens&eacute;s pour vous, dans les moindres d&eacute;tails.
              </p>
            </div>

            <div>
              <span>3</span>
              <p>
                <strong>Une approche humaine</strong>
                &Agrave; votre &eacute;coute, avant, pendant et apr&egrave;s le voyage.
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
              Un voyage con&ccedil;u
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
          <p className="cha-mini-title">L&rsquo;approche de Cha</p>
          <h2>Doux, clair, humain. Jamais catalogue.</h2>
        </div>

        <p>
          Cha imagine des voyages sur mesure, immersifs et &eacute;motionnels.
          Apr&egrave;s 16 ans comme charg&eacute;e de patrimoine, elle garde une vraie culture
          du conseil, de l&rsquo;&eacute;coute, de la relation client et du suivi.
        </p>
      </section>

      <section id="offres" className="cha-offres-section">
        <div className="cha-offres-intro">
          <p className="cha-mini-title">Les offres</p>
          <h2>Trois fa&ccedil;ons de confier votre projet de voyage &agrave; Cha.</h2>
          <p>
            Chaque formule correspond &agrave; un niveau d&rsquo;accompagnement clair :
            de l&rsquo;escapade cibl&eacute;e au voyage plus complet, Cha transforme vos envies
            en itin&eacute;raire construit, lisible et pr&ecirc;t &agrave; vivre.
          </p>
        </div>

        <div className="cha-offres-grid">
          <article className="cha-offre-card">
            <p className="cha-offre-label">Formule 01</p>
            <h3>&Eacute;vasion express</h3>
            <span className="cha-script-line">pour quelques jours ailleurs</span>
            <p className="cha-offre-promise">Pour partir quelques jours avec une direction claire.</p>
            <p className="cha-offre-emotion">
              Cha cible l&rsquo;essentiel : un itin&eacute;raire coh&eacute;rent, des adresses choisies
              et une vision simple de votre escapade, sans vous perdre dans des recherches interminables.
            </p>
            <div className="cha-offre-details">
              <span>2 &agrave; 5 jours</span>
              <span>itin&eacute;raire personnalis&eacute;</span>
              <span>PDF clair, pratique et directement utilisable</span>
            </div>
          </article>

          <article className="cha-offre-card featured">
            <p className="cha-offre-label">Formule signature</p>
            <h3>&Eacute;vasion +</h3>
            <span className="cha-script-line">pour un voyage vraiment construit</span>
            <p className="cha-offre-promise">Pour construire un vrai voyage sur mesure.</p>
            <p className="cha-offre-emotion">
              Cha structure votre voyage dans le d&eacute;tail : rythme, &eacute;tapes, exp&eacute;riences,
              bonnes adresses et rep&egrave;res utiles pour partir avec un projet solide et inspirant.
            </p>
            <div className="cha-offre-details">
              <span>5 jours et plus</span>
              <span>carnet de voyage personnalis&eacute;</span>
              <span>carte interactive selon la formule choisie</span>
            </div>
          </article>

          <article className="cha-offre-card">
            <p className="cha-offre-label">Options &agrave; composer</p>
            <h3>Exp&eacute;riences immersives</h3>
            <span className="cha-script-line">pour vivre plus que visiter</span>
            <p className="cha-offre-promise">Pour ajouter du vivant, du local et du souvenir.</p>
            <p className="cha-offre-emotion">
              Cha enrichit votre voyage avec des exp&eacute;riences qui donnent du relief :
              activit&eacute;s, rencontres, lieux sensibles, aventures douces et adresses qui restent.
            </p>
            <div className="cha-offre-details">
              <span>plong&eacute;e, danse, aventure douce</span>
              <span>exp&eacute;riences locales et culturelles</span>
              <span>adresses cibl&eacute;es selon votre fa&ccedil;on de voyager</span>
            </div>
          </article>
        </div>

        <div className="cha-offres-note">
          <p>
            <strong>Cha con&ccedil;oit votre voyage, vous restez libre de le r&eacute;server.</strong>
            Son r&ocirc;le est de construire un itin&eacute;raire clair, personnalis&eacute; et pr&ecirc;t &agrave; utiliser :
            liens, contacts, adresses, activit&eacute;s et recommandations cibl&eacute;es. Les r&eacute;servations,
            paiements, confirmations, modifications ou annulations sont ensuite effectu&eacute;s directement
            par le client, aupr&egrave;s des prestataires concern&eacute;s.
          </p>
        </div>
      </section>

      <section className="cha-note">
        <p className="cha-mini-title">Important &agrave; savoir</p>
        <h2>Cha ne r&eacute;serve pas &agrave; votre place.</h2>
        <p>
          Cha vous remet une s&eacute;lection claire, personnalis&eacute;e et pr&ecirc;te &agrave; utiliser :
          liens, contacts, adresses et recommandations. Les r&eacute;servations,
          paiements, confirmations, modifications ou annulations sont ensuite
          effectu&eacute;s directement par le client, en toute libert&eacute;.
        </p>
      </section>

      <section id="contact" className="cha-band">
        Voyagez autrement, vivez intens&eacute;ment
      </section>
    </main>
  );
}