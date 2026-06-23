import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import CaseStudyFyta from './pages/CaseStudyFyta'
import CaseStudyProbe from './pages/CaseStudyProbe'
import CaseStudyThesis from './pages/CaseStudyThesis'
import CaseStudyTemplate from './pages/CaseStudyTemplate'
import DesignSystem from './pages/DesignSystem'
import HomeV2 from './pages/HomeV2'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/v2" element={<HomeV2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/projekte/fyta-sensor-onboarding" element={<CaseStudyFyta />} />
        <Route path="/projekte/soil-probe-diagnostic" element={<CaseStudyProbe />} />
        <Route path="/projekte/inklusive-lern-app" element={<CaseStudyThesis />} />
        <Route path="/template" element={<CaseStudyTemplate />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
    </BrowserRouter>
  )
}
