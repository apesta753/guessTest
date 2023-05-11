// JavaScript Document

import { useState } from "react";


function StateForm()
{
    const [currState, setCurrState] = useState('')
    var s = ["Mass", "Conn"]
    const [states, setStates] = useState(s)
    
    function handleNewState(e)
    {
        e.preventDefault();
        //alert(currState);
        setStates((st)=>[...st,currState])
        setCurrState('');
    }
    
    return (
    <>
        <form>
        Add a state you have visited: 
          <input type='text' name="newState" value={currState} onChange={(e) => setCurrState(e.target.value)}/><br /><br />
        <button onClick={(e)=>handleNewState(e)}>Add State</button>
        </form>
        <hr />
        <ul className='state-list'>
            {states.map((st, i)=><li key={i}>{st}</li>)}
        </ul>
    </>
    );
}

export function MyApp()
{
		return <StateForm />; 
}
