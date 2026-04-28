import React, { useState } from 'react';

export const BeforeAfterSlider = ({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After", id }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div id={id} className="relative w-full aspect-video overflow-hidden rounded-xl border border-[var(--color-border)] select-none bg-[var(--card-bg-2)] group">
      
      {/* After Image (Background, Right Side) */}
      <div className="absolute inset-0 w-full h-full">
        <img src={afterImage} alt={afterLabel} className="w-full h-full object-cover pointer-events-none" />
        {/* After Label */}
        <div className="absolute top-4 right-4 z-0 pointer-events-none transition-opacity duration-300">
          <div className="inline-flex items-center justify-center rounded-full shadow-md bg-[var(--color-bg-main)]/80 backdrop-blur-md border border-[var(--color-border)] text-[var(--color-text)] text-xs font-bold tracking-wider uppercase px-4 py-1.5">
            {afterLabel}
          </div>
        </div>
      </div>
      
      {/* Before Image (Foreground, Clipped, Left Side) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img src={beforeImage} alt={beforeLabel} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        
        {/* Before Label (Inside clipped area so it hides naturally) */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <div className="inline-flex items-center justify-center rounded-full shadow-md bg-[var(--color-bg-main)]/80 backdrop-blur-md border border-[var(--color-border)] text-[var(--color-text)] text-xs font-bold tracking-wider uppercase px-4 py-1.5">
            {beforeLabel}
          </div>
        </div>
      </div>

      {/* Custom Slider Handle/Line */}
      <div 
        className="absolute top-0 bottom-0 flex items-center justify-center pointer-events-none z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/70 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
        
        {/* Drag Handle Knob */}
        <div className="relative w-12 h-12 bg-[var(--color-bg-main)] rounded-full shadow-xl flex items-center justify-center text-[var(--color-text)] border border-[var(--color-border)] transition-transform duration-200 group-hover:scale-110 group-active:scale-95">
          <span className="material-symbols-outlined text-xl" style={{ fontWeight: 400 }}>swap_horiz</span>
        </div>
      </div>

      {/* Hidden Native Range Input for Perfect Interaction & Accessibility */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={(e) => setSliderPosition(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0 p-0"
        aria-label="Before and After Slider"
      />
    </div>
  );
};
