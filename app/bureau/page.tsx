export default function BureauPage() {
  return (
    <main className="bureau-page">
      <section className="bureau-gate">
        <a href="/" className="bureau-back">Retour au site</a>

        <div className="bureau-shell">
          <img src="/conque-cha.svg" alt="" className="bureau-conque" />

          <p className="bureau-kicker">Acc&egrave;s s&eacute;curis&eacute;</p>

          <h1>
            Entr&eacute;e dans
            <span>le Bureau de Cha</span>
          </h1>

          <p className="bureau-intro">
            Cet espace sera le futur centre de pilotage de l'activit&eacute; :
            clients, dossiers voyage, destinations, mails, marketing, temps pass&eacute;
            et organisation quotidienne.
          </p>

          <div className="bureau-card">
            <p className="bureau-card-title">Bureau en pr&eacute;paration</p>
            <p>
              La porte est pos&eacute;e. La vraie connexion s&eacute;curis&eacute;e viendra plus tard,
              avec un acc&egrave;s r&eacute;serv&eacute; &agrave; Cha.
            </p>
          </div>

          <div className="bureau-actions">
            <a href="/" className="bureau-button light">Retour &agrave; la vitrine</a>
            <span className="bureau-button muted">Entr&eacute;e s&eacute;curis&eacute;e bient&ocirc;t disponible</span>
          </div>
        </div>
      </section>
    </main>
  );
}