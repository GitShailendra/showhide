import { useState } from "react";
import "./App.css";

function App() {
   const[pwd,setPwd]=useState("")
   const [isPwd,setIsPwd] = useState(false)

  return (
    <>

    <input type={isPwd ? "text":"password"} value={pwd} onChange={e=>setPwd(e.target.value)}/>
    <button onClick={()=>setIsPwd(!isPwd)}>
      {isPwd ? "Hide Password" : "Show Password"}
    </button>
    </>
  );
}

export default App;
