import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import CaseStudyTemplate from './pages/CaseStudyTemplate'
import DesignSystem from './pages/DesignSystem'
import Resume from './pages/Resume'
import Lab from './pages/Lab'
import VersionSwitcher from './components/VersionSwitcher'
import { versions } from './versions'
import { caseStudyVersions } from './caseStudyVersions'

export default function App() {
  return (
    <BrowserRouter>
      {import.meta.env.DEV && <VersionSwitcher />}
      <Routes>
        {versions.map((v) => (
          <Route key={v.path} path={v.path} element={<v.component />} />
        ))}
        <Route path="/about" element={<About />} />
        {caseStudyVersions.map((cs) => (
          <Route key={cs.slug} path={cs.slug} element={<cs.v1 />} />
        ))}
        {caseStudyVersions
          .filter((cs): cs is typeof cs & { v2: NonNullable<typeof cs.v2> } => Boolean(cs.v2))
          .map((cs) => {
            const V2 = cs.v2
            return <Route key={`${cs.slug}/v2`} path={`${cs.slug}/v2`} element={<V2 />} />
          })}
        <Route path="/resume" element={<Resume />} />
        <Route path="/template" element={<CaseStudyTemplate />} />
        <Route path="/design-system" element={<DesignSystem />} />
        {import.meta.env.DEV && <Route path="/lab" element={<Lab />} />}
      </Routes>
    </BrowserRouter>
  )
}
