import { useState } from "react"

const ToggleCard =(props)=>{
    const [show, setShow]= useState(true)
   return (
       <div style={{border:'1px solid', margin:'10px'}}>
           <h1>{props.title}</h1>
           <button onClick={()=> setShow(!show)}>toggle</button>
           <div className={show ? 'showcard':'hidecard'}>
               <p>props children here</p>
               {props.children}
           </div>
       </div>
   )
}

export default ToggleCard