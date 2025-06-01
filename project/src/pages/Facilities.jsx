import React, { useState } from "react";
import i1 from "../images/h1.webp";
import i2 from "../images/h2.avif";
import i3 from "../images/h3.jpg";
import i4 from "../images/h4.jpg";
import i5 from "../images/h5.webp";
import i6 from "../images/h6.jpg";
import i7 from "../images/h7.avif";
import i8 from "../images/h8.png";
import i9 from "../images/h9.png";
import i10 from "../images/h10.png";

function App() {
  const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10];
  const [fullscreenImg, setFullscreenImg] = useState(null);

  // Close fullscreen on click or ESC key
  React.useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setFullscreenImg(null);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
  <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Hospital Facilities</h2>
        <p className="text-lg text-gray-600 mb-8">
          At Anirudh Hospital, we provide a range of facilities designed to ensure a comfortable and healing environment for our patients and visitors.
        </p>
      </section>
      <div className="grid grid-cols-3 auto-rows-[160px] gap-9 w-full max-w-[900px] mx-auto">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            className="w-full h-40 object-cover rounded-md cursor-pointer"
            alt={`Facility ${idx + 1}`}
            onClick={() => setFullscreenImg(src)}
          />
        ))}
      </div>

      {/* Fullscreen overlay */}
      {fullscreenImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 cursor-zoom-out"
          onClick={() => setFullscreenImg(null)}
        >
          <img
            src={fullscreenImg}
            alt="Fullscreen Facility"
            className="max-w-full max-h-full object-contain rounded-md shadow-lg"
          />
        </div>
      )}
    </>
  );
}

export default App;

  