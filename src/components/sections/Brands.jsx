import React from "react";

const brandLogos = [
  {
    logoImage: "/src/assets/clients_logo/asman_logo.png",
    brandName: "ASMAN",
    brandUrl: "#",
  },
  {
    logoImage: "/src/assets/clients_logo/bold_logo.png",
    brandName: "BOLD",
    brandUrl: "#",
  },
  {
    logoImage: "/src/assets/clients_logo/mpr_logo.png",
    brandName: "MyPerfectResume",
    brandUrl: "#",
  },
  {
    logoImage: "/src/assets/clients_logo/unicef_logo.png",
    brandName: "UNICEF",
    brandUrl: "#",
  },
  {
    logoImage: "/src/assets/clients_logo/unfpa_logo.png",
    brandName: "UNFPA",
    brandUrl: "#",
  },
];

function Brands() {
  const shouldScroll = brandLogos.length >= 5;
  // Duplicate the list once so the animation can loop without a visible jump.
  const displayLogos = shouldScroll
    ? [...brandLogos, ...brandLogos]
    : brandLogos;

  return (
    <section>
        <div className="brands-section">
      <p className="eyebrow">Brands I&apos;ve Worked With</p>
      <div
        className={`brands-marquee ${shouldScroll ? "is-scrolling" : "is-static"}`}
        aria-label="Brand logos"
      >
        <div className="brands-track">
          {displayLogos.map((brand, index) => (
            <a
              key={`${brand.brandName}-${index}`}
              className="brand-item"
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
    <style jsx="true">{`

        .brands-section {
          text-align: center;
        }

        .eyebrow {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 2rem;
          font-weight: 800;
        }

        .brands-marquee {
          position: relative;
          overflow: hidden;
          display: flex;
          padding: 0.5rem 0;
          max-width: 900px;
          margin: 0 auto;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }

        .brands-marquee::before,
        .brands-marquee::after {
          content: '';
          position: absolute;
          top: 0;
          width: 90px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .brands-marquee::before {
          left: 0;
          background: linear-gradient(90deg, rgba(7, 6, 10, 0.95), transparent);
        }

        .brands-marquee::after {
          right: 0;
          background: linear-gradient(270deg, rgba(7, 6, 10, 0.95), transparent);
        }

        .brands-track {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: nowrap;
          width: max-content;
          min-width: max-content;
        }

        .brands-marquee.is-scrolling .brands-track {
          animation: marquee-left 40s linear infinite;
          will-change: transform;
        }

        .brand-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .brand-logo {
          height: 80px;
          width: auto;
          padding: 0.6rem 1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .brand-logo img {
          height: 100%;
          width: auto;
          max-width: 240px;
          object-fit: contain;
        }

        .brand-name {
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 400;
        }

        .brands-marquee.is-scrolling:hover .brands-track {
          animation-play-state: paused;
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 1024px) {
          .brands-track {
            gap: 1.75rem;
          }

          .brand-logo {
            height: 72px;
          }
        }

        @media (max-width: 640px) {
          .brands-track {
            gap: 1.25rem;
          }

          .brand-logo {
            height: 64px;
          }

          .brand-name {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Brands;
