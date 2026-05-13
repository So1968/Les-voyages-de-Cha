export default function Home() {
  return (
    <main className="cha-page">
      <header className="cha-header">
        <a href="/bureau" className="cha-logo-wrap" aria-label="Accès privé au Bureau de Cha">
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
          Cha imagine des voyages sur mesure, immersifs et profond&eacute;ment humains.
          L&rsquo;id&eacute;e n&rsquo;est pas de cocher une destination, mais de construire une exp&eacute;rience :
          un rythme, des rencontres, des adresses et des souvenirs qui restent.
        </p>
      </section>

      <section className="cha-manifeste">
        <div className="cha-manifeste-title">
          <p className="cha-mini-title">Manifeste</p>
          <h2>Le voyage comme empreinte.</h2>
        </div>

        <div className="cha-manifeste-text">
          <p>
            Cha croit que le voyage est bien plus qu&rsquo;un d&eacute;placement.
            C&rsquo;est une mani&egrave;re de d&eacute;couvrir, de ressentir et de cr&eacute;er des moments uniques.
          </p>

          <p>
            Chaque voyage laisse une empreinte sur qui nous sommes et transforme
            notre regard sur le monde. Le premier voyage donne cette sensation que
            tout devient possible, que le monde s&rsquo;ouvre &agrave; nous. Chaque voyage qui suit
            devient une nouvelle exploration, une nouvelle histoire &agrave; &eacute;crire.
          </p>

          <p className="cha-manifeste-values">
            Authenticité. Partage. Bienveillance.
          </p>

          <p>
            &Agrave; travers ses voyages, Cha a rapport&eacute; des souvenirs, des histoires,
            des rencontres et des r&ecirc;ves. Aujourd&rsquo;hui, elle partage cette exp&eacute;rience
            avec passion pour aider chacun &agrave; vivre un voyage pens&eacute; avec justesse,
            selon ses envies et sa fa&ccedil;on de voyager.
          </p>
        </div>
      </section>

      <section id="offres" className="cha-offres-section">
        <div className="cha-offres-intro">
          <p className="cha-mini-title">Les offres</p>
          <h2>Deux formules claires, des options &agrave; composer.</h2>
          <p>
            Les offres de Cha sont simples : une formule pour les escapades courtes,
            une formule pour les s&eacute;jours plus complets, puis des options pour enrichir
            le voyage selon le projet.
          </p>
        </div>

        <div className="cha-offres-real">
          <article className="cha-offre-real-card">
            <p className="cha-offre-label">Formule week-end</p>
            <div className="cha-offre-head">
              <h3>&Eacute;vasion express</h3>
              <p className="cha-price">40&nbsp;&euro;</p>
            </div>
            <span className="cha-script-line">pour partir quelques jours</span>

            <p className="cha-offre-text">
              Pour une escapade de 2 &agrave; 5 jours avec une base claire :
              transports, h&eacute;bergement, itin&eacute;raire et PDF r&eacute;capitulatif.
            </p>

            <ul>
              <li>2 &agrave; 5 jours</li>
              <li>transports</li>
              <li>h&eacute;bergement</li>
              <li>itin&eacute;raire</li>
              <li>PDF r&eacute;capitulatif</li>
            </ul>
          </article>

          <article className="cha-offre-real-card featured">
            <p className="cha-offre-label">Formule s&eacute;jour</p>
            <div className="cha-offre-head">
              <h3>&Eacute;vasion +</h3>
              <p className="cha-price">50&nbsp;&euro;</p>
            </div>
            <span className="cha-script-line">pour un voyage plus construit</span>

            <p className="cha-offre-text">
              Pour un s&eacute;jour de 5 jours et plus, avec une organisation plus compl&egrave;te :
              itin&eacute;raire, activit&eacute;s, carnet PDF, carte interactive et conseils personnalis&eacute;s.
            </p>

            <ul>
              <li>5 jours et plus</li>
              <li>transports et h&eacute;bergement</li>
              <li>itin&eacute;raire et activit&eacute;s</li>
              <li>carnet PDF</li>
              <li>carte interactive / Google Maps</li>
              <li>conseils personnalis&eacute;s</li>
            </ul>
          </article>

          <article className="cha-offre-real-card options">
            <p className="cha-offre-label">Options</p>
            <div className="cha-offre-head">
              <h3>&Agrave; composer</h3>
              <p className="cha-price">d&egrave;s 5&nbsp;&euro;</p>
            </div>
            <span className="cha-script-line">pour ajouter du vivant</span>

            <p className="cha-offre-text">
              Des options peuvent &ecirc;tre ajout&eacute;es selon le voyage :
              plong&eacute;e, &eacute;tapes suppl&eacute;mentaires, bonnes adresses ou exp&eacute;riences locales.
            </p>

            <ul>
              <li>option plong&eacute;e : 5&nbsp;&euro; par jour plong&eacute; et par personne</li>
              <li>10&nbsp;&euro; au-del&agrave; de 3 &eacute;tapes</li>
              <li>restaurants et bonnes adresses</li>
              <li>activit&eacute;s et exp&eacute;riences locales</li>
            </ul>
          </article>
        </div>

        <div className="cha-offres-note">
          <p>
            <strong>Cha con&ccedil;oit votre projet de voyage et vous transmet tout pour r&eacute;server sereinement.</strong>
            Vous recevez un itin&eacute;raire personnalis&eacute;, des liens, contacts, adresses,
            activit&eacute;s et recommandations cibl&eacute;es. Les r&eacute;servations se font ensuite
            directement par vous, aupr&egrave;s des h&eacute;bergements, transports, restaurants,
            activit&eacute;s ou prestataires concern&eacute;s.
          </p>
        </div>
      </section>

      <section id="contact" className="cha-band">
        Voyagez autrement, vivez intens&eacute;ment
      </section>
    </main>
  );
}