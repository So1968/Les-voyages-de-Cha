export default function BureauPage() {
  return (
    <main className="bureau-page">
      <section className="bureau-card">
        <div className="bureau-shell">
          <img src="/conque-or.svg" alt="" aria-hidden="true" />
        </div>

        <p className="bureau-kicker">Accès sécurisé</p>
        <h1>Bienvenue dans le Bureau de Cha</h1>

        <p className="bureau-text">
          Cet espace est réservé au back-office métier :
          suivi client, dossiers voyage, base destinations,
          marketing, organisation et pilotage.
        </p>

        <div className="bureau-actions">
          <a href="#" className="cha-rdv">Entrer dans le Bureau</a>
          <a href="/" className="bureau-link">Retour au site</a>
        </div>
      </section>
    </main>
  );
}