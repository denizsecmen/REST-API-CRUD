import Button from '@mui/material/Button';
import './add.css';
import {useRef} from 'react';
export default function Addform()
{
    var y=useRef();
    var z=useRef();
    return(
        <form>
            <p>Data:</p>
            <input ref={y} type='text' className='data1'/>
            <br/>
            <p>Data2:</p>
            <input ref={z} type='text' className='data2'/>
            <br/>
            <div className='re'>
            <Button variant="contained" className='rr' sx={{mt:'1rem',ml:'7.0rem',mr:'1rem'}}  onClick={()=>{
            var xz={data1:y.current.value,data2:z.current.value};
            fetch('http://localhost:3001/',{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify(xz),
            })
            }} >Send</Button>
            <Button variant="contained" className='reset' sx={{mt:'1rem',mx:'1rex'}} color="secondary" onClick={()=>{
                z.current.value='';
                y.current.value='';
            }} >Reset</Button>
            </div>
        </form>
    )
}