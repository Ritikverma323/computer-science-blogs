"use client";
import { useState, useEffect } from "react";

export default function ReadingProgressBar() {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight; // Height of the visible part of the page (viewport)
    const viewportHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollDistance = totalHeight - viewportHeight;

    if (scrollDistance > 0) {
      const percentage = (scrollTop / scrollDistance) * 100;
      setWidth(percentage);
    } else {
      setWidth(100);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="reading-progress-container">
      <div className="reading-progress-bar" style={{ width: `${width}%` }} />
    </div>
  );
}
