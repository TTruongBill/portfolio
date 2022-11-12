import '../scss/Home.scss';
import { Link } from 'react-router-dom';
import * as port from "../firebase/portfolio"
import { useEffect, useState} from 'react';
import Project from '../components/ProjectMain';

export default function Home({projects, setProjects}){
    useEffect(
        () => port.lireTout().then(
            theProjets => setProjects(theProjets)
        ), [setProjects]
    );
    return(
        <div className="home">
            <div className="home-left">
                <section>
                    <h2 className="hello">Bonjour, je suis</h2>
                    <h1>Tien Tien<br/>Truong</h1>
                    <p>Un développeur web junior qui aime la technologie.</p>
                    <Link to="/projects">Savoir plus &gt;</Link>
                </section>
            </div>
            <section className='home-projects'>
                <h1>Ce que je fais</h1>
                <div className='ProjectsHome'>
                {
                    projects.map(project => <Project key={project.id} {...project} />)
                }
                </div>
                <Link to="/projects">Savoir plus &gt;</Link>
            </section>
        </div>
        
    )
}