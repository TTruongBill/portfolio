import './Body.scss';
import { Button } from '@mui/material';

export default function Body(){
    return(
        <div className="body">
            <h2>Hello, I'm</h2>
            <h1>Tien Tien<br/>Truong</h1>
            <p>Website Designer</p>

            <Button variant="outlined" color='inherit'>HIRE ME</Button>
        </div>
    )
}