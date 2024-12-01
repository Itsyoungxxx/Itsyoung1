import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Propos from './pages/Propos/ProposIndex'
import Programme from './pages/Programme/ProgrammeIndex'
import Opportunites from './pages/Opportunites/OpportunitesIndex'
import Infos from './pages/Infos/InfosIndex'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Propos />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/opportunites" element={<Opportunites />} />
          <Route path="/infos" element={<Infos />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App


