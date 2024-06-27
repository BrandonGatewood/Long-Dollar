import { BrowserRouter, Routes, Route } from 'react-router-dom' 


// Pages and Components
import Home from './pages/Home'
import Reports from './pages/Reports'
import Navbar from './components/bars/Navbar'
import TopBar from './components/bars/TopBar'

function App() {
  return (
    <>
      <div className='App'>
          <BrowserRouter>
            <TopBar />
            <div className="pages">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Reports" element={<Reports />} />
              </Routes> 
            </div> 
            <Navbar />
          </BrowserRouter> 
      </div>
      
    </>
  )
}

export default App
