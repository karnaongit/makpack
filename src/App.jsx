import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import SmoothScroll from './components/common/SmoothScroll'
import Home from './pages/Home'
import Products from './pages/Products'
import Sustainability from './pages/Sustainability'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <Toaster position="bottom-right" />
          {/* Grain texture overlay */}
          <div className="grain-overlay" />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App