import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="small-title">Welcome to</p>

            <h1>GC Church India</h1>

            <p>
              Guiding lives to Jesus Christ through prayer, Gospel outreach,
              crusades, and apostolic ministry.
            </p>

            <p className="hero-verse">
              “How beautiful are the feet of those who bring good news.”
              <br />
              <span>Romans 10:15</span>
            </p>

            <div className="hero-buttons">
              <Link to="/about" className="primary-btn">
                About the Ministry
              </Link>

              <Link to="/sow" className="secondary-btn">
                Sow Into the Ministry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Intro */}
      <section className="section ministry-intro">
        <div className="section-heading">
          <p className="small-title-dark">Guide of Christ Mission Church</p>
          <h2>GC Church India</h2>
        </div>

        <p>
          GC Church India is an apostolic Christian ministry committed to
          sharing the Gospel of Jesus Christ, strengthening believers, and
          reaching villages, cities, tribal communities, and unreached people
          through prayer, crusades, Bible teaching, and compassionate outreach.
        </p>

        <p>
          Since the establishment of Guide of Christ Mission Church on August
          10, 1997, the ministry has continued to move forward by faith, prayer,
          and the guidance of the Holy Spirit.
        </p>

        <div className="intro-buttons">
          <Link to="/about" className="outline-btn">
            Read Our Journey
          </Link>
        </div>
      </section>

      {/* Ministry Highlights */}
      <section className="section light-section">
        <div className="section-heading center">
          <p className="small-title-dark">Our Ministry</p>
          <h2>Serving Through Faith and Love</h2>
          <p>
            Our mission is to encourage countless individuals to follow Jesus
            Christ and experience the transforming power of the Gospel.
          </p>
        </div>

        <div className="card-grid">
          <div className="info-card">Prayer Ministry</div>
          <div className="info-card">Gospel Crusades</div>
          <div className="info-card">Village Ministry</div>
          <div className="info-card">Revival Services</div>
          <div className="info-card">Bible Teaching</div>
          <div className="info-card">Tract Distribution</div>
          <div className="info-card">Widow Support</div>
          <div className="info-card">Orphan Care</div>
        </div>
      </section>

      {/* Vision Preview */}
      <section className="section vision-section">
        <div className="vision-content">
          <p className="small-title-dark">Our Vision</p>

          <h2>Reaching Lives With the Gospel</h2>

          <p>
            The vision of GC Church India is to bring the light of the Gospel
            to villages, districts, tribal communities, and unreached people
            with prayer, love, teaching, and the power of the Holy Spirit.
          </p>

          <div className="vision-list">
            <div>Ministry across Maharashtra</div>
            <div>Church planting</div>
            <div>Missionary support</div>
            <div>Prayer partner network</div>
            <div>Media ministry</div>
            <div>Sunday school ministry</div>
          </div>

          <Link to="/about" className="primary-btn">
            View Full Vision
          </Link>
        </div>
      </section>

      {/* Crusade / Outreach CTA */}
      <section className="section cta-section">
        <h2>Be a Part of the Mission</h2>

        <p>
          Partner with GC Church India in preaching the Gospel, conducting
          crusades, supporting missionaries, helping the needy, and reaching
          souls for Jesus Christ.
        </p>

        <div className="hero-buttons">
          <Link to="/crusades" className="primary-btn">
            View Crusades
          </Link>

          <Link to="/sow" className="secondary-btn">
            Sow Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;