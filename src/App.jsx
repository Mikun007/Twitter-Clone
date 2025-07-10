import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Nav from '../components/NavBar';
import RightSide from '../components/RightSide';

function App() {

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <Nav />
        
        <div className='displaySide' style={{ flex: 1, overflowY: "scroll", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} /> 
          </Routes>
          
        </div>
        
      </div>
      
    </Router>
  )
}

export default App
