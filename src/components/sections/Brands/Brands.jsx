import React, { useRef, useEffect } from "react";
import brandLogos from "../../../data/brands.js";
import "./Brands.css";
import Backdrop from "@/public/assets/brand/backdrop/Backdrop.jsx";
import Laptop from "@/public/assets/brand/backdrop/Laptop.jsx";
import SectionHeading from "../../ui/SectionHeading/SectionHeading.jsx";

function Brands() {
  const shouldScroll = brandLogos.length >= 5;
  const displayLogos = shouldScroll
    ? [...brandLogos, ...brandLogos]
    : brandLogos;
  const reverseLogos = shouldScroll
    ? [...brandLogos].reverse().concat([...brandLogos].reverse())
    : [...brandLogos].reverse();

  const layerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let frameId;
    const checkPositions = () => {
      if (!layerRef.current || !trackRef.current) return;

      const layerRect = layerRef.current.getBoundingClientRect();
      const centerX = layerRect.left + layerRect.width / 2;
      const coloredThreshold = layerRect.right - layerRect.width * 0.35; // Start coloring when exiting the right edge

      const cards = trackRef.current.querySelectorAll(".brand-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;

        // Add color
        if (cardCenter <= coloredThreshold) {
          if (!card.classList.contains("is-colored"))
            card.classList.add("is-colored");
        } else {
          if (card.classList.contains("is-colored"))
            card.classList.remove("is-colored");
        }

        // Add tick
        if (cardCenter <= centerX) {
          if (!card.classList.contains("is-checked"))
            card.classList.add("is-checked");
        } else {
          if (card.classList.contains("is-checked"))
            card.classList.remove("is-checked");
        }
      });

      frameId = requestAnimationFrame(checkPositions);
    };

    // Only run if shouldScroll is true, otherwise let CSS handle static checked states
    if (shouldScroll) {
      frameId = requestAnimationFrame(checkPositions);
    }
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [shouldScroll]);

  return (
    <section className="brands-wrapper card-3">
      <div className="container-lg">
        <SectionHeading
          label="Brands I've worked with"
          title={
            <>
              <span className="text-primary">Brands</span> I&apos;ve designed
              and built for.
            </>
          }
          description="From early wireframes to shipped interfaces — these are the teams I've collaborated with as a UI/UX designer who codes."
        />
      </div>
      <div className="container-md">
        <div className="brands-scanner-area" aria-label="Brand logos">
          <div className="brands-stage-composer">
            {/* Background SVG Context */}
            <Backdrop />

            {/* The layer that isolates blur effects (only logos will blur) */}
            <div className="stage-marquee-layer" ref={layerRef}>
              <div
                className={`brands-marquee ${shouldScroll ? "is-scrolling" : "is-static"}`}
              >
                <div className="brands-track" ref={trackRef}>
                  {displayLogos.map((brand, index) => (
                    <a
                      key={`${brand.brandName}-${index}`}
                      className="brand-card"
                      href={brand.brandUrl}
                      aria-label={brand.brandName}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="brand-logo">
                        <img src={brand.logoImage} alt={brand.brandName} />
                        <div className="scan-tick">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="10" fill="#10B981" />
                            <path
                              d="M8 12L11 15L16 9"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Overlays rendering strictly inside the isolated layer */}
              <div className="scanner-glass left"></div>
              <div className="scanner-glass right"></div>
            </div>

            {/* Laptop Cutout SVG frame over the marquee */}
            <Laptop />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
