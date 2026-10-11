import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import CaseStudyTemplate from './pages/CaseStudyTemplate'
import DesignSystem from './pages/DesignSystem'
import Resume from './pages/Resume'
import Lab from './pages/Lab'
import VersionSwitcher from './components/VersionSwitcher'
import { versions } from './versions'
import { caseStudyVersions, liveCaseStudy } from './caseStudyVersions'

const isDev = import.meta.env.DEV

// Production surface is deliberately small: home, about, resume, the case
// studies. The component template and the design system
// reference are dev-only — a recruiter should never land on internal scaffolding.
export default function App() {
  return (
    <BrowserRouter>
      {isDev && <VersionSwitcher />}
      <Routes>
        {versions
          .filter((v) => isDev || !v.devOnly)
          .map((v) => (
            <Route key={v.path} path={v.path} element={<v.component />} />
          ))}
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />

        {/* Public case study routes. */}
        {caseStudyVersions.map((cs) => {
          const Live = liveCaseStudy(cs)
          return <Route key={cs.slug} path={cs.slug} element={<Live />} />
        })}

        {/* Old versioned URLs may already be shared or indexed — keep them alive. */}
        {caseStudyVersions.map((cs) => (
          <Route key={`${cs.slug}/v2`} path={`${cs.slug}/v2`} element={<Navigate to={cs.slug} replace />} />
        ))}
        <Route path="/v2" element={<Navigate to="/" replace />} />

        {isDev && (
          <>
            <Route path="/template" element={<CaseStudyTemplate />} />
            <Route path="/design-system" element={<DesignSystem />} />
            <Route path="/lab" element={<Lab />} />
          </>
        )}

        {/* Anything else goes home rather than rendering a blank page. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
