import { useState } from "react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      title: "Ministry Prayer Moment",
      category: "Prayer",
      image: "/gallery/ministry-1.jpeg",
    },
    {
      title: "Gospel Outreach",
      category: "Outreach",
      image: "/gallery/ministry-2.jpeg",
    },
    {
      title: "Village Ministry",
      category: "Village Ministry",
      image: "/gallery/ministry-3.jpg",
    },
    {
      title: "Crusade Gathering",
      category: "Crusades",
      image: "/gallery/ministry-4.jpg",
    },
    {
      title: "Worship Meeting",
      category: "Worship",
      image: "/gallery/ministry-5.jpg",
    },
    {
      title: "Missionary Journey",
      category: "Mission",
      image: "/gallery/ministry-6.jpg",
    },
    {
      title: "Bible Teaching",
      category: "Teaching",
      image: "/gallery/ministry-7.jpg",
    },
    {
      title: "Community Outreach",
      category: "Outreach",
      image: "/gallery/ministry-8.jpg",
    },
  ];

  return (
    <section className="page-section gallery-page">
      <div className="page-heading">
        <p className="small-title-dark">Ministry Memories</p>
        <h1>Gallery</h1>
        <p>
          Photos captured during the ministry journey of GC Church India,
          including prayer moments, Gospel outreach, village ministry,
          crusades, worship meetings, and missionary work.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelectedImage(item)}
          >
            <div className="gallery-image-box">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="gallery-content">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div
            className="image-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img src={selectedImage.image} alt={selectedImage.title} />

            <div className="modal-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;