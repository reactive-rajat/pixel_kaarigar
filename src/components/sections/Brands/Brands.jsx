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
    <section className="brands-wrapper">
      <div className="brands-shell">
        <div className="brands-header">
          <span className="label-tag">Brands I&apos;ve worked with</span>
          <h3>Products and teams I&apos;ve helped shape along the way.</h3>
          <p>
            The logo motion lives here now, where it belongs: with the teams,
            products, and organisations behind the work.
          </p>
        </div>

        <div className="brands-stage" aria-label="Brand logos">
          <div
            className={`brands-marquee ${shouldScroll ? "is-scrolling" : "is-static"}`}
          >
            <div className="brands-track">
              {displayLogos.map((brand, index) => (
                <a
                  key={`${brand.brandName}-${index}`}
                  className="brand-card card-hoverable"
                  href={brand.brandUrl}
                  aria-label={brand.brandName}
                >
                  <div className="brand-logo">
                    <img src={brand.logoImage} alt={brand.brandName} />
                  </div>
                  <p className="brand-name">{brand.brandName}</p>
                </a>
              ))}
            </div>
          </div>

          <div
            className={`brands-marquee brands-marquee-reverse ${shouldScroll ? "is-scrolling" : "is-static"}`}
          >
            <div className="brands-track">
              {reverseLogos.map((brand, index) => (
                <a
                  key={`${brand.brandName}-reverse-${index}`}
                  className="brand-card card-1 card-hoverable"
                  href={brand.brandUrl}
                  aria-label={brand.brandName}
                >
                  <div className="brand-logo">
                    <img src={brand.logoImage} alt={brand.brandName} />
                  </div>
                  <p className="brand-name">{brand.brandName}</p>
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
