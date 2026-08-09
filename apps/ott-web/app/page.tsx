const categories = [
  { tag: "Cinema", title: "Films", copy: "Feature films and independent cinema chosen for discovery, not endless scrolling." },
  { tag: "Series", title: "Series", copy: "Episodic stories and worlds worth returning to." },
  { tag: "Family", title: "Family", copy: "A cleaner place for family, kids and all-age entertainment." },
  { tag: "Discover", title: "New voices", copy: "Documentaries, originals and regional storytellers you may not find everywhere else." }
];

export default function OTT() {
  return (
    <>
      <header className="shell nav">
        <a className="brand" href="/" aria-label="Crayons Loop home">
          <span className="loopmark" aria-hidden="true"><span>C</span></span>
          <span className="brandcopy"><strong>CRAYONS LOOP</strong><small>Watch something worth your time.</small></span>
        </a>
        <nav className="navlinks" aria-label="Primary navigation">
          <a href="#discover">Browse</a>
          <a href="#experience">Why Loop</a>
          <a href="https://moments.crayonsloop.com">Moments</a>
          <a className="cta" href="#discover">Explore</a>
        </nav>
      </header>

      <main>
        <section className="shell hero">
          <div className="hero-copy">
            <div className="eyebrow">CRAYONS LOOP · ENTERTAINMENT</div>
            <h1>Open Loop.<br/>Find your next story.</h1>
            <p>Films, series, documentaries, family viewing and regional stories in one focused consumer experience. Less clutter. Better discovery.</p>
            <div className="actions">
              <a className="cta" href="#discover">Explore Crayons Loop</a>
              <a className="cta secondary" href="https://moments.crayonsloop.com">Private event films → Moments</a>
            </div>
            <div className="trust" aria-label="Crayons Loop experience">
              <div className="metric"><strong>Curated</strong><span>Discovery before overload</span></div>
              <div className="metric"><strong>Regional</strong><span>Local stories belong on the front row</span></div>
              <div className="metric"><strong>Simple</strong><span>Consumer-first, every screen</span></div>
              <div className="metric"><strong>Rights-aware</strong><span>Catalogue foundations built responsibly</span></div>
            </div>
          </div>
          <div className="hero-loop" aria-hidden="true">
            <div className="loop-orbit one"></div>
            <div className="loop-orbit two"></div>
            <div className="loop-core"><span>C</span></div>
          </div>
        </section>

        <section className="shell section" id="discover">
          <div className="sectionhead">
            <h2>Pick a lane. Start discovering.</h2>
            <p>The public B2C catalogue is organised around what viewers actually want to watch, while playback and entitlement remain capability-gated until connected.</p>
          </div>
          <div className="cards">
            {categories.map((item) => (
              <article className="card" key={item.title}>
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section" id="experience">
          <div className="sectionhead">
            <h2>One Loop for viewers.</h2>
            <p>Crayons Loop is the public entertainment brand. Private wedding and event films stay in Crayons Loop Moments so the consumer experience remains clean.</p>
          </div>
          <div className="banner">
            <div>
              <span className="tag">CRAYONS LOOP MOMENTS</span>
              <h2>Your private films stay private.</h2>
              <p>Wedding films, celebrations and client deliveries live in a separate experience for studios, clients and families.</p>
            </div>
            <a className="cta" href="https://moments.crayonsloop.com">Open Moments</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footerrow"><span>© 2026 Crayons Loop</span><span>Public entertainment · A StreamVista ecosystem destination</span></div>
      </footer>
    </>
  );
}
