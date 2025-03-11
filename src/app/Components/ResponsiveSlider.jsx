"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const ResponsiveSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const thumbnailsToShow = Math.min(3, images.length);
  const [thumbnailWidth, setThumbnailWidth] = useState(70);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index); // Update main image to match the thumbnail clicked
  };

  const slideThumbnails = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + images.length) % images.length;

      // Update thumbnailStartIndex based on the direction and new index
      const newStartIndex = Math.min(
        Math.max(newIndex - (thumbnailsToShow - 1), 0),
        images.length - thumbnailsToShow
      );

      setThumbnailStartIndex(newStartIndex); // Update thumbnail start index
      return newIndex;
    });
  };
  useEffect(() => {
    const handleResize = () => {
      setThumbnailWidth(window.innerWidth < 768 ? 80 : 70);
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mx-auto">
      {/* Main Image */}
      <div className="main-image">
        <div className="md:h-[280px] h-[180px] md:mt-5 flex flex-col items-center justify-center">
          <Image
            className="mx-auto md:w-[320px] w-[220px] object-cover"
            width={400}
            height={100}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
          />
        </div>
      </div>

      {/* Thumbnails Controls */}
      <div className="thumbnail-controls mt-5 flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={() => slideThumbnails(-1)}
          disabled={currentIndex === 0}
          className="bg-white h-[60px] px-1 rounded-md text-red-600 disabled:opacity-50"
        >
          <FaArrowLeft />
        </button>

        {/* Thumbnails Container */}
        <div
          className="thumbnails flex overflow-hidden "
          style={{
            width: `${thumbnailsToShow * 0}px`,
          }}
        >
          <div
            className="h-[51px] w-[55px] flex"
            style={{
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${
                thumbnailStartIndex * thumbnailWidth
              }px)`,
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={80}
                height={65}
                alt={`Thumbnail ${index}`}
                onClick={() => handleThumbnailClick(index)}
                className="mx-2 cursor-pointer rounded object-cover w-[70px] h-[51px]"
                style={{
                  border:
                    currentIndex === index
                      ? "1px solid #2C80EF"
                      : "1px solid #cfcfcf",
                  padding: "2px",
                  transition: "border 0.3s ease-in-out",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => slideThumbnails(1)}
          disabled={currentIndex === images.length - 1}
          className="bg-white h-[60px] px-1 rounded-md text-red-600 disabled:opacity-50"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
