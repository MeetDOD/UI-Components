import Navbar from "./components/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Navbar'
import Card from "./components/Card";
import Flip from "./components/Flip";
import Info from "./components/Info";
import Main from "./components/Main";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/nav" element={<Navbar/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/card" element={<Card/>} />
      <Route path="/flip" element={<Flip/>} />
      <Route path="/info" element={<Info/>} />
      <Route path="/footer" element={<Footer/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
