import React, { useContext } from 'react';

import ContextData from './Context';
function D(){
   let  [State,bState]=useContext(ContextData); 
  
  return (<div>
    <h2>D Component</h2>
    <p style={{color:"blue"}}>Data1 received from A : {State}</p>
    <p style={{color:"red"}}>Data2 received from A : {bState}</p>


  </div>)
 }
 export default D;