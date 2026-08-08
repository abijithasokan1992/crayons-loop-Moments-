const surfaces = [
  ["OTT", "Public entertainment surface", "Ready"],
  ["Moments", "Private event-film surface", "Ready"],
  ["Admin", "Operations control surface", "Ready"],
];

export default function Admin() {
  return (
    <>
      <header className="shell nav">
        <a className="brand" href="/"><span className="mark">CL</span>CRAYONS LOOP ADMIN</a>
        <div className="status"><span className="dot" />Production shell healthy</div>
      </header>
      <main className="shell">
        <div className="eyebrow">Platform Control</div>
        <h1>One control room. Clear product boundaries.</h1>
        <p>Operational surface for the Crayons Loop public entertainment product and the private Moments product. This shell intentionally exposes no privileged data without an authenticated backend.</p>

        <section className="grid" aria-label="Platform overview">
          <article className="card"><small>Public product</small><strong>Crayons Loop</strong><p>Catalogue, discovery and entertainment experience.</p></article>
          <article className="card"><small>Private product</small><strong>Moments</strong><p>Studio-led event delivery and family viewing.</p></article>
          <article className="card"><small>Security posture</small><strong>Fail closed</strong><p>No privileged operations are simulated in the static production shell.</p></article>
        </section>

        <section className="stack" aria-label="Deployment surfaces">
          {surfaces.map(([name, description, state]) => (
            <div className="row" key={name}><b>{name}</b><span>{description}</span><span className="pill">{state}</span></div>
          ))}
        </section>
      </main>
      <footer><div className="shell">© 2026 Crayons Loop · Admin access requires the secure application layer.</div></footer>
    </>
  );
}
