const calendlyUrl = "#";

const destinations = [
  {
    name: "Japon",
    vibe: "Temples, quartiers vivants, adresses sensibles et rythme sur mesure.",
  },
  {
    name: "Cuba",
    vibe: "Couleurs, musique, rencontres et émotion à chaque étape.",
  },
  {
    name: "Cap-Vert",
    vibe: "Îles, plongée, lumière, nature brute et énergie salée.",
  },
  {
    name: "Andalousie",
    vibe: "Danse, chaleur, patrimoine, villages et intensité de vie.",
  },
];

const experiences = [
  "Immersion culturelle",
  "Rencontres locales",
  "Carnet de voyage sur mesure",
  "Carte interactive selon la formule",
  "Adresses authentiques",
  "Voyages émotionnels et mémorables",
];

const offers = [
  {
    title: "Évasion Express",
    subtitle: "Pour une escapade de 2 à 5 jours",
    price: "À partir de 40 €",
    description:
      "Une proposition claire et inspirante pour partir léger, avec un itinéraire structuré et des recommandations adaptées.",
  },
  {
    title: "Évasion Signature",
    subtitle: "Pour les voyages de plus de 5 jours",
    price: "À partir de 80 €",
    description:
      "Un accompagnement plus approfondi avec carnet de voyage, bonnes adresses, conseils, étapes et vision d’ensemble.",
  },
  {
    title: "Options immersives",
    subtitle: "Pour aller encore plus loin",
    price: "Sur devis",
    description:
      "Plongée, expériences locales, étapes supplémentaires, carte enrichie, sélection plus fine selon ton projet.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-shell">
          <header className="topbar">
            <div>
              <p className="brand-kicker">Les Voyages de Cha</p>
              <p className="brand-sub">Travel planner sur mesure</p>
            </div>

            <a href="#bureau" className="ghost-btn">
              Bureau de Cha
            </a>
          </header>

          <div className="hero-grid">
            <div className="hero-content">
              <span className="pill">Voyagez autrement, vivez intensément</span>

              <h1>
                Des voyages pensés
                <br />
                pour être vécus,
                <br />
                pas simplement cochés.
              </h1>

              <p className="hero-text">
                Cha imagine des voyages sur mesure, immersifs et profondément
                humains : rencontres locales, émotions, expériences vraies,
                esthétique, aventure douce et souvenirs qui restent.
              </p>

              <div className="hero-actions">
                <a href={calendlyUrl} className="primary-btn">
                  Planifier un appel découverte
                </a>
                <a href="#offres" className="secondary-btn">
                  Découvrir les offres
                </a>
              </div>

              <div className="important-note">
                <strong>Important :</strong> Cha ne réserve pas à votre place.
                Elle prépare, structure et transmet les recommandations, liens
                et contacts utiles. Le client garde la main sur ses réservations.
              </div>
            </div>

            <div className="hero-card">
              <div className="mini-card mini-card-light">
                <p className="mini-label">Esprit de la marque</p>
                <h3>Immersion, émotion, humain, liberté.</h3>
                <p>
                  Pas de voyage catalogue. Des itinéraires adaptés à votre
                  rythme, votre personnalité et vos envies.
                </p>
              </div>

              <div className="mini-card mini-card-dark">
                <p className="mini-label">Univers aimé</p>
                <ul>
                  <li>• Cuba</li>
                  <li>• Japon</li>
                  <li>• Croatie</li>
                  <li>• Cap-Vert</li>
                  <li>• Mexique</li>
                  <li>• Chypre</li>
                  <li>• Andalousie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container two-cols">
          <div>
            <p className="section-kicker">À propos</p>
            <h2>Une travel planner humaine, sensible et structurée.</h2>
          </div>

          <div className="card">
            <p>
              Après 16 ans comme chargée de patrimoine, Cha s’est reconvertie
              dans le voyage avec une approche profondément humaine, immersive
              et émotionnelle.
            </p>
            <p>
              Son expérience en relation client, conseil et gestion de
              portefeuille lui permet de construire des voyages à la fois
              inspirants, rassurants et très personnalisés.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-kicker">Expériences</p>
          <h2>Ce que Les Voyages de Cha cherche à faire vivre</h2>

          <div className="chips">
            {experiences.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-kicker">Destinations & univers</p>
          <h2>Des voyages qui sentent le vrai, le beau et le vivant.</h2>

          <div className="grid-4">
            {destinations.map((destination) => (
              <article key={destination.name} className="destination-card">
                <div className="destination-image" />
                <div className="destination-content">
                  <h3>{destination.name}</h3>
                  <p>{destination.vibe}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="offres" className="section soft-section">
        <div className="container">
          <p className="section-kicker">Offres</p>
          <h2>Des formules claires, pensées pour différents rythmes de voyage.</h2>

          <div className="grid-3">
            {offers.map((offer) => (
              <article key={offer.title} className="offer-card">
                <p className="offer-subtitle">{offer.subtitle}</p>
                <h3>{offer.title}</h3>
                <p className="offer-price">{offer.price}</p>
                <p className="offer-text">{offer.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bureau" className="section dark-section">
        <div className="container">
          <p className="section-kicker light">Bureau de Cha</p>
          <h2 className="light-title">
            Le cœur du back-office : métier, clients, voyages, marketing,
            pilotage.
          </h2>

          <div className="grid-3">
            <div className="dark-card">
              <h3>CRM & portefeuille client</h3>
              <p>
                Historique client, préférences, relances, suivi de portefeuille,
                rendez-vous, questionnaires et fidélisation.
              </p>
            </div>

            <div className="dark-card">
              <h3>Dossiers voyage</h3>
              <p>
                Itinéraires, destinations, livrables, cartes interactives,
                statuts de dossier, temps passé et suivi des offres.
              </p>
            </div>

            <div className="dark-card">
              <h3>Marketing & organisation</h3>
              <p>
                Réseaux sociaux, visuels, contenus, templates mails, finances,
                hyperfocus, pauses et traceur de temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-box">
          <div>
            <p className="section-kicker">Premier échange</p>
            <h2>On imagine ensemble votre prochain voyage ?</h2>
            <p className="contact-text">
              Un premier échange permet de comprendre vos envies, votre rythme,
              votre budget et le type d’expérience que vous voulez vraiment vivre.
            </p>
          </div>

          <div className="contact-actions">
            <a href={calendlyUrl} className="primary-btn">
              Planifier un appel découverte
            </a>
            <a href="#offres" className="secondary-btn">
              Voir les offres
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
