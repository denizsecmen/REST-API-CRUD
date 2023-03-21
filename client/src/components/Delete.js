import { useState,useEffect,useRef } from "react";
import Button from '@mui/material/Button';
import './delete.css';
var Delete=()=>{
    var syz=useRef();
    var [t,p]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/loaddata').then((result)=>result.json()
        ).then((resu)=>{console.log(resu);var v=JSON.parse(resu);p([...t,...v])})
    },[])
    return (
    <div >
    <div>Data 1:</div>
    <p></p>
    <select ref={syz}>
        {t.map(elem=><option>{elem.data1}</option>)}
    </select>
    <p></p>
    <Button variant="contained" className='reset' onClick={()=>{
        fetch('http://localhost:3001/deldata',{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({data1:syz.current.value}),
            }).then(()=>{window.location.reload(false);})
    }} sx={{mt:'1rem',mx:'1rex'}} color="secondary" >Delete</Button>
    </div>);
}
export default Delete;