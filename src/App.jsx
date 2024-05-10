
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Games from './components/Games'
import Winners from './components/Winners'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from "./components/Register"


function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Routes>
       <Route>
       <Route path="/" element={<Home />}></Route>
       <Route path="/games" element={<Games />}></Route>
       <Route path="/winners" element={<Winners />}></Route>
       <Route path="/about" element={<About />}></Route>
       <Route path="/contact" element={<Contact />}></Route>
       <Route path="/Login" element={<Login />}></Route>
       <Route path="/Register" element={<Register />}></Route> 
       </Route>
       </Routes>
      <Footer />
    </Router>
   </>
    
   
  )
}

export default App
