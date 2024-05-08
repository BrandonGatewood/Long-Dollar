import { BrowserRouter, Routes, Route } from 'react-router-dom' 


// Pages and Components
import Home from './pages/Home'
import History from './pages/History'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div className='App'>
          <BrowserRouter>
            <Navbar />
            <div className="pages">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/History" element={<History />} />
              </Routes> 
            </div> 
          </BrowserRouter> 
      </div>
      
    </>
  )
}

export default App
