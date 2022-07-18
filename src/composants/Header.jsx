import './Header.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

export default function Header(){
    return(
        <div className='Head'>
            <section className='navApp'>
                <ul>
                    <a href=""><li>HOME</li></a>
                    <a href=""><li>ABOUT ME</li></a>
                    <a href=""><li>PROJECTS</li></a>
                    <a href=""><li>CONTACT</li></a>
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