import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./Gallery.css";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const gallerySections = [
    {
      title: "Village Ministry",
      subtitle:
        "Reaching villages with prayer, worship, and the Gospel of Christ.",
      images: [
        {
          src: "/gallery/village/1.jpeg",
          caption: "Village worship gathering",
        },
        {
          src: "/gallery/village/3.jpeg",
          caption: "Outdoor Gospel meeting",
        },
        {
          src: "/gallery/village/6.jpeg",
          caption: "Praying together in church",
        },
      ],
    },

    {
      title: "Kids Ministry",
      subtitle:
        "Sharing God's love with children through worship and fellowship.",
      images: [
        {
          src: "/gallery/kids/14.jpeg",
          caption: "Children worship session",
        },
        {
          src: "/gallery/kids/15.jpeg",
          caption: "Kids fellowship",
        },
        {
          src: "/gallery/kids/16.jpeg",
          caption: "Teaching children",
        },
        {
          src: "/gallery/kids/17.jpeg",
          caption: "Joyful praise",
        },
        {
          src: "/gallery/kids/18.jpeg",
          caption: "Prayer for children",
        },
        {
          src: "/gallery/kids/19.jpeg",
          caption: "Kids worship moment",
        },
        {
          src: "/gallery/kids/27.jpeg",
          caption: "Children ministry event",
        },
      ],
    },

    {
      title: "Healing Prayer",
      subtitle:
        "Praying for the sick and believing in God's healing power.",
      images: [
        {
          src: "/gallery/healing/12.jpeg",
          caption: "Prayer for healing",
        },
      ],
    },

    {
      title: "Helping the Needy",
      subtitle:
        "Serving communities with compassion and practical support.",
      images: [
        {
          src: "/gallery/helping/9.jpeg",
          caption: "Serving families",
        },
        {
          src: "/gallery/helping/10.jpeg",
          caption: "Community support",
        },
        {
          src: "/gallery/helping/11.jpeg",
          caption: "Helping the needy",
        },
      ],
    },

    {
      title: "Outdoor Gospel Meetings",
      subtitle:
        "Powerful outdoor gatherings where the Gospel was preached with prayer, worship, and the Word of God.",

      images: [
        {
          src: "/gallery/outdoor/24.jpeg",
          caption: "Preaching the Gospel in an outdoor meeting",
        },

        {
          src: "/gallery/outdoor/25.jpeg",
          caption: "Ministering to people during open-air worship",
        },

        {
          src: "/gallery/outdoor/32.jpeg",
          caption: "Prayer and preaching during village outreach",
        },

        {
          src: "/gallery/outdoor/29.jpeg",
          caption: "Outdoor worship gathering led by the preacher",
        },
      ],
    },

    {
      title: "Church Fellowship",
      subtitle:
        "Moments of prayer, unity, and fellowship in Christ.",
      images: [
       
        {
          src: "/gallery/others/21.jpeg",
          caption: "Church fellowship gathering",
        },
        {
          src: "/gallery/others/22.jpeg",
          caption: "Church fellowship gathering",
        },
        {
          src: "/gallery/others/23.jpeg",
          caption: "Church fellowship gathering",
        },
        {
          src: "/gallery/others/28.jpeg",
          caption: "Church fellowship gathering",
        },
        
      ],
    },
  ];

  const allImages = gallerySections.flatMap((section) => section.images);

  const currentIndex = selectedImage
    ? allImages.findIndex((img) => img.src === selectedImage.src)
    : 0;

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setSelectedImage(allImages[nextIndex]);
  };

  const showPrev = () => {
    const prevIndex =
      (currentIndex - 1 + allImages.length) % allImages.length;
    setSelectedImage(allImages[prevIndex]);
  };

  return (
    <div className="gallery-page">

      {/* HERO SECTION */}
      <section className="gallery-hero-page">
        <div className="overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p>GC CHURCH INDIA</p>

          <h1>Moments From Ministry</h1>

          <span>
            Capturing prayer, worship, outreach, healing, village ministry,
            children ministry, and the love of Christ through every journey.
          </span>
        </motion.div>
      </section>

      {/* GALLERY SECTIONS */}
      {gallerySections.map((section, sectionIndex) => (
        <section className="gallery-section" key={sectionIndex}>
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p>MINISTRY MOMENTS</p>

            <h2>{section.title}</h2>

            <span>{section.subtitle}</span>
          </motion.div>

          <div className="masonry-grid">
            {section.images.map((image, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.caption} />

                <div className="gallery-overlay">
                  <div>
                    <h3>{image.caption}</h3>
                    <p>{section.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button
              className="nav-btn left"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
            >
              <ChevronLeft size={36} />
            </button>

            <motion.img
              key={selectedImage.src}
              src={selectedImage.src}
              alt={selectedImage.caption}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="nav-btn right"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            >
              <ChevronRight size={36} />
            </button>

            <div className="lightbox-caption">
              <h3>{selectedImage.caption}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;