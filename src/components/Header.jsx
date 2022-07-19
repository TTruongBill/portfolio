import './Header.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
export default function Header(){
    
    return(
        <div className='Head'>
            <section className='navApp'>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/aboutme">ABOUT ME</Link>
                    </li>
                    <li>
                        <Link to="/projects">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </section>
            <h1>T  I  E  N</h1>
            <section className='navSocial'>
                <ul>
                <a href="">
                    <IconButton color="inherit">
                        <InstagramIcon fontSize="large"/>
                    </IconButton>
                </a>
                    <a href=""><GitHubIcon fontSize="large"/></a>
                    <a href=""><LinkedInIcon fontSize="large"/></a>
                </ul>
            </section>
        </div>
    )
} 