import './Header.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
export default function Header(){

    function addClass(e){
        let Home = document.querySelector("." + {e});
        Home.style.animationName = "none";

        requestAnimationFrame(() => {
            Home.style.animationName = "";
        });
    }
    return(
        <div className='Head'>
            <nav className='navApp'>
                <ul>
                    <li>
                        <Link to="/" onClick={home => addClass(home)}>HOME</Link>
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
            </nav>
            <h1>T  I  E  N</h1>
            <nav className='navSocial'>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/k1polo/">
                            <IconButton color="inherit">
                                <InstagramIcon fontSize="large"/>
                            </IconButton>
                        </a>        
                    </li>
                    <li>
                        <a href="https://github.com/k1polo">
                            <IconButton color="inherit">
                                <GitHubIcon fontSize="large"/>
                            </IconButton>
                        </a>
                    </li>    
                    <li>
                        <a href="https://www.linkedin.com/in/tien-tien-3392a3240/">
                            <IconButton color="inherit">
                                <LinkedInIcon fontSize="large"/>
                            </IconButton>
                        </a>
                    </li>       
                </ul>
            </nav>
        </div>
    )
} 