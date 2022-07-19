import './App.scss';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Nopage from '../pages/Nopage';

export default function App() {

  return (
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
      </div>
  );
}
