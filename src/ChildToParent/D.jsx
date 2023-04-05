import React, { useContext, useState } from 'react';
 import contextData from './Contextt';
function D(){
 const {setDa}=useContext(contextData);
 const [val,setValue]=useState();
  return (<div>
    <h2>D Component</h2>
    <input type="text" placeholder='enter something' onChange={(e)=>{setValue(e.target.value)}}/>
    <button onClick={()=>{setDa(val)}}>Send</button>  
    
   
   
  </div>)
 }

 export default D;