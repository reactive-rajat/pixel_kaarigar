import React from "react";
import brandLogos from "../../../data/brands.js";
import "./Brands.css";
import Backdrop from "@/public/assets/brand/backdrop/Backdrop.jsx";
import Laptop from "@/public/assets/brand/backdrop/Laptop.jsx";
import SectionHeading from "../../common/SectionHeading/SectionHeading.jsx";

function Brands() {
  const shouldScroll = brandLogos.length >= 5;
  const displayLogos = shouldScroll
    ? [...brandLogos, ...brandLogos]
    : brandLogos;
  const reverseLogos = shouldScroll
    ? [...brandLogos].reverse().concat([...brandLogos].reverse())
    : [...brandLogos].reverse();

  return (
    <section className="brands-wrapper card-3">
      <SectionHeading
        label="Brands I&apos;ve worked with"
        title={<><span className="text-primary">Brands</span> I&apos;ve designed and built for.</>}
        description="From early wireframes to shipped interfaces — these are the teams I've collaborated with as a UI/UX designer who codes."
      />
      <div className="brands-scanner-area" aria-label="Brand logos">
          <div className="brands-stage-composer">
            
            {/* Background SVG Context */}
            <Backdrop/>
            
            {/* The layer that isolates blur effects (only logos will blur) */}
            <div className="stage-marquee-layer">
              <div
                className={`brands-marquee ${shouldScroll ? "is-scrolling" : "is-static"}`}
              >
                <div className="brands-track">
                  {displayLogos.map((brand, index) => (
                    <a
                      key={`${brand.brandName}-${index}`}
                      className="brand-card"
                      href={brand.brandUrl}
                      aria-label={brand.brandName}
                    >
                      <div className="brand-logo">
                        <img src={brand.logoImage} alt={brand.brandName} />
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
            <Laptop/>
          </div>
        </div>
    </section>
  );
}

export default Brands;
