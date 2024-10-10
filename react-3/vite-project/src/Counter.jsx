import React, { useState } from 'react'

function Counter() {

    const [count,setCount] = useState(0)

  
    return (

    <div>
   
   <h1>Counter: {count}</h1>

     <button onClick={() => setCount((count) => count + 1)}>+</button>

     <button onClick={() => setCount(0)}>0</button>

     <button onClick={() => setCount((count) => count - 1)}>_</button>

     
     
     </div>  
    )
}

export default Counter
