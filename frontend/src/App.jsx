import { BrowserRouter, Routes, Route } from 'react-router-dom' 


// Pages and Components
import Home from './pages/Home'
import Reports from './pages/Reports'
import Navbar from './components/bars/Navbar'

function App() {
  return (
    <>
      <div className='App'>
          <BrowserRouter>
            <Navbar />
            <div className="pages">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Reports" element={<Reports />} />
              </Routes> 
            </div> 
          </BrowserRouter> 
      </div>
      
    </>
  )
}

export default App
