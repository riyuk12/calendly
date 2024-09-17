import { useState } from "react"
import cn from 'classnames';

//"h-full w-auto overflow-hidden flex-[0.2] flex justify-center items-start gap-2 flex-col "
function App() {
  const [toggle,setToggle]=useState(false)
  return (
   <section className="h-[100vh] w-full flex items-center justify-center">
    <div className="absolute top-2 left-2 z-[50]" onClick={()=>{setToggle((prev)=>!prev)}}>
      menu button
    </div>
    <div className={cn(
      "h-full w-auto overflow-hidden flex justify-center items-start gap-2 flex-col transition-all duration-300"
      ,{ 'flex-[0.2]': toggle, 'flex-[0]': !toggle }
    )}>
     
        <li className=" text-2xl">Time Table</li>
        <li className=" text-2xl">Calender</li>
        <li className=" text-2xl">Settings</li>
      
    </div>
    <div className="h-full flex-1">
      main content is rendered here
    </div>
   </section>
  )
}

export default App
