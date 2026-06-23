import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

/* ── Token Data ── */

const colors = [
  { token: 'dark', value: '#1D1D1D', usage: 'Page background, overlays' },
  { token: 'light', value: '#FFFFFF', usage: 'Primary text, headings' },
  { token: 'grey', value: '#BBBBBB', usage: 'Secondary text, labels, meta' },
  { token: 'accent', value: '#F3FFAB', usage: 'Accent highlights, interactive elements, borders' },
  { token: 'blue', value: '#78ADC4', usage: 'Reserved — links, secondary accent' },
]

const opacities = [
  { className: 'text-light/80', usage: 'Body text', preview: 'rgba(255,255,255,0.8)' },
  { className: 'text-light/70', usage: 'Supporting body text', preview: 'rgba(255,255,255,0.7)' },
  { className: 'text-light/50', usage: 'Muted text, captions', preview: 'rgba(255,255,255,0.5)' },
  { className: 'text-grey/40', usage: 'Dividers, separators', preview: 'rgba(187,187,187,0.4)' },
  { className: 'border-white/10', usage: 'Section borders, card borders', preview: 'rgba(255,255,255,0.1)' },
]

const typography = [
  { token: 'title-xl', size: '136px', lineHeight: '1.05', tracking: '-0.04em', font: 'Times New Roman, italic', usage: 'Hero display (homepage)' },
  { token: 'title-lg', size: '84px', lineHeight: '1.1', tracking: '-0.05em', font: 'Times New Roman, italic', usage: 'Case study titles' },
  { token: 'title-md', size: '52px', lineHeight: '1.1', tracking: '-0.04em', font: 'Times New Roman, italic', usage: 'Section headings, large' },
  { token: 'title-sm', size: '32px', lineHeight: '1.1', tracking: '-0.04em', font: 'Times New Roman, italic', usage: 'Statements, pull quotes, HMW' },
  { token: 'body-lg', size: '26px', lineHeight: '1.4', tracking: 'normal', font: 'Neue Montreal', usage: 'Section headings (body font)' },
  { token: 'body-md', size: '20px', lineHeight: '1.4', tracking: 'normal', font: 'Neue Montreal', usage: 'Body text, paragraphs' },
  { token: 'body-sm', size: '16px', lineHeight: '1.5', tracking: 'normal', font: 'Neue Montreal', usage: 'Labels, captions, meta, tags' },
  { token: 'label', size: '12px', lineHeight: '1', tracking: '0.12em', font: 'Neue Montreal, medium', usage: 'Section labels, uppercase tags' },
]

const spacing = [
  { token: 's', value: '8px', usage: 'Tight gaps (inline elements)' },
  { token: 'm', value: '16px', usage: 'Default inner padding' },
  { token: 'l', value: '24px', usage: 'Card gaps, grid gaps' },
  { token: 'xl', value: '32px', usage: 'Page horizontal padding' },
  { token: 'xxl', value: '64px', usage: 'Section vertical padding, large gaps' },
]

const radii = [
  { token: 'card', value: '80px', usage: 'Hero images, large content images' },
  { token: 'xxl', value: '64px', usage: 'Highlight sections' },
  { token: 'xl2', value: '32px', usage: 'Medium rounded elements' },
  { token: 'panel', value: '16px', usage: 'Cards, callouts' },
  { token: 'xl', value: '12px (Tailwind default)', usage: 'Phone screens, review cards, toggle cards' },
  { token: 'pill', value: '9999px', usage: 'Tags, buttons, pills' },
]

const components = [
  { name: '.section-label', css: 'font-body text-label font-medium uppercase tracking-[0.1em] text-grey', usage: 'Section labels above content' },
  { name: '.tag-default', css: 'border-grey text-grey rounded-full px-4 py-2', usage: 'Meta tags, filter pills' },
  { name: '.tag-accent', css: 'border-accent text-accent rounded-full px-4 py-2', usage: 'Active/highlighted tags' },
  { name: '.btn-primary', css: 'border-light text-light rounded-full px-8 py-4 hover:bg-light hover:text-dark', usage: 'Primary actions' },
  { name: '.btn-accent', css: 'border-accent text-accent rounded-full px-8 py-4 hover:bg-accent hover:text-dark', usage: 'Accent actions' },
]

/* ── Helpers ── */

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="flex flex-col gap-2 pb-8 border-b border-white/10">
      <h2 className="font-title-italic text-title-sm text-light">{children}</h2>
    </div>
  )
}

/* ── Page ── */

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-dark text-light">
      <Nav />

      <section className="px-xl pt-[160px] pb-[80px] max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-4">
          <Link to="/" className="font-body text-body-sm text-grey hover:text-light transition-colors inline-flex items-center gap-2 w-fit">
            ← Zurück
          </Link>
          <h1 className="font-title-italic text-title-lg leading-[1.05] tracking-[-0.04em] text-light">Design System</h1>
          <p className="font-body text-body-md text-light/50">Tokens, Typografie, Farben, Abstände — Single Source of Truth für das gesamte Portfolio.</p>
        </div>
      </section>

      <div className="px-xl max-w-[1400px] mx-auto pb-[120px] flex flex-col gap-xxl">

        {/* ── Colors ── */}
        <section className="flex flex-col gap-8">
          <SectionTitle>Farben</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {colors.map((c) => (
              <div key={c.token} className="flex flex-col gap-4">
                <div className="w-full aspect-square rounded-panel border border-white/10" style={{ backgroundColor: c.value }} />
                <div className="flex flex-col gap-1">
                  <span className="font-body text-body-sm font-medium text-light">{c.token}</span>
                  <span className="font-body text-body-sm text-grey font-mono">{c.value}</span>
                  <span className="font-body text-body-sm text-light/50">{c.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Opacities ── */}
        <section className="flex flex-col gap-8">
          <SectionTitle>Opazitäten</SectionTitle>
          <div className="flex flex-col gap-4">
            {opacities.map((o) => (
              <div key={o.className} className="grid grid-cols-[200px_1fr_1fr] gap-4 items-center py-3 border-b border-white/5">
                <code className="font-body text-body-sm text-accent font-mono">{o.className}</code>
                <span className="font-body text-body-sm" style={{ color: o.preview }}>Beispieltext in dieser Opazität</span>
                <span className="font-body text-body-sm text-light/50">{o.usage}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Typography ── */}
        <section className="flex flex-col gap-8">
          <SectionTitle>Typografie</SectionTitle>
          <div className="flex flex-col gap-0">
            {typography.map((t) => {
              const isTitle = t.token.startsWith('title')
              return (
                <div key={t.token} className="flex flex-col gap-4 py-8 border-b border-white/5">
                  <div className="flex flex-wrap items-baseline gap-4">
                    <code className="font-body text-body-sm text-accent font-mono">{t.token}</code>
                    <span className="font-body text-body-sm text-grey">{t.size} · {t.lineHeight} · {t.tracking}</span>
                  </div>
                  <p
                    className={isTitle ? 'font-title-italic text-light' : 'font-body text-light'}
                    style={{
                      fontSize: t.size,
                      lineHeight: t.lineHeight,
                      letterSpacing: t.tracking === 'normal' ? undefined : t.tracking,
                    }}
                  >
                    {isTitle ? 'Sensor-Ökosystem' : 'Defekte Bodenstäbe erzeugen plausible Messwerte.'}
                  </p>
                  <span className="font-body text-body-sm text-light/50">{t.font} — {t.usage}</span>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Font Families ── */}
        <section className="flex flex-col gap-8">
          <SectionTitle>Schriftfamilien</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl">
            <div className="flex flex-col gap-4">
              <p className="font-title-italic text-title-sm text-light">Times New Roman</p>
              <p className="font-body text-body-sm text-grey">Titel, Statements, Pull Quotes. Immer kursiv.</p>
              <p className="font-title-italic text-body-lg text-light/70">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
              <p className="font-title-italic text-body-lg text-light/70">0 1 2 3 4 5 6 7 8 9</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-body text-title-sm font-medium text-light">Neue Montreal</p>
              <p className="font-body text-body-sm text-grey">Body, Labels, UI-Elemente. Regular (400) + Medium (500).</p>
              <p className="font-body text-body-lg text-light/70">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
              <p className="font-body text-body-lg text-light/70 font-medium">Aa Bb Cc (Medium)</p>
            </div>
          </div>
        </section>

        {/* ── Spacing ── */}
        <section className="flex flex-col gap-8">
          <SectionTitle>Abstände</SectionTitle>
          <div className="flex flex-col gap-0">
            {spacing.map((s) => (
              <div key={s.token} className="grid grid-cols-[80px_100px_1fr_1fr] gap-4 items-center py-4 border-b border-white/5">
                <code className="font-body text-body-sm text-accent font-mono">{s.token}</code>
                <span className="font-body text-body-sm text-grey font-mono">{s.value}</span>
                <div className="flex items-center">
                  <div className="h-4 bg-accent/30 rounded-[2px]" style={{ width: s.value }} />
                </div>
                <span className="font-body text-body-sm text-light/50">{s.usage}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Border Radius ── */}
        <section className="flex flex-col gap-8">
          <SectionTitle>Border Radius</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-l">
            {radii.map((r) => {
              const radiusMap: Record<string, string> = {
                card: '80px', xxl: '64px', xl2: '32px', panel: '16px', xl: '12px', pill: '9999px',
              }
              return (
                <div key={r.token} className="flex flex-col gap-3 items-center">
                  <div
                    className="w-24 h-24 border border-accent/40 bg-accent/5"
                    style={{ borderRadius: radiusMap[r.token] || '0px' }}
                  />
                  <code className="font-body text-body-sm text-accent font-mono">{r.token}</code>
                  <span className="font-body text-body-sm text-grey text-center">{r.value}</span>
                  <span className="font-body text-body-sm text-light/50 text-center">{r.usage}</span>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Component Classes ── */}
        <section className="flex flex-col gap-8">
          <SectionTitle>Komponenten-Klassen</SectionTitle>
          <div className="flex flex-col gap-0">
            {components.map((c) => (
              <div key={c.name} className="flex flex-col gap-3 py-6 border-b border-white/5">
                <div className="flex flex-wrap items-baseline gap-4">
                  <code className="font-body text-body-sm text-accent font-mono">{c.name}</code>
                  <span className="font-body text-body-sm text-light/50">{c.usage}</span>
                </div>
                <code className="font-body text-body-sm text-grey/60 font-mono break-all">{c.css}</code>
                {/* Live preview */}
                {c.name === '.section-label' && <span className="section-label mt-2">Section Label</span>}
                {c.name === '.tag-default' && (
                  <div className="flex gap-2 mt-2">
                    <span className="tag-default">UI/UX</span>
                    <span className="tag-default">Design System</span>
                  </div>
                )}
                {c.name === '.tag-accent' && (
                  <div className="flex gap-2 mt-2">
                    <span className="tag-accent">Aktiv</span>
                  </div>
                )}
                {c.name === '.btn-primary' && <button className="btn-primary w-fit mt-2">Primary Button</button>}
                {c.name === '.btn-accent' && <button className="btn-accent w-fit mt-2">Accent Button</button>}
              </div>
            ))}
          </div>
        </section>

        {/* ── Tailwind Token Reference ── */}
        <section className="flex flex-col gap-8">
          <SectionTitle>Tailwind Token-Referenz</SectionTitle>
          <p className="font-body text-body-md text-light/50">
            Alle Tokens sind in <code className="text-accent font-mono">tailwind.config.ts</code> definiert. Änderungen dort wirken sich auf alle Komponenten aus.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-l">
            <div className="border border-white/10 rounded-panel p-6 flex flex-col gap-3">
              <span className="font-body text-body-sm font-medium text-accent">Farben ändern</span>
              <code className="font-body text-body-sm text-grey/70 font-mono whitespace-pre">{'theme.extend.colors.accent'}</code>
              <span className="font-body text-body-sm text-light/50">Ändert Akzentfarbe global</span>
            </div>
            <div className="border border-white/10 rounded-panel p-6 flex flex-col gap-3">
              <span className="font-body text-body-sm font-medium text-accent">Schriftgrößen ändern</span>
              <code className="font-body text-body-sm text-grey/70 font-mono whitespace-pre">{'theme.extend.fontSize'}</code>
              <span className="font-body text-body-sm text-light/50">Golden-Ratio-Scale, base 16px</span>
            </div>
            <div className="border border-white/10 rounded-panel p-6 flex flex-col gap-3">
              <span className="font-body text-body-sm font-medium text-accent">Abstände ändern</span>
              <code className="font-body text-body-sm text-grey/70 font-mono whitespace-pre">{'theme.extend.spacing'}</code>
              <span className="font-body text-body-sm text-light/50">s / m / l / xl / xxl</span>
            </div>
            <div className="border border-white/10 rounded-panel p-6 flex flex-col gap-3">
              <span className="font-body text-body-sm font-medium text-accent">Radii ändern</span>
              <code className="font-body text-body-sm text-grey/70 font-mono whitespace-pre">{'theme.extend.borderRadius'}</code>
              <span className="font-body text-body-sm text-light/50">card / panel / pill / xxl / xl2</span>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  )
}
