import React, { useState } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const galleryImages = [
    {
      id: "1",
      src: "/assets/images/gallery/ae11.jpeg",
      alt: "Gallery Image 1",
      className: "sm:col-span-2 sm:row-span-2",
    },
    {
      id: "2",
      src: "/assets/images/gallery/ae4.jpeg",
      alt: "Gallery Image 2",
      className: "sm:col-span-1",
    },
    {
      id: "3",
      src: "/assets/images/gallery/ae5.jpeg",
      alt: "Gallery Image 3",
      className: "sm:col-span-1 sm:row-span-2",
    },
    {
      id: "4",
      src: "/assets/images/gallery/ae6.jpeg",
      alt: "Gallery Image 4",
      className: "sm:col-span-2",
    },
    {
      id: "8",
      src: "/assets/images/gallery/ae7.jpeg",
      alt: "Gallery Image 5",
      className: "sm:col-span-2",
    },
    {
      id: "7",
      src: "/assets/images/gallery/ae2.jpeg",
      alt: "Gallery Image 6",
      className: "sm:col-span-1 sm:row-span-2",
    },
    {
      id: "5",
      src: "/assets/images/gallery/ae3.jpeg",
      alt: "Gallery Image 7",
      className: "sm:col-span-2 sm:row-span-2",
    },
    {
      id: "6",
      src: "/assets/images/gallery/ae8.jpeg",
      alt: "Gallery Image 8",
      className: "sm:col-span-1",
    },
    {
      id: "9",
      src: "/assets/images/gallery/ae10.jpeg",
      alt: "Gallery Image 9",
      className: "sm:col-span-2 sm:row-span-2",
    },
    {
      id: "10",
      src: "/assets/images/gallery/ae9.jpeg",
      alt: "Gallery Image 10",
      className: "sm:col-span-1",
    },
    {
      id: "11",
      src: "/assets/images/gallery/ae1.jpeg",
      alt: "Gallery Image 11",
      className: "sm:col-span-1 sm:row-span-2",
    },
    {
      id: "12",
      src: "/assets/images/gallery/ae12.jpeg",
      alt: "Gallery Image 12",
      className: "sm:col-span-2 sm:row-span-2",
    },
  ];

  const [visibleImages, setVisibleImages] = useState(galleryImages.slice(0, 4));
  const loadMore = () => setVisibleImages(galleryImages);

  return (
    <div id="gallery">
      <section className="py-8 bg-gradient-to-b from-orange-100/20 to-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="section-title mb-6">
              <span className="sub-title ">Gallery</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 auto-rows-[200px] mb-10">
            {visibleImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow ${image.className}`}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">
                    {image.alt}
                  </span>
                </div>

                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleImages.length < galleryImages.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <button
                onClick={loadMore}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
              >
                See More
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
