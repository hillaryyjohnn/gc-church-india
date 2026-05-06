function About() {
  const ministryPlans = [
    "Open-air events and Gospel crusades",
    "Tract distribution and Bible sharing",
    "Village ministry",
    "Revival services",
    "Social outreach programs",
    "Support for widows and the less fortunate",
    "Missionary outreach",
    "Assistance for the needy",
    "Orphan care ministry",
    "Church planting among unreached communities",
    "Apostolic training",
    "Literacy programs",
  ];

  const futurePlans = [
    "Establish ministry work across 36 districts in Maharashtra",
    "Form a dedicated team for Gospel outreach",
    "Create a media ministry for audio and video Gospel messages",
    "Establish new orphan care ministries",
    "Print and distribute Gospel tracts widely",
    "Develop apostles, prophets, teachers, shepherds, and evangelists",
    "Work toward constructing 100 new churches",
    "Start Sunday school ministry for children",
    "Build a network of 1,000 prayer partners",
    "Offer Bible teachings in Hindi and Marathi",
    "Create coaching classes for underprivileged children",
    "Mobilize prayer teams for unreached communities",
  ];

  return (
    <section className="page-section about-page">
      {/* Page Heading */}
      <div className="page-heading">
        <p className="small-title-dark">Guide of Christ Mission Church</p>
        <h1>About GC Church India</h1>
        <p>
          GC Church India is an apostolic Christian ministry established with a
          divine vision to share the Gospel of Jesus Christ, strengthen
          believers, and encourage countless individuals to follow Him.
        </p>
      </div>

      {/* Salvation Foundation */}
      <div className="about-hero-box">
        <h2>Our Salvation Foundation</h2>
        <p>
          Salvation is not attained through human effort. It is a profound
          experience made possible only through Jesus Christ and God the Father,
          who raised Him from the dead, as declared in Galatians 1:1.
        </p>

        <p>
          This truth stands as the foundation of our ministry, message, and
          mission.
        </p>
      </div>

      {/* Founder Section */}
      <div className="founder-section">
        <div className="founder-image">
          <img src="/images/apostle-besto-1.jpeg" alt="Apostle D. Besto" />
        </div>

        <div className="founder-content">
          <p className="small-title-dark">Founder & Apostle</p>
          <h2>Apostle D. Besto</h2>
          <h3>Guide of Christ Church</h3>

          <p>
            Apostle D. Besto is the founder and apostle of Guide of Christ Church,
            known as GC Church India. With a divine calling and deep burden for souls,
            he committed his life to preaching the Gospel of Jesus Christ and serving
            people through prayer, crusades, village ministry, and apostolic outreach.
          </p>

          <p>
            Guided by the Holy Spirit, he has travelled across villages, coastal
            areas, tribal communities, and many regions of North India, carrying the
            message of salvation, hope, healing, and transformation through Jesus
            Christ.
          </p>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="two-column about-two-column">
        <div className="content-box">
          <h2>Our Vision</h2>
          <p>
            To encourage countless individuals to follow Jesus Christ and to
            bring the Gospel to villages, cities, tribal communities, and
            unreached people.
          </p>
        </div>

        <div className="content-box">
          <h2>Our Mission</h2>
          <p>
            To preach the Gospel, conduct crusades, distribute Gospel tracts,
            teach the Bible, support the needy, care for widows and orphans,
            train apostles, and establish churches among unreached communities.
          </p>
        </div>
      </div>

      {/* Ministry Journey */}
      <div className="journey-section">
        <div className="section-heading center">
          <p className="small-title-dark">Our Journey</p>
          <h2>Divine Calling and Ministry Establishment</h2>
        </div>

        <div className="journey-timeline">
          <div className="journey-card">
            <span>1993</span>
            <h3>Divine Calling</h3>
            <p>
              In 1993, while living in Mumbai, the founder received a divine
              calling and was anointed to begin this glorious apostolic
              ministry.
            </p>
            <p>
              During this period, fervent prayers were made across villages,
              coastal areas, and mountainous regions of Maharashtra, supporting
              the servants of God ministering in North India.
            </p>
          </div>

          <div className="journey-card">
            <span>1995</span>
            <h3>Spiritual Experience</h3>
            <p>
              In 1995, the Lord blessed the ministry with a unique spiritual
              experience, allowing the founder to witness His divine image.
            </p>
            <p>
              Guided by the Holy Spirit and empowered by a heavenly anointing,
              the apostolic mission was embraced with full commitment.
            </p>
          </div>

          <div className="journey-card">
            <span>Romans 10:15</span>
            <h3>Missionary Journey</h3>
            <p>
              As Romans 10:15 says, “How beautiful are the feet of those who
              bring good news.”
            </p>
            <p>
              With a burdened heart and deep conviction, the Gospel was shared
              across North India. Many miles were covered on foot and by
              bicycle, preaching in regions such as Bihar, Nepal, Uttar Pradesh,
              Madhya Pradesh, Gujarat, Rajasthan, and Maharashtra.
            </p>
          </div>

          <div className="journey-card">
            <span>Raigad</span>
            <h3>Divine Vision</h3>
            <p>
              While serving in the Raigad district of Maharashtra, time was
              devoted to fasting and prayer, seeking God’s divine guidance.
            </p>
            <p>
              During ministry among the Kathikili tribal community, the Lord
              performed remarkable miracles and revealed His powerful presence.
            </p>
          </div>

          <div className="journey-card">
            <span>Mumbai</span>
            <h3>Journey Led by the Holy Spirit</h3>
            <p>
              Strengthened by the Word of God, the Gospel was preached
              extensively by bicycle. Led by the Holy Spirit, the journey
              continued to Mumbai, where God’s vision for the ministry became
              clearer.
            </p>
          </div>

          <div className="journey-card">
            <span>August 10, 1997</span>
            <h3>Ministry Establishment</h3>
            <p>
              Guide of Christ Mission Church was established on August 10, 1997.
              Since then, the ministry has faced many challenges while pursuing
              the divine vision given by God.
            </p>
            <p>
              By faith, prayer, and the guidance of the Holy Spirit, GC Church
              India continues to move forward in the mission of the Gospel.
            </p>
          </div>
        </div>
      </div>

      {/* Ministry Plans */}
      <div className="plans-section">
        <div className="section-heading center">
          <p className="small-title-dark">Our Ministry Plan</p>
          <h2>To Encourage Countless Individuals to Follow Jesus</h2>
        </div>

        <div className="plan-grid">
          {ministryPlans.map((plan, index) => (
            <div className="plan-card" key={index}>
              {plan}
            </div>
          ))}
        </div>
      </div>

      {/* Future Vision */}
      <div className="future-section">
        <div className="section-heading center">
          <p className="small-title-dark">Future Vision</p>
          <h2>Moving Forward With Faith</h2>
          <p>
            GC Church India continues to look forward with prayer, faith, and a
            deep burden to reach souls through the Gospel of Jesus Christ.
          </p>
        </div>

        <div className="future-list">
          {futurePlans.map((plan, index) => (
            <div className="future-item" key={index}>
              <span>{index + 1}</span>
              <p>{plan}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;