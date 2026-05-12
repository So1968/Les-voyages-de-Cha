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
        </nav>

        <a href="/bureau" className="cha-conque-entry" aria-label="Entrer dans le Bureau de Cha"><img src="/conque-cha.svg" alt="" /></a>
      </header>

      <section className="cha-title">
        <h1>Les Voyages de Cha</h1>
      </section>

      <section id="templates" className="cha-templates">
        <article className="cha-card cha-card-photo-left">
          <div className="cha-card-main">
            <h2>
              Tu n&rsquo;as pas besoin d&rsquo;aller loin
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
              <p><strong>Des exp&eacute;riences locales</strong>Rencontrer, &eacute;changer, comprendre.</p>
            </div>

            <div>
              <span>2</span>
              <p><strong>Des voyages sur-mesure</strong>Pens&eacute;s pour vous, dans les moindres d&eacute;tails.</p>
            </div>

            <div>
              <span>3</span>
              <p><strong>Une approche humaine</strong>A votre &eacute;coute, avant, pendant et apr&egrave;s le voyage.</p>
            </div>
          </div>

          <div className="cha-card-bottom center">
            <img src={logoPath} alt="Les Voyages de Cha" />
          </div>
        </article>

        <article className="cha-card cha-card-photo-right">
          <div className="cha-inner">
            <h2>
              Et si ton prochain voyage
              <span>te ressemblait vraiment ?</span>
            </h2>
            <div className="cha-line" />

            <p className="cha-projection">
              Un voyage con&ccedil;u<br />
              <strong>pour toi.</strong>
            </p>

            <p className="cha-hand">On en parle ?</p>

            <img src={logoPath} alt="Les Voyages de Cha" />
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

      <section id="offres" className="cha-section cha-offres">
        <article>
          <h3>Evasion express</h3>
          <p>2 &agrave; 5 jours : itin&eacute;raire clair et PDF r&eacute;capitulatif.</p>
        </article>
        <article>
          <h3>Evasion +</h3>
          <p>5 jours et plus : carnet PDF et carte interactive selon formule.</p>
        </article>
        <article>
          <h3>Options immersives</h3>
          <p>Plong&eacute;e, danse, exp&eacute;riences locales, bonnes adresses.</p>
        </article>
      </section>

      <section className="cha-note">
        <p className="cha-mini-title">Important &agrave; savoir</p>
        <h2>Cha ne r&eacute;serve pas &agrave; votre place.</h2>
        <p>
          Elle vous remet une s&eacute;lection claire, personnalis&eacute;e et pr&ecirc;te &agrave; r&eacute;server,
          avec les liens, contacts et recommandations utiles. Vous gardez la main
          sur vos r&eacute;servations.
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
          <span>Focus et energie</span>
        </div>
      </section>

      <section id="contact" className="cha-band">
        Voyagez autrement, vivez intens&eacute;ment
      </section>
    </main>
  );
}