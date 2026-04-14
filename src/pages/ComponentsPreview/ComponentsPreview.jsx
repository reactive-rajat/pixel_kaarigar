import React, { useState, useEffect, useRef } from 'react';
import './ComponentsPreview.css';

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
function useTheme() {
  // Sync with whatever the app already set, default to light
  const [dark, setDark] = useState(
    () => document.documentElement.dataset.theme === 'dark'
  );

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
  };

  // Keep in sync if the route was entered while app had a theme set
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

/* Chip — monospace clickable label */
function Chip({ label, onCopy }) {
  return (
    <span className="cp-chip" onClick={() => onCopy(label)} title="Click to copy">
      {label}
    </span>
  );
}

/* Token colour swatch row */
function TokenRow({ token, desc, onCopy, style = {} }) {
  return (
    <div className="cp-token-row" onClick={() => onCopy(token)}>
      <div
        className="cp-token-swatch"
        style={{ background: `var(${token})`, ...style }}
      />
      <div>
        <div className="cp-token-name">{token}</div>
        <div className="cp-token-val">{desc}</div>
      </div>
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
   Component
───────────────────────────────────────────── */
export default function ComponentsPreview() {
  const { dark, toggle } = useTheme();
  const toast = useToast();

  const copy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.show(`Copied "${text}"`);
    }).catch(() => {
      toast.show(`Copied "${text}"`);
    });
  };

  return (
    <div className="cp-root">

      {/* ── Sticky header ── */}
      <header className="cp-header">
        <span className="cp-logo">⬡ Pixel Kaarigar · Theme Library</span>
        <button className="cp-theme-toggle" onClick={toggle}>
          <span>{dark ? '☀️' : '🌙'}</span>
          <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </header>

      <div className="cp-page">

        {/* Intro */}
        <div className="cp-intro">
          <div className="pill pill-primary" style={{ marginBottom: 'var(--space-4)' }}>
            v1.0 — Design Token Library
          </div>
          <h1 className="h1" style={{ marginBottom: 'var(--space-4)' }}>Theme Library</h1>
          <p className="body-lg" style={{ maxWidth: 600 }}>
            Click any <span className="cp-chip">class-name</span> or <span className="cp-chip">--variable</span> to copy it to the clipboard. Everything is composable — mix <code>card-N</code> + size + hover freely.
          </p>
        </div>

        {/* ══════════════════════════════
            SECTION 1 — Color Tokens
        ══════════════════════════════ */}
        <Section title="Color Tokens — click to copy the var()">
          <div className="cp-token-grid">
            <TokenRow token="--color-bg"          desc="Page background"            onCopy={copy} style={{ border: '1px solid var(--color-border)' }} />
            <TokenRow token="--color-bg-soft"      desc="Subtle tinted fill"         onCopy={copy} />
            <TokenRow token="--color-card"         desc="Surface / card white"       onCopy={copy} style={{ border: '1px solid var(--color-border)' }} />
            <TokenRow token="--color-card-alt"     desc="Alternate surface"          onCopy={copy} />
            <TokenRow token="--color-primary"      desc="Brand / indigo"             onCopy={copy} />
            <TokenRow token="--color-primary-10"   desc="Primary 10% alpha fill"     onCopy={copy} />
            <TokenRow token="--color-primary-20"   desc="Primary 20% alpha fill"     onCopy={copy} />
            <TokenRow token="--color-primary-glow" desc="Primary glow (same as -20)" onCopy={copy} />
            <TokenRow token="--color-secondary"    desc="Pink / rose accent"         onCopy={copy} />
            <TokenRow token="--color-text"         desc="Primary text"               onCopy={copy} />
            <TokenRow token="--color-text-muted"   desc="Body / muted text"          onCopy={copy} />
            <TokenRow token="--color-text-label"   desc="Labels / tags"              onCopy={copy} />
            <TokenRow token="--color-border"       desc="Default border"             onCopy={copy} />
            <TokenRow token="--color-border-soft"  desc="Softer border (10% alpha)"  onCopy={copy} />
            <TokenRow token="--color-success"      desc="Emerald green"              onCopy={copy} />
            <TokenRow token="--color-success-bg"   desc="Success 10% tint"           onCopy={copy} />
            <TokenRow token="--color-danger"       desc="Red / error"                onCopy={copy} />
            <TokenRow token="--color-danger-bg"    desc="Danger 10% tint"            onCopy={copy} />
          </div>

          {/* RGB alpha pattern note */}
          <div className="cp-note">
            <div className="cp-note-label">Custom Alpha — use raw RGB channels</div>
            <code className="cp-code">rgba(var(--rgb-primary), 0.15)</code>
            <span className="cp-note-desc">→ available: --rgb-primary · --rgb-text · --rgb-success-val · --rgb-danger-val</span>
          </div>
        </Section>

        {/* ══════════════════════════════
            SECTION 2 — Typography
        ══════════════════════════════ */}
        <Section title="Typography">
          {/* Headings */}
          <div className="cp-col-wrap" style={{ marginBottom: 'var(--space-8)' }}>
            {[
              ['h1', 'h1', 'The quick brown fox'],
              ['h2', 'h2', 'The quick brown fox'],
              ['h3', 'h3', 'The quick brown fox jumps'],
              ['h4', 'h4', 'The quick brown fox jumps over the lazy dog'],
              ['h5', 'h5', 'The quick brown fox jumps over the lazy dog'],
              ['h6', 'h6', 'The quick brown fox jumps over the lazy dog'],
            ].map(([cls, tag, text]) => {
              const Tag = tag;
              return (
                <div key={cls} className="cp-demo-pair">
                  <Chip label={`.${cls}`} onCopy={copy} />
                  <Tag className={cls}>{text}</Tag>
                </div>
              );
            })}
          </div>

          {/* Body scales */}
          <div className="cp-col-wrap" style={{ marginBottom: 'var(--space-8)' }}>
            <div className="cp-demo-pair">
              <Chip label=".body-lg" onCopy={copy} />
              <p className="body-lg">Body large — lead paragraph text for section intros.</p>
            </div>
            <div className="cp-demo-pair">
              <Chip label=".body" onCopy={copy} />
              <p className="body">Body — standard paragraph. Used for all regular descriptive text throughout the interface.</p>
            </div>
            <div className="cp-demo-pair">
              <Chip label=".body-sm" onCopy={copy} />
              <p className="body-sm">Body small — secondary info, metadata, helper text.</p>
            </div>
            <div className="cp-demo-pair">
              <Chip label=".caption" onCopy={copy} />
              <p className="caption">Caption — timestamps, footnotes, small labels.</p>
            </div>
          </div>

          {/* Text colour utilities */}
          <div className="cp-row-wrap" style={{ marginBottom: 'var(--space-6)', gap: 'var(--space-6)', alignItems: 'center' }}>
            <span className="text-primary font-bold body">text-primary</span>
            <span className="text-muted body">text-muted</span>
            <span className="text-label body">text-label</span>
            <span className="text-success font-semibold body">text-success</span>
            <span className="text-danger font-semibold body">text-danger</span>
            <span className="h3 text-gradient">text-gradient</span>
          </div>
          <div className="cp-row-wrap" style={{ marginBottom: 'var(--space-4)' }}>
            {['.text-primary', '.text-muted', '.text-label', '.text-success', '.text-danger', '.text-gradient'].map(c => (
              <Chip key={c} label={c} onCopy={copy} />
            ))}
          </div>

          {/* Font weights */}
          <div className="cp-row-wrap" style={{ marginBottom: 'var(--space-4)', gap: 'var(--space-6)', alignItems: 'center' }}>
            <span className="font-normal body">font-normal</span>
            <span className="font-medium body">font-medium</span>
            <span className="font-semibold body">font-semibold</span>
            <span className="font-bold body">font-bold</span>
            <span className="font-black body">font-black</span>
          </div>
          <div className="cp-row-wrap">
            {['.font-normal', '.font-medium', '.font-semibold', '.font-bold', '.font-black'].map(c => (
              <Chip key={c} label={c} onCopy={copy} />
            ))}
          </div>
        </Section>

        {/* ══════════════════════════════
            SECTION 3 — Buttons
        ══════════════════════════════ */}
        <Section title="Buttons">
          {/* Variants */}
          <div className="cp-row-wrap" style={{ marginBottom: 'var(--space-6)' }}>
            <a className="btn btn-primary">btn btn-primary</a>
            <a className="btn btn-secondary">btn btn-secondary</a>
            <a className="btn btn-outline">btn btn-outline</a>
            <a className="btn btn-ghost">btn btn-ghost</a>
          </div>

          {/* Sizes */}
          <div className="cp-row-wrap" style={{ marginBottom: 'var(--space-6)', alignItems: 'center' }}>
            <a className="btn btn-primary btn-sm">Primary SM</a>
            <a className="btn btn-primary">Primary MD</a>
            <a className="btn btn-primary btn-lg">Primary LG</a>
          </div>
          <div className="cp-row-wrap" style={{ marginBottom: 'var(--space-4)' }}>
            <a className="btn btn-secondary btn-sm">Secondary SM</a>
            <a className="btn btn-outline btn-sm">Outline SM</a>
            <a className="btn btn-ghost btn-sm">Ghost SM</a>
          </div>

          {/* Chips */}
          <div className="cp-row-wrap" style={{ marginTop: 'var(--space-4)' }}>
            {['.btn', '.btn-primary', '.btn-secondary', '.btn-outline', '.btn-ghost', '.btn-sm', '.btn-lg'].map(c => (
              <Chip key={c} label={c} onCopy={copy} />
            ))}
          </div>
        </Section>

        {/* ══════════════════════════════
            SECTION 4 — Cards
        ══════════════════════════════ */}
        <Section title="Cards — compose: card-N + card-size + card-hover + shadow-*">
          {/* Row 1 — variants */}
          <div className="grid-3 gap-4" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="card-1 card-md">
              <div className="pill pill-primary" style={{ marginBottom: 'var(--space-3)' }}>card-1</div>
              <p className="h5" style={{ marginBottom: 'var(--space-2)' }}>Card variant 1</p>
              <p className="body-sm">White / solid card. The default surface for most content blocks.</p>
            </div>
            <div className="card-2 card-md">
              <div className="pill" style={{ marginBottom: 'var(--space-3)' }}>card-2</div>
              <p className="h5" style={{ marginBottom: 'var(--space-2)' }}>Card variant 2</p>
              <p className="body-sm">Alt grey surface. Good for sidebar items or secondary panels.</p>
            </div>
            <div className="card-3 card-md">
              <div className="pill pill-primary" style={{ marginBottom: 'var(--space-3)' }}>card-3</div>
              <p className="h5" style={{ marginBottom: 'var(--space-2)' }}>Card variant 3</p>
              <p className="body-sm">Soft tinted fill. Pairs well with glassmorphism contexts.</p>
            </div>
          </div>

          {/* Row 2 — modifiers */}
          <div className="grid-3 gap-4" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="card-1 card-md card-hover shadow-md">
              <p className="h5" style={{ marginBottom: 'var(--space-2)' }}>Hoverable Card</p>
              <p className="body-sm">Add <code>.card-hover</code> + <code>.shadow-md</code> — lifts on hover with glow.</p>
            </div>
            <div className="card-glass card-md">
              <p className="h5" style={{ marginBottom: 'var(--space-2)' }}>Glass Panel</p>
              <p className="body-sm">Use <code>.card-glass</code> over coloured or blurred backgrounds.</p>
            </div>
            <div className="card-1 card-lg shadow-lg">
              <p className="h5" style={{ marginBottom: 'var(--space-2)' }}>Large Padding Card</p>
              <p className="body-sm">Use <code>.card-lg</code> + <code>.shadow-lg</code> for hero-level sections.</p>
            </div>
          </div>

          <p className="caption" style={{ marginBottom: 'var(--space-4)' }}>
            <strong>Composability:</strong> <code>card-N</code> (background) + <code>card-sm/md/lg</code> (size) + <code>card-hover</code> (interaction) + <code>shadow-*</code> (depth)
          </p>

          {/* Chips */}
          <div className="cp-row-wrap">
            {['.card-1', '.card-2', '.card-3', '.card-glass', '+', '.card-sm', '.card-md', '.card-lg', '+', '.card-hover', '.shadow-sm', '.shadow-md', '.shadow-lg', '.shadow-glow'].map((c, i) =>
              c === '+' ? <span key={i} className="text-muted caption">+</span>
                        : <Chip key={c + i} label={c} onCopy={copy} />
            )}
          </div>
        </Section>

        {/* ══════════════════════════════
            SECTION 5 — Pills, Tags & Badges
        ══════════════════════════════ */}
        <Section title="Pills, Tags & Badges">
          <div className="cp-row-wrap" style={{ marginBottom: 'var(--space-4)' }}>
            <span className="pill">Default</span>
            <span className="pill pill-primary">Primary</span>
            <span className="pill pill-success">Success</span>
            <span className="pill pill-danger">Danger</span>
          </div>

          <div className="cp-row-wrap" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="status-badge">
              <span className="ping-dot">
                <span className="ping-inner"></span>
                <span className="ping-outer"></span>
              </span>
              Available for work
            </div>
          </div>

          <div className="cp-row-wrap">
            {['.pill', '.pill-primary', '.pill-success', '.pill-danger', '.status-badge', '.ping-dot', '.ping-inner', '.ping-outer'].map(c => (
              <Chip key={c} label={c} onCopy={copy} />
            ))}
          </div>
        </Section>

        {/* ══════════════════════════════
            SECTION 6 — Links
        ══════════════════════════════ */}
        <Section title="Links">
          <div className="cp-col-wrap" style={{ marginBottom: 'var(--space-6)' }}>
            <div className="cp-demo-pair">
              <Chip label=".link" onCopy={copy} />
              <a className="link" href="#">View all projects →</a>
            </div>
            <div className="cp-demo-pair">
              <Chip label=".link-underline" onCopy={copy} />
              <a className="link link-underline" href="#">Read full case study</a>
            </div>
            <div className="cp-demo-pair">
              <Chip label=".link-muted" onCopy={copy} />
              <a className="link link-muted" href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="cp-row-wrap">
            {['.link', '.link-underline', '.link-muted'].map(c => (
              <Chip key={c} label={c} onCopy={copy} />
            ))}
          </div>
        </Section>

        {/* ══════════════════════════════
            SECTION 7 — Spacing Scale
        ══════════════════════════════ */}
        <Section title="Spacing Scale">
          <div className="cp-col-wrap">
            <div className="cp-space-bars">
              {[
                ['--space-1',  '4px'],
                ['--space-2',  '8px'],
                ['--space-3',  '12px'],
                ['--space-4',  '16px'],
                ['--space-5',  '20px'],
                ['--space-6',  '24px'],
                ['--space-8',  '32px'],
                ['--space-10', '40px'],
                ['--space-12', '48px'],
                ['--space-16', '64px'],
                ['--space-20', '80px'],
              ].map(([token, px]) => (
                <div key={token} className="cp-space-row" onClick={() => copy(token)}>
                  <div className="cp-space-bar" style={{ width: `var(${token})` }} title={token} />
                  <span className="cp-chip" style={{ cursor: 'default' }}>{token}</span>
                  <span className="caption text-muted">{px}</span>
                </div>
              ))}
            </div>
            <p className="caption text-muted" style={{ marginTop: 'var(--space-2)' }}>
              Aliases: --space-xs (8px) · --space-sm (12px) · --space-md (20px) · --space-lg (32px) · --space-xl (48px)
            </p>
          </div>
        </Section>

        {/* ══════════════════════════════
            SECTION 8 — Radius Scale
        ══════════════════════════════ */}
        <Section title="Radius Scale">
          <div className="cp-row-wrap" style={{ alignItems: 'flex-start' }}>
            {[
              ['--radius-sm',   'sm',   '0.6rem'],
              ['--radius-md',   'md',   '1rem'],
              ['--radius-lg',   'lg',   '1.6rem'],
              ['--radius-xl',   'xl',   '2.5rem'],
              ['--radius-full', 'pill', '9999px'],
            ].map(([token, label, val]) => (
              <div
                key={token}
                className="cp-radius-box"
                style={{ borderRadius: `var(${token})` }}
                onClick={() => copy(token)}
                title={token}
              >
                <span>{label}</span>
                <span>{val}</span>
              </div>
            ))}
          </div>
          <p className="caption text-muted" style={{ marginTop: 'var(--space-3)' }}>
            --radius-sm · --radius-md · --radius-lg · --radius-xl · --radius-full
          </p>
        </Section>

        {/* ══════════════════════════════
            SECTION 9 — Shadows
        ══════════════════════════════ */}
        <Section title="Shadows">
          <div className="grid-3 gap-6" style={{ marginBottom: 'var(--space-4)' }}>
            {[
              ['.shadow-sm',   'shadow-sm'],
              ['.shadow-md',   'shadow-md'],
              ['.shadow-lg',   'shadow-lg'],
              ['.shadow-glow', 'shadow-glow'],
            ].map(([cls, label]) => (
              <div key={cls} className={`card-1 card-md ${cls.slice(1)}`} style={{ textAlign: 'center' }}>
                <p className="body-sm font-semibold">{label}</p>
              </div>
            ))}
          </div>
          <div className="cp-row-wrap">
            {['.shadow-sm', '.shadow-md', '.shadow-lg', '.shadow-glow'].map(c => (
              <Chip key={c} label={c} onCopy={copy} />
            ))}
          </div>
        </Section>

        {/* ══════════════════════════════
            SECTION 10 — Animations
        ══════════════════════════════ */}
        <Section title="Animations">
          <div className="cp-row-wrap" style={{ alignItems: 'center', marginBottom: 'var(--space-6)' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="card-1 card-md animate-float" style={{ width: 130 }}>
                <p className="caption text-muted">.animate-float</p>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="card-1 card-md shimmer" style={{ width: 160 }}>
                <p className="caption text-muted">.shimmer</p>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="status-badge animate-pulse-glow">
                <span className="ping-dot">
                  <span className="ping-inner"></span>
                  <span className="ping-outer"></span>
                </span>
                .animate-pulse-glow
              </div>
            </div>
          </div>
          <div className="cp-row-wrap">
            {['.animate-float', '.animate-pulse-glow', '.shimmer', '.transition', '.transition-fast'].map(c => (
              <Chip key={c} label={c} onCopy={copy} />
            ))}
          </div>
        </Section>

        {/* ══════════════════════════════
            SECTION 11 — Composition Example
        ══════════════════════════════ */}
        <Section title="Composition — Real Component (zero custom CSS)">
          <div className="card-1 card-lg card-hover shadow-md" style={{ maxWidth: 420 }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-4)' }}>
              <span className="pill pill-primary">Featured</span>
              <div className="status-badge">
                <span className="ping-dot">
                  <span className="ping-inner"></span>
                  <span className="ping-outer"></span>
                </span>
                Live
              </div>
            </div>
            <h3 className="h4" style={{ marginBottom: 'var(--space-3)' }}>Project Title Card</h3>
            <p className="body" style={{ marginBottom: 'var(--space-6)' }}>
              A real example composed entirely from library classes. No custom CSS needed for this component.
            </p>
            <div className="divider" style={{ marginBottom: 'var(--space-5)' }}></div>
            <div className="flex gap-3">
              <a className="btn btn-primary btn-sm">View Project</a>
              <a className="btn btn-outline btn-sm">Source</a>
            </div>
          </div>
          <p className="caption text-muted" style={{ marginTop: 'var(--space-4)' }}>
            Classes used: .card-1 .card-lg .card-hover .shadow-md · .flex-between · .pill .pill-primary · .status-badge .ping-dot · .h4 · .body · .divider · .flex .gap-3 · .btn .btn-primary .btn-sm · .btn-outline
          </p>
        </Section>

        {/* ══════════════════════════════
            SECTION 12 — Quick Reference
        ══════════════════════════════ */}
        <Section title="Quick Reference — All Class Names">
          <div className="cp-qr-grid">

            <div className="cp-qr-group">
              <div className="cp-qr-label">Typography</div>
              <div className="cp-row-wrap">
                {['.h1','.h2','.h3','.h4','.h5','.h6',
                  '.body-lg','.body','.body-sm','.caption',
                  '.text-primary','.text-muted','.text-label','.text-success','.text-danger','.text-gradient',
                  '.font-normal','.font-medium','.font-semibold','.font-bold','.font-black',
                  '.uppercase','.tracking-wide',
                ].map(c => <Chip key={c} label={c} onCopy={copy} />)}
              </div>
            </div>

            <div className="cp-qr-group">
              <div className="cp-qr-label">Buttons</div>
              <div className="cp-row-wrap">
                {['.btn','.btn-primary','.btn-secondary','.btn-outline','.btn-ghost','.btn-sm','.btn-lg'].map(c => (
                  <Chip key={c} label={c} onCopy={copy} />
                ))}
              </div>
            </div>

            <div className="cp-qr-group">
              <div className="cp-qr-label">Cards</div>
              <div className="cp-row-wrap">
                {['.card-1','.card-2','.card-3','.card-glass',
                  '.card-sm','.card-md','.card-lg',
                  '.card-hover',
                  '.shadow-sm','.shadow-md','.shadow-lg','.shadow-glow',
                ].map(c => <Chip key={c} label={c} onCopy={copy} />)}
              </div>
            </div>

            <div className="cp-qr-group">
              <div className="cp-qr-label">Pills &amp; Badges</div>
              <div className="cp-row-wrap">
                {['.pill','.pill-primary','.pill-success','.pill-danger','.status-badge','.ping-dot'].map(c => (
                  <Chip key={c} label={c} onCopy={copy} />
                ))}
              </div>
            </div>

            <div className="cp-qr-group">
              <div className="cp-qr-label">Links</div>
              <div className="cp-row-wrap">
                {['.link','.link-underline','.link-muted'].map(c => (
                  <Chip key={c} label={c} onCopy={copy} />
                ))}
              </div>
            </div>

            <div className="cp-qr-group">
              <div className="cp-qr-label">Layout</div>
              <div className="cp-row-wrap">
                {['.container','.container-md','.section','.section-sm',
                  '.flex','.flex-col','.flex-center','.flex-between',
                  '.grid-2','.grid-3',
                  '.gap-2','.gap-3','.gap-4','.gap-5','.gap-6','.gap-8',
                  '.divider',
                ].map(c => <Chip key={c} label={c} onCopy={copy} />)}
              </div>
            </div>

            <div className="cp-qr-group">
              <div className="cp-qr-label">Animations</div>
              <div className="cp-row-wrap">
                {['.animate-float','.animate-pulse-glow','.shimmer','.transition','.transition-fast'].map(c => (
                  <Chip key={c} label={c} onCopy={copy} />
                ))}
              </div>
            </div>

          </div>
        </Section>

      </div>{/* /cp-page */}

      {/* Toast */}
      <div className={`cp-toast${toast.visible ? ' cp-toast--show' : ''}`}>
        {toast.msg}
      </div>

    </div>
  );
}
