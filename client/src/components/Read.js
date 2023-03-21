import './update.css'
import { useEffect,useState } from 'react';
var Table=()=>{
    var [t,p]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/loaddata').then((result)=>result.json()
        ).then((resu)=>{console.log(resu);var v=JSON.parse(resu);p([...t,...v])})
    },[])
    return <div className='ee'>{t.map(elem=>
    <div >
        <p>Data:{elem.data1}</p>
        <p>Data2:{elem.data2}</p>
        <div>=============================</div>
    </div>)}</div>
}
export default Table;