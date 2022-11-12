import './App.scss';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NoPage from '../pages/NoPage';
import {useState} from 'react';

export default function App() {
  const [projects, setProjects] = useState([]);

  return (
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Home projects={projects} setProjects={setProjects}/>} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Projects" element={<Projects projects={projects} setProjects={setProjects}/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
      </div>
  );
}