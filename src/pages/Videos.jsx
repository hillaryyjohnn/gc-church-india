function Videos() {
  const videos = [
    {
      title: "Worship Moment",
      category: "Worship",
      description: "A short worship moment from GC Church India.",
      youtubeId: "YOUR_VIDEO_ID_1",
    },
    {
      title: "Prayer Meeting",
      category: "Prayer",
      description: "A powerful prayer meeting clip from GC Church India.",
      youtubeId: "YOUR_VIDEO_ID_2",
    },
    {
      title: "Crusade Highlight",
      category: "Crusade",
      description: "Highlights from a Gospel crusade conducted by GC Church India.",
      youtubeId: "YOUR_VIDEO_ID_3",
    },
    {
      title: "Short Message",
      category: "Message",
      description: "A short Word of God message for encouragement and faith.",
      youtubeId: "YOUR_VIDEO_ID_4",
    },
  ];

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="small-title-dark">GC Church India</p>
        <h1>Ministry Videos</h1>
        <p>
          Watch short worship moments, prayer clips, crusade highlights,
          testimonies, and messages from GC Church India.
        </p>
      </div>

      <div className="featured-video">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/YOUR_FEATURED_VIDEO_ID"
            title="GC Church India Featured Video"
            allowFullScreen
          ></iframe>
        </div>

        <div className="featured-video-content">
          <span>Featured Video</span>
          <h2>Latest Ministry Moment</h2>
          <p>
            Experience a special moment from GC Church India through worship,
            prayer, and the Word of God.
          </p>
        </div>
      </div>

      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <div className="video-wrapper small-video">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allowFullScreen
              ></iframe>
            </div>

            <div className="video-card-body">
              <span>{video.category}</span>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Videos;