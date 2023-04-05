import React, { useState } from 'react';
import B from './B'
import ContextData from './Context'
function A(){

    const[State,setState] = useState();
    const[bState,bsetState] = useState("Hey Nidhi from this side");
    let obj={
        namee:"nidhi",
        rollNo:234
    }
    let arr=[State,{obj}];
  return (<div>
    <h2>A Component</h2>
    <input type="text" id="input" placeholder="enter something " onChange={(e)=>{setState(e.target.value)}}/>
    <button onClick={()=>{bsetState(State)}}>Send</button>
    <hr/>
    
    <ContextData.Provider value={[State,bState]}>
    <B/>
    </ContextData.Provider>
     
  </div>)
 }
 export default A;