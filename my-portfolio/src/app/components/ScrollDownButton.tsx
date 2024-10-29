"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollDownButton() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToNextSection}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300"
      aria-label="Scroll to next section"
    >
      <ChevronDown className="w-6 h-6 text-gray-600" />
    </button>
  );
}
