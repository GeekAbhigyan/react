import { useState } from "react";
import { InputBox} from "./components/InputBox.jsx";
import {useCurrencyinfo} from "./hooks/useCurencyInfo.js";
import './App.css'




function App() {
  const [amount,setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount , setConvertedAmount] = useState(0);
  
  

  return (
    <>
      <h1 className='text-center text-3xl bg-orange-300 flex'>currency converter</h1>
    </>
  )
}

export default App
