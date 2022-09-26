import { useEffect, useState} from 'react';
import '../scss/Projects.scss';
import * as port from "../firebase/portfolio"
import Project from '../components/Project';

export default function Projects({projects, setProjects}){

    

    useEffect(
        () => port.lireTout().then(
            theProjets => setProjects(theProjets)
        ), [setProjects]
    );


    return(
        <div className='Portfolio'>
            <h1>Projects</h1>
            <div className='Projects'>
                {
                    projects.map(project => <Project key={project.id} {...project} />)
                }
            </div>
        </div>
    )
}