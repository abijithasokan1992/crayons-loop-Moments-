const features = [
  ["Private by default", "Event films are positioned as private client deliveries, not public catalogue content."],
  ["Studio controlled", "Studios remain in control of the event experience, access window and client presentation."],
  ["Family friendly", "A simple viewing experience designed for phones, laptops and the living-room screen."],
  ["Premium presentation", "A dedicated memory space instead of sending clients a raw file or generic drive link."],
  ["Rights aware", "The platform foundation keeps copyright declaration and access control central to the workflow."],
  ["Built to grow", "The product boundary is ready for secure playback, invitations, analytics and studio operations."],
];

export default function Home() {
  return (
    <>
      <header className="shell nav">
        <a className="brand" href="/" aria-label="Crayons Loop Moments home"><span className="mark">M</span>CRAYONS LOOP MOMENTS</a>
        <nav className="navlinks" aria-label="Primary navigation">
          <a href="#studios">For Studios</a>
          <a href="#how">How it works</a>
          <a href="https://www.crayonsloop.com">Crayons Loop</a>
          <a className="cta" href="#studios">Explore Moments</a>
        </nav>
      </header>

      <main>
        <section className="shell hero">
          <div className="eyebrow">Private event-film streaming</div>
          <h1>Memories deserve more than a download link.</h1>
          <p>Crayons Loop Moments gives wedding and event studios a premium destination for delivering finished films to clients and families—privately, beautifully and under studio control.</p>
          <div className="actions">
            <a className="cta" href="#studios">Built for studios</a>
            <a className="cta secondary" href="#how">See how it works</a>
          </div>

          <div className="preview" aria-label="Moments experience preview">
            <div className="previewtop"><span>PRIVATE EVENT</span><span>CRAYONS LOOP MOMENTS</span></div>
            <div className="memory">
              <small>A beautifully delivered story</small>
              <h2>Your day. Your people. Your screen.</h2>
              <p>A calm, cinematic home for full films, highlights and meaningful moments—separate from public entertainment.</p>
            </div>
          </div>
        </section>

        <section className="shell section" id="studios">
          <h2>Designed around the studio-client relationship.</h2>
          <p className="lede">Moments keeps the product focused: professional delivery for private memories, with a clear boundary from the public Crayons Loop catalogue.</p>
          <div className="grid">
            {features.map(([title, copy]) => <article className="card" key={title}><b>{title}</b><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="shell section" id="how">
          <h2>A simple delivery journey.</h2>
          <p className="lede">The production architecture is organised for the studio workflow from project creation through secure client viewing.</p>
          <div className="steps">
            <article className="step"><span>01 · CREATE</span><h3>Set up the event</h3><p>Prepare the client project, event identity and presentation.</p></article>
            <article className="step"><span>02 · DELIVER</span><h3>Publish the films</h3><p>Organise full films, highlights and ceremony sections in one branded destination.</p></article>
            <article className="step"><span>03 · SHARE</span><h3>Give private access</h3><p>Invite the intended client and family audience through a controlled viewing experience.</p></article>
          </div>
        </section>

        <section className="shell">
          <div className="banner">
            <div><h2>Crayons Loop is for entertainment. Moments is personal.</h2><p>Two distinct products, one clear brand architecture.</p></div>
            <a className="cta" href="https://www.crayonsloop.com">Visit Crayons Loop</a>
          </div>
        </section>
      </main>

      <footer><div className="shell footerrow"><span>© 2026 Crayons Loop Moments</span><span>Private memories · Studio controlled</span></div></footer>
    </>
  );
}
