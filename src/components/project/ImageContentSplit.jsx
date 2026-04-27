import React from "react";
import ImageBox from "../ui/ImageBox";

/**
 * ImageContentSplit
 * 
 * @param {string} imageSrc - Source URL of the image
 * @param {string} imageAlt - Alt text for the image
 * @param {string} imagePosition - "left" or "right" (default: "left")
 * @param {Array} items - Array of { title, description } to render as cards
 */
export const ImageContentSplit = ({ id, imageSrc, imageAlt, imagePosition = "left", items = [] }) => {
  const isRight = imagePosition === "right";

  return (
    <div id={id} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {isRight ? (
        <>
          <div className="flex flex-col gap-4 order-last md:order-first">
            {items.map((item, index) => (
              <div key={index} className="card-1 card-sm border">
                <h4 className="h4 mb-2">{item.title}</h4>
                {typeof item.description === 'string' ? (
                  <p className="body-sm text-muted" dangerouslySetInnerHTML={{ __html: item.description }} />
                ) : (
                  <p className="body-sm text-muted">{item.description}</p>
                )}
              </div>
            ))}
          </div>
          <ImageBox src={imageSrc} alt={imageAlt || ""} />
        </>
      ) : (
        <>
          <ImageBox src={imageSrc} alt={imageAlt || ""} />
          <div className="flex flex-col gap-4">
            {items.map((item, index) => (
              <div key={index} className="card-1 card-sm border">
                <h4 className="h4 mb-2">{item.title}</h4>
                {typeof item.description === 'string' ? (
                  <p className="body-sm text-muted" dangerouslySetInnerHTML={{ __html: item.description }} />
                ) : (
                  <p className="body-sm text-muted">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
