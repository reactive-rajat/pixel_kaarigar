import React from "react";
import ImageBox from "../image/ImageBox";

function ImageLeftCol({h4, src}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <ImageBox
        src={src}
        alt="Color System & Accessibility"
      />
      <div className="flex flex-col gap-4">
        <div className="card-1 card-sm border">
          <h4 className="h4 mb-2">Primary: Coach Ultra Violet</h4>
          <p className="body-sm text-muted">
            Switched from Green to <code>#3D50FF</code>. It passes WCAG AA,
            draws the eye instantly, and builds trust.
          </p>
        </div>
        <div className="card-1 card-sm border">
          <h4 className="h4 mb-2">Secondary: Assertive Magenta</h4>
          <p className="body-sm text-muted">
            Added <code>#D01176</code> for highlights that need energy without
            fighting the primary violet.
          </p>
        </div>
        <div className="card-1 card-sm border">
          <h4 className="h4 mb-2">Logical Backgrounds</h4>
          <p className="body-sm text-muted">
            Defined exactly 3 light and 3 dark background shades. We stopped
            using random dark backgrounds just to separate sections.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageLeftCol;
