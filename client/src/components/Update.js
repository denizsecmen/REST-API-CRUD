import './uspdate.css';
import Button from '@mui/material/Button';
import { useState,useRef,useEffect } from "react";
var Update=()=>{
    var [t,p]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/loaddata').then((result)=>result.json()
        ).then((resu)=>{console.log(resu);var v=JSON.parse(resu);p([...t,...v])});
    },[])
    var z=useRef();
    var r=useRef();
    var x=useRef();
    return (
        <div>
            <p>Select Data1:</p>
            <select ref={x}>
                {t.map((elem)=><option>{elem.data1}</option>)}
            </select>
            <p>New Data1:</p>
            <input type='text' ref={z} className='r'></input>
            <p>New Data2</p>
            <input type='text' ref={r} className='z'></input>
            <br/>
            <Button variant="contained" 
             className='rr' sx={{mt:'1rem',ml:'0rem',mr:'1rem'}}  onClick={()=>{fetch('http://localhost:3001/update',{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({datax:x.current.value,data1:z.current.value,data2:r.current.value})})}} >Update</Button>
        </div>
    )
}
export default Update;