import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import ClearIcon from "@mui/icons-material/Clear";
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
            <input type="checkbox" id="menu"/>
            <label htmlFor="menu"> <MenuIcon className='menuIcon' fontSize='large'></MenuIcon> </label>
            <div className='menu'>
                <section className="top">
                <h1>Other pages</h1>
                <label htmlFor="menu"><ClearIcon className='clearIcon'fontSize='large'></ClearIcon></label>
                </section>
                <nav className='navAppMobile'>
                    <ul>
                        <li>
                            <Link to="/" onClick={home => addClass(home)}>Accueil</Link>
                        </li>
                        <li>
                            <Link to="/projects">À propos</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projets</Link>
                        </li>
                        <li>
                            <Link to="/projects">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <nav className='navSocialMobile'>
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
                        <a href="https://www.linkedin.com/in/tien-tien-truong/">
                            <IconButton color="inherit">
                                <LinkedInIcon fontSize="large"/>
                            </IconButton>
                        </a>
                    </li>       
                </ul>
                </nav>
            </div>
            <div className='navDesktop'>
                <nav className='navApp'>
                    <ul>
                        <li>
                            <Link to="/" onClick={home => addClass(home)}>ACCUEIL</Link>
                        </li>
                        <li>
                            <Link to="/projects">À PROPOS</Link>
                        </li>
                        <li>
                            <Link to="/projects">PROJETS</Link>
                        </li>
                        <li>
                            <Link to="/projects">CONTACT</Link>
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
                            <a href="https://www.linkedin.com/in/tien-tien-truong/">
                                <IconButton color="inherit">
                                    <LinkedInIcon fontSize="large"/>
                                </IconButton>
                            </a>
                        </li>       
                    </ul>
                </nav>
            </div>
           
        </div>
    )
} 