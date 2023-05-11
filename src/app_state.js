// JavaScript Document

import { useState } from "react";

export function MyApp()
{
		const [val, setVal] = useState("0");
		return (  
			<>
				<p>The count is: {val}</p>
				<button onClick= {()=>setVal(parseInt(val)+1)}>Press Me</button>
			</>
		);  // end return 
}