"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

const ResponsiveSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const thumbnailsToShow = Math.min(3, images.length);
  const [thumbnailWidth, setThumbnailWidth] = useState(90);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index); // Update main image to match the thumbnail clicked
  };

  const slideThumbnails = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + images.length) % images.length;

      // Update thumbnailStartIndex based on the direction and new index
      let newStartIndex = thumbnailStartIndex;
      if (
        direction === 1 &&
        newIndex >= thumbnailStartIndex + thumbnailsToShow
      ) {
        newStartIndex = newIndex - (thumbnailsToShow - 1);
      } else if (direction === -1 && newIndex < thumbnailStartIndex) {
        newStartIndex = newIndex;
      }

      // Ensure the last thumbnail stays at the end
      if (newStartIndex > images.length - thumbnailsToShow) {
        newStartIndex = images.length - thumbnailsToShow;
      }

      setThumbnailStartIndex(newStartIndex); // Update thumbnail start index
      return newIndex;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setThumbnailWidth(window.innerWidth < 768 ? 180 : 70);
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
            unoptimized
          />
        </div>
      </div>

      {/* Thumbnails Controls */}
      <div className="thumbnail-controls mt-5 flex items-center justify-center md:me-8">
        {/* Left Button */}
        <button
          onClick={() => slideThumbnails(-1)}
          disabled={currentIndex === 0}
          className="bg-white h-[60px] px-1 rounded-md text-red-600 disabled:opacity-50"
        >
          <MdArrowBackIosNew className="text-3xl font-[500] hover:border hover:rounded-md hover:bg-gray-200 cursor-pointer" />
        </button>

        {/* Thumbnails Container */}
        <div className="thumbnails w-1/2 flex overflow-hidden ">
          <div
            className="h-[51px] w-[55px] flex"
            style={{
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${
                thumbnailStartIndex * thumbnailWidth
              }px)`,
              width: `${images.length * thumbnailWidth}px`, // Ensure the container width fits all thumbnails
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={80}
                height={65}
                unoptimized
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
          <MdArrowForwardIos className="text-3xl font-[500] hover:border hover:rounded-md hover:bg-gray-200 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
