import {useState} from "react";


//ui updation ko react control karta hai 

function App() {
  
  let [counter, setCounter] = useState(15)

  //ui updation 

  // let counter = 6;

  const addvalue = function(){
    
    // counter = counter +1;
    setCounter(counter+1);
    console.log("clicked", counter)
  }

  const removeValue = ()=>{
   
    setCounter(counter-1);
    console.log("clicked", counter)
  }



  return (
    <>
     <h1>counter - react </h1>
     <h2>counter value : {counter}</h2>

     <button onClick={addvalue}>ADD value</button>
     <br />
    <button onClick={removeValue}>REMOVE value</button>

    {/* <p> footer : {counter}</p> */}
    </>
  )
}

export default App
