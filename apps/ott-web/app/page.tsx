const categories = [
  { tag: "Cinema", title: "Films", copy: "Curated feature films across regional and independent cinema." },
  { tag: "Series", title: "Stories in chapters", copy: "Long-form worlds built for discovery and repeat viewing." },
  { tag: "Family", title: "Watch together", copy: "A dedicated space for family, kids and all-age entertainment." },
  { tag: "Discover", title: "Fresh voices", copy: "Documentaries, originals and distinctive new storytellers." }
];

export default function OTT() {
  return (
    <>
      <header className="shell nav">
        <a className="brand" href="/" aria-label="Crayons Loop home"><span className="mark">CL</span>CRAYONS LOOP</a>
        <nav className="navlinks" aria-label="Primary navigation">
          <a href="#discover">Discover</a>
          <a href="#experience">Experience</a>
          <a href="https://moments.crayonsloop.com">Moments</a>
          <a className="cta" href="#discover">Explore</a>
        </nav>
      </header>

      <main>
        <section className="shell hero">
          <div>
            <div className="eyebrow">Premium entertainment · every screen</div>
            <h1>Stories worth your time.</h1>
            <p>Crayons Loop is a focused entertainment destination for films, series, documentaries, family viewing and curated regional stories—built around discovery instead of clutter.</p>
            <div className="actions">
              <a className="cta" href="#discover">Discover Crayons Loop</a>
              <a className="cta secondary" href="https://moments.crayonsloop.com">Open Moments</a>
            </div>
            <div className="trust" aria-label="Platform principles">
              <div className="metric"><strong>Curated</strong><span>Discovery before overload</span></div>
              <div className="metric"><strong>Regional</strong><span>Stories with local identity</span></div>
              <div className="metric"><strong>Flexible</strong><span>Built for modern viewing models</span></div>
              <div className="metric"><strong>Secure</strong><span>Rights-aware platform foundation</span></div>
            </div>
          </div>
        </section>

        <section className="shell section" id="discover">
          <div className="sectionhead">
            <h2>Find your next story.</h2>
            <p>A clean catalogue structure designed for cinema, episodic stories, families and new voices.</p>
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
            <h2>One brand. Two viewing worlds.</h2>
            <p>Crayons Loop serves public entertainment while Crayons Loop Moments is the private event-film experience for studios, clients and families.</p>
          </div>
          <div className="banner">
            <div>
              <h2>Private memories belong in Moments.</h2>
              <p>Wedding films, celebrations and client deliveries stay separated from the public entertainment catalogue.</p>
            </div>
            <a className="cta" href="https://moments.crayonsloop.com">Explore Moments</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footerrow"><span>© 2026 Crayons Loop</span><span>Entertainment · Moments · Platform</span></div>
      </footer>
    </>
  );
}
