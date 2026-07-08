import Main from "../components/compound/Main";

const HomeDetail = () => {
  return (
    <>
      <section className="hero-showcase">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="hero-badge">Nature-first travel platform</p>
            <h1>Escape into unforgettable forest retreats.</h1>
            <p>
              Mywoods brings together scenic cabin stays, guided adventures,
              and peaceful woodland escapes in one elegant booking experience.
            </p>
            <div className="hero-actions">
              <a className="hero-btn primary" href="/woods">
                Explore stays
              </a>
              <a className="hero-btn secondary" href="/about">
                Discover more
              </a>
            </div>
            <ul className="hero-highlights">
              <li>Curated eco-friendly stays</li>
              <li>Local hosts and expert guides</li>
              <li>Seamless booking in minutes</li>
            </ul>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900"
              alt="Forest cabin surrounded by pines"
            />
            <div className="hero-preview-card">
              <p>Featured escape</p>
              <h3>Glacier Pine Cabin</h3>
              <span>4.9 • 120+ happy travelers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-description">
        <div className="container">
          <div className="home-title">
            <img
              className="home-logo"
              src="https://images.stockcake.com/public/4/6/2/4629ce82-44b6-4571-86bf-31cbe2bc04ec_large/nature-reclaims-wood-stockcake.jpg"
              alt="Mywoods logo"
            />
            <div>
              <p className="section-label">Why travelers love Mywoods</p>
              <h1>Welcome to Mywoods</h1>
            </div>
          </div>
          <p>
            Mywoods is a curated travel marketplace designed for nature
            enthusiasts and adventure seekers. Discover breathtaking forest
            escapes, immersive camping sites, and guided excursions across
            scenic woodlands. Each listing includes beautiful imagery,
            honest descriptions, and practical details so you can choose the
            perfect outdoor retreat.
          </p>
          <p>
            Our platform connects you with trusted local hosts, sustainable
            experiences, and tailored itineraries that suit beginner or
            seasoned travelers. Whether you want a quiet weekend in the
            woods, a family-friendly nature stay, or a guided hiking trip,
            Mywoods helps you book safe, memorable, and eco-conscious
            adventures in just a few clicks.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeDetail;