// components/DotLottieLoader.jsx
"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const DotLottieLoader = ({
  src = "/images/loader.lottie",
  width = "120px",
  height = "120px",
  loop = true,
  autoplay = true,
  className = "",
  overlayColor = "rgba(0, 0, 0, 0.1)", // Light gray with 10% opacity
  zIndex = 50, // Default z-index to ensure it appears above other content
  ...props
}) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${className}`}
      style={{
        backgroundColor: overlayColor,
        zIndex: zIndex,
      }}
      aria-label="Loading..."
      role="status"
    >
      <div style={{ width, height }}>
        <DotLottieReact
          src={src}
          loop={loop}
          autoplay={autoplay}
          style={{ width: "100%", height: "100%" }}
          {...props}
        />
      </div>
    </div>
  );
};

export default DotLottieLoader;
