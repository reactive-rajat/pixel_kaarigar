import React from "react";

function ImageBox({ src, alt }) {
  return (
    <div className="img-box w-full flex flex-col items-center justify-center text-center aspect-square border card-1 rounded-xl overflow-hidden">
      <img
        className="image-hover-scale"
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default ImageBox;
