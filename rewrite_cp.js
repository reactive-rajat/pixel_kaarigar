const fs = require('fs');

const content = `import React, { useState, useEffect, useRef } from 'react';
import './ComponentsPreview.css';

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark');
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
  };
  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
  }, []);
  return { dark, toggle };
}

function useToast() {
  const [msg, setMsg] = useState('');
  const [visible, setVisible] = useState(false);
  const timer = useRef(null);
  const show = (text) => {
    setMsg(text);
    setVisible(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), 1800);
  };
  return { msg, visible, show };
}

/* ─────────────────────────────────────────────
   LIBRARY GUIDE DATA
───────────────────────────────────────────── */
const LIBRARY_GUIDE = {
  '.h1': 'font-size: clamp(2.8rem, 7vw, 4.25rem);\\nline-height: 1.05;\\nfont-weight: 900;',
  '.h2': 'font-size: clamp(2.15rem, 4.8vw, 3.25rem);\\nline-height: 1;\\nfont-weight: 900;',
  '.h3': 'font-size: clamp(1rem, 2vw, 2.5rem);\\nfont-weight: 700;\\nline-height: 1.5;',
  '.h4': 'font-size: clamp(1rem, 1.4vw, 1.6rem);\\nfont-weight: 600;\\nline-height: 1;',
  '.h5': 'font-size: clamp(1rem, 1.4vw, 1.6rem);\\nfont-weight: 600;\\nline-height: 1;',
  '.h6': 'font-size: clamp(1rem, 1.4vw, 1.6rem);\\nfont-weight: 600;\\nline-height: 1;',
  '.body-lg': 'font-size: 1.125rem;\\nline-height: 1.7;',
  '.body': 'font-size: 0.95rem;\\nline-height: 1.5;',
  '.body-sm': 'font-size: 0.875rem;\\nline-height: 1.5;',
  '.caption': 'font-size: 0.75rem;\\nline-height: 1.5;',
  '.text-primary': 'color: var(--color-primary);',
  '.text-muted': 'color: var(--color-text-muted);',
  '.text-label': 'color: var(--color-text-label);',
  '.text-success': 'color: var(--color-success);',
  '.text-danger': 'color: var(--color-danger);',
  '.text-gradient': 'background: linear-gradient(...);\\n-webkit-background-clip: text;',
  '.font-normal': 'font-weight: 400;',
  '.font-medium': 'font-weight: 500;',
  '.font-semibold': 'font-weight: 600;',
  '.font-bold': 'font-weight: 700;',
  '.font-black': 'font-weight: 900;',
  '.uppercase': 'text-transform: uppercase;',
  '.tracking-wide': 'letter-spacing: 0.08em;',
  '.btn': 'display: inline-flex;\\ngap: 0.75rem;\\npadding: 1rem 1.75rem;\\nborder-radius: 9999px;\\ntransition: all 0.3s cubic-bezier(...);',
  '.btn-primary': 'background-color: var(--color-primary);\\ncolor: white;\\nhover: scale(1.05) & shadow-glow;',
  '.btn-secondary': 'background-color: var(--color-bg-main);\\nborder: 1px solid var(--color-primary);\\ncolor: var(--color-primary);',
  '.btn-outline': 'background: transparent;\\nborder: 1px solid var(--color-border);',
  '.btn-ghost': 'background: transparent;\\ncolor: var(--color-text-muted);',
  '.btn-sm': 'padding: 0.5rem 1rem;\\nfont-size: 0.875rem;',
  '.btn-lg': 'padding: 1.25rem 2.5rem;\\nfont-size: 1.125rem;',
  '.card-1': 'background-color: var(--color-card);\\nborder-color: var(--color-border);',
  '.card-2': 'background-color: var(--color-card-alt);\\nborder-color: var(--color-border);',
  '.card-3': 'background-color: var(--color-bg-soft);\\nborder-color: var(--color-border);',
  '.card-glass': 'backdrop-filter: blur(20px);\\nbackground-color: var(--color-bg-soft);',
  '.card-sm': 'border-radius: var(--radius-md);\\npadding: var(--space-md);',
  '.card-md': 'border-radius: var(--radius-lg);\\npadding: var(--space-lg);',
  '.card-lg': 'border-radius: var(--radius-xl);\\npadding: var(--space-xl);',
  '.card-hover': 'hover: translateY(-4px);\\ntransition: transform 0.25s, border-color, box-shadow;',
  '.shadow-sm': 'box-shadow: var(--shadow-sm);',
  '.shadow-md': 'box-shadow: var(--shadow-md);',
  '.shadow-lg': 'box-shadow: var(--shadow-lg);',
  '.shadow-glow': 'box-shadow: var(--shadow-glow);',
  '.pill': 'display: inline-flex;\\ngap: 0.4rem;\\npadding: 0.38rem 0.9rem 0.3rem;\\nborder-radius: 9999px;\\nfont-size: 12px;\\ntext-transform: uppercase;',
  '.pill-primary': 'background-color: var(--color-primary-20);\\ncolor: var(--color-primary);\\nborder-color: var(--color-primary-glow);',
  '.pill-secondary': 'background-color: rgba(var(--rgb-secondary), 0.15);\\ncolor: var(--color-secondary);\\nborder-color: var(--color-secondary);',
  '.pill-status': 'background-color: var(--color-success-bg);\\ncolor: var(--color-success);',
  '.ping-dot': 'padding-left: 1.8rem;\\n::before, ::after pseudo-elements animating.',
  '.link': 'color: var(--color-primary);\\ntransition: opacity 0.2s;\\nhover: opacity-80',
  '.link-underline': 'text-decoration: underline;\\ntext-underline-offset: 4px;',
  '.link-muted': 'color: var(--color-text-muted);',
  '.container': 'max-width: var(--container-width-lg);\\npadding: 0 2rem;\\nmargin: 0 auto;',
  '.container-md': 'max-width: var(--container-width-md);\\npadding: 0 2rem;\\nmargin: 0 auto;',
  '.section': 'padding: var(--space-2xl) 0;',
  '.section-sm': 'padding: var(--space-xl) 0;',
  '.flex': 'display: flex;',
  '.flex-col': 'display: flex;\\nflex-direction: column;',
  '.flex-center': 'display: flex;\\nalign-items: center;\\njustify-content: center;',
  '.flex-between': 'display: flex;\\nalign-items: center;\\njustify-content: space-between;',
  '.grid-2': 'display: grid;\\ngrid-template-columns: repeat(2, 1fr);',
  '.grid-3': 'display: grid;\\ngrid-template-columns: repeat(3, 1fr);',
  '.gap-2': 'gap: 0.5rem;',
  '.gap-3': 'gap: 0.75rem;',
  '.gap-4': 'gap: 1rem;',
  '.gap-5': 'gap: 1.25rem;',
  '.gap-6': 'gap: 1.5rem;',
  '.gap-8': 'gap: 2rem;',
  '.divider': 'height: 1px;\\nbackground: linear-gradient(90deg, transparent, border, transparent);',
  '.animate-float': 'animation: float 6s ease-in-out infinite;',
  '.animate-pulse-glow': 'animation: pulse 4s ease-in-out infinite;',
  '.shimmer': 'animation: shimmer 2s infinite;',
  '.transition': 'transition-duration: 150ms;',
  '.transition-fast': 'transition-duration: 75ms;',
};

function useComputedVar(varName) {
  const [val, setVal] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      const computed = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
      if (computed) setVal(computed);
    }, 100);
    return () => clearTimeout(timer);
  }, [varName]);
  return val;
}

/* ─────────────────────────────────────────────
   Doc Cards 
───────────────────────────────────────────── */

/* Advanced Class Doc Card */
function DocCard({ label, title, preview, alignLeft, onCopy }) {
  const code = LIBRARY_GUIDE[label] || '/* Utility class variations \\n  Refer to core CSS */';
  return (
    <div className="cp-doc-card" onClick={() => onCopy(label)} title="Click to copy class">
      <div className="cp-doc-header">
        <span className="cp-doc-label">{label}</span>
        {title && <span className="cp-doc-title">{title}</span>}
      </div>
      {preview && (
        <div className={\`cp-doc-preview \${alignLeft ? 'align-left' : ''}\`}>
          {preview}
        </div>
      )}
      <pre className="cp-doc-code">{code}</pre>
    </div>
  );
}

/* CSS Token Doc Card */
function TokenDocCard({ token, desc, onCopy }) {
  const liveVal = useComputedVar(token);
  return (
    <div className="cp-doc-card" onClick={() => onCopy(token)} title="Click to copy token">
      <div className="cp-doc-header cp-token-header">
         <div>
           <span className="cp-doc-label" style={{ background: 'transparent', padding: 0, border: 'none'}}>{token}</span>
           <p className="cp-doc-title cp-token-title" style={{ marginTop: '0.4rem', textTransform: 'none' }}>{desc}</p>
         </div>
         <div className="cp-token-card-swatch" style={{ background: \`var(\${token})\` }} />
      </div>
      <pre className="cp-doc-code">
{`/* Active Theme Value */\\n\${token}: \${liveVal || '...'};`}
      </pre>
    </div>
  );
}

/* Section wrapper */
function Section({ title, children }) {
  return (
    <div className="cp-section">
      <div className="cp-section-title">{title}</div>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function ComponentsPreview() {
  const { dark, toggle } = useTheme();
  const toast = useToast();

  const copy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.show(\`Copied "\${text}"\`);
    }).catch(() => toast.show(\`Failed "\${text}"\`));
  };

  return (
    <div className="cp-root">

      <header className="cp-header">
        <span className="cp-logo">⬡ Design System Library</span>
        <button className="cp-theme-toggle" onClick={toggle}>
          <span>{dark ? '☀️' : '🌙'}</span>
          <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </header>

      <div className="cp-page">

        <div className="cp-intro">
          <div className="pill pill-primary" style={{ marginBottom: 'var(--space-4)' }}>
            v2.0 — Advanced Framework Reference
          </div>
          <h1 className="h1" style={{ marginBottom: 'var(--space-4)' }}>Theme & Component Library</h1>
          <p className="body-lg" style={{ maxWidth: 800 }}>
            Click any <span className="cp-doc-label">class-name</span> or <span className="cp-doc-label">--variable</span> card to copy it to the clipboard. Everything is modular and visually documented.
          </p>
        </div>

        {/* ══════════════════════════════
            SECTION 1 — Color Tokens
        ══════════════════════════════ */}
        <Section title="Color Tokens">
          <div className="cp-doc-grid">
            <TokenDocCard token="--color-bg" desc="Page background" onCopy={copy} />
            <TokenDocCard token="--color-bg-soft" desc="Subtle tinted fill" onCopy={copy} />
            <TokenDocCard token="--color-card" desc="Surface / card white" onCopy={copy} />
            <TokenDocCard token="--color-card-alt" desc="Alternate surface" onCopy={copy} />
          </div>
          <div className="cp-doc-grid">
            <TokenDocCard token="--color-primary" desc="Brand / indigo" onCopy={copy} />
            <TokenDocCard token="--color-primary-20" desc="Primary 20% alpha fill" onCopy={copy} />
            <TokenDocCard token="--color-secondary" desc="Pink / rose accent" onCopy={copy} />
            <TokenDocCard token="--color-border" desc="Default border" onCopy={copy} />
          </div>
          <div className="cp-doc-grid">
            <TokenDocCard token="--color-text" desc="Primary text" onCopy={copy} />
            <TokenDocCard token="--color-text-muted" desc="Body / muted text" onCopy={copy} />
            <TokenDocCard token="--color-success" desc="Emerald green label" onCopy={copy} />
            <TokenDocCard token="--color-danger" desc="Red / error label" onCopy={copy} />
          </div>
        </Section>

        {/* ══════════════════════════════
            SECTION 2 — Typography
        ══════════════════════════════ */}
        <Section title="Typography Variants">
          <div className="cp-doc-grid cp-doc-grid-cols-2">
            {[
              ['.h1', 'h1', 'Main Display Heading'],
              ['.h2', 'h2', 'Section Descriptor'],
              ['.h3', 'h3', 'Card Titles / Highlights'],
              ['.body-lg', 'p', 'Large introductory body paragraphs across headers.'],
              ['.body', 'p', 'Standard paragraph text used across the interface.'],
              ['.caption', 'p', 'Secondary metadata and helper descriptions.'],
            ].map(([cls, Tag, text]) => (
                 <DocCard 
                    key={cls} label={cls} title={Tag.toUpperCase()} 
                    alignLeft onCopy={copy}
                    preview={<Tag className={cls === '.body-lg' ? 'body-lg' : cls === '.body' ? 'body' : cls === '.caption' ? 'caption' : cls}>{text}</Tag>}
                 />
            ))}
          </div>
        </Section>

        <Section title="Typography Utilities">
           <div className="cp-doc-grid">
              <DocCard label=".text-primary" title="Brand Text" preview={<span className="text-primary font-bold">Colored Text</span>} onCopy={copy} />
              <DocCard label=".text-muted" title="Soft Text" preview={<span className="text-muted">Descriptive Subtext</span>} onCopy={copy} />
              <DocCard label=".text-gradient" title="Gradient Text" preview={<span className="text-gradient h3">Premium Flow</span>} onCopy={copy} />
           </div>
        </Section>


        {/* ══════════════════════════════
            SECTION 3 — Buttons
        ══════════════════════════════ */}
        <Section title="Action Buttons">
          <div className="cp-doc-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            <DocCard label=".btn .btn-primary" title="Primary Button" preview={<a className="btn btn-primary">Primary Action</a>} onCopy={copy} />
            <DocCard label=".btn .btn-secondary" title="Secondary Button" preview={<a className="btn btn-secondary">Secondary</a>} onCopy={copy} />
            <DocCard label=".btn .btn-outline" title="Outline Button" preview={<a className="btn btn-outline">Outlined</a>} onCopy={copy} />
            <DocCard label=".btn .btn-ghost" title="Ghost Button" preview={<a className="btn btn-ghost">Ghost Text</a>} onCopy={copy} />
          </div>
        </Section>

        {/* ══════════════════════════════
            SECTION 4 — Cards
        ══════════════════════════════ */}
        <Section title="Surfaces & Cards">
          <div className="cp-doc-grid">
            <DocCard label=".card-1" title="Main Surface" alignLeft preview={
               <div className="card-1 card-sm w-full"><span className="h5">Standard Card</span><p className="body-sm mt-2 text-muted">Primary surface layer.</p></div>
            } onCopy={copy} />
            <DocCard label=".card-2" title="Offset Surface" alignLeft preview={
               <div className="card-2 card-sm w-full"><span className="h5">Alt Surface</span><p className="body-sm mt-2 text-muted">Secondary block panel.</p></div>
            } onCopy={copy} />
            <DocCard label=".card-3" title="Tinted Box" alignLeft preview={
               <div className="card-3 card-sm w-full"><span className="h5">Tinted Panel</span><p className="body-sm mt-2 text-primary">Matches theme hue.</p></div>
            } onCopy={copy} />
          </div>
          
          <div className="cp-doc-grid">
            <DocCard label=".card-hover" title="Interaction Lifts" preview={
               <div className="card-1 card-md card-hover shadow-md"><span className="h6 text-primary">Hover This Frame</span></div>
            } onCopy={copy} />
            <DocCard label=".card-glass" title="Translucent Background" preview={
               <div className="card-glass card-md" style={{ background: 'var(--color-primary-20)'}}><span className="h6 text-gradient">Glass Morph Layer</span></div>
            } onCopy={copy} />
          </div>
        </Section>

        {/* ══════════════════════════════
            SECTION 5 — Pills, Tags & Badges
        ══════════════════════════════ */}
        <Section title="Pills & Tags">
          <div className="cp-doc-grid">
            <DocCard label=".pill" title="Base Tag" preview={<span className="pill">Base Tag</span>} onCopy={copy} />
            <DocCard label=".pill-primary" title="Brand Pill" preview={<span className="pill pill-primary">Alpha Mode</span>} onCopy={copy} />
            <DocCard label=".pill-secondary" title="Highlight Pill" preview={<span className="pill pill-secondary">Launch</span>} onCopy={copy} />
            <DocCard label=".pill-status" title="Status Signal" preview={<span className="pill pill-status ping-dot">Live Server</span>} onCopy={copy} />
          </div>
        </Section>

        {/* ══════════════════════════════
            SECTION 6 — Utilities & Shadows
        ══════════════════════════════ */}
        <Section title="Shadow Depths">
           <div className="cp-doc-grid">
              <DocCard label=".shadow-md" title="Standard Depth" preview={<div className="card-1 card-sm shadow-md">Lifted Content</div>} onCopy={copy} />
              <DocCard label=".shadow-lg" title="Hero Elevation" preview={<div className="card-1 card-sm shadow-lg">Floating Layout</div>} onCopy={copy} />
              <DocCard label=".shadow-glow" title="Neon Emitting" preview={<div className="card-2 card-sm shadow-glow text-primary">Glow Mode</div>} onCopy={copy} />
           </div>
        </Section>
        
        <Section title="Animation Modifiers">
           <div className="cp-doc-grid">
              <DocCard label=".animate-float" title="Slow Levitation" preview={<div className="card-1 card-sm animate-float">Floating Asset</div>} onCopy={copy} />
              <DocCard label=".shimmer" title="Loading Skeleton" preview={<div className="card-1 card-md shimmer w-full" />} onCopy={copy} />
              <DocCard label=".ping-dot" title="CSS Animated Radar" preview={<div className="pill pill-primary ping-dot">Radar Active</div>} onCopy={copy} />
           </div>
        </Section>

      </div>{/* /cp-page */}

      <div className={\`cp-toast\${toast.visible ? ' cp-toast--show' : ''}\`}>
        {toast.msg}
      </div>

    </div>
  );
}
`
fs.writeFileSync('src/pages/ComponentsPreview/ComponentsPreview.jsx', content);
