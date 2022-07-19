import './Home.scss';
import { Button } from '@mui/material';

export default function Home(){
    return(
        <div className="home">
            <section>
                <h2 className="hello">Hello, I'm</h2>
                <h1>Tien Tien<br/>Truong</h1>
                <p>Freelance Web Developper</p>
            </section>
            <section className='buttonMe'>
                <Button variant="outlined" color='inherit'>HIRE ME</Button>
            </section>
        </div>
    )
}