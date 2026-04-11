import React from "react";
import brandLogos from "../../../data/brands.js";
import "./Brands.css";

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
      <div className="brands-shell">
        <div className="brands-header group" style={{marginBottom: "var(--space-6)" }}>
          <span className="pill">Brands I&apos;ve worked with</span>
          <h2><span className="text-primary">Brands</span> I&apos;ve designed and built for.</h2>
          <p>From early wireframes to shipped interfaces — these are the teams I&apos;ve collaborated with as a UI/UX designer who codes.</p>
        </div>

        <div className="brands-stage" aria-label="Brand logos">
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
                  {/* <p className="brand-name">{brand.brandName}</p> */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
