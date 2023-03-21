import './layout.css';
import { useReducer,useRef } from 'react';
import Addform from './Add-item';
import { fontSize } from '@mui/system';
import Delete from './Delete';
import Table from './Read';
import Update from './Update';
var initalstate={
    val1:0,
    val2:0,
    val3:0,
    val4:0,
};
function reducer(state,action) {
    if(action.lock==1)
    {
        return {
            val1:1,
            val2:0,
            val3:0,
            val4:0,
        };
    }
    if(action.lock==2)
    {
        return {
            val1:0,
            val2:1,
            val3:0,
            val4:0,
        };
    }
    if(action.lock==3)
    {
        return  {
            val1:0,
            val2:0,
            val3:1,
            val4:0,
        };
    }
    if(action.lock==4)
    {
        return {
            val1:0,
            val2:0,
            val3:0,
            val4:1,
        };
    }
}
var T=()=>{
var f=useRef();
var z=useRef();
const [state,dispatch]=useReducer(reducer,initalstate);
return (
<>
<div id='tst'>
    <div id='smtst'>
    <div style={{fontSize:'32px'}}>CRUD</div>
    <div onClick={()=>{dispatch({lock:1})}}>Add Item</div>
    <div onClick={()=>{dispatch({lock:2})}}>Delete Item</div>
    <div  onClick={()=>{dispatch({lock:3})}}>Read Item</div>
    <div  onClick={()=>{dispatch({lock:4})}}>Update Item</div>
    </div>
</div>
<div className='tt'>
{state.val1?<Addform></Addform>:''}
{state.val3?<Table></Table>:''}
{state.val2?<Delete></Delete>:''}
{state.val4?<Update></Update>:''}
</div>
</>)
}
export default T;