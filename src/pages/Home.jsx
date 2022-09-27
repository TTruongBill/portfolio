import '../scss/Home.scss';
import { Button } from '@mui/material';

export default function Home(){
    
    return(
        <div className="home">
            <div className="home-left">
                <section>
                    <h2 className="hello">Bonjour, je suis</h2>
                    <h1>Tien Tien<br/>Truong</h1>
                    <p>Développeur Web</p>
                </section>
                <section className='buttonMe'>
                    <Button variant="outlined" color='inherit'>HIRE ME</Button>
                </section>
            </div>
            <div className="home-right">
                <h2>placeholder</h2>
            </div>
        </div>
        
    )
}