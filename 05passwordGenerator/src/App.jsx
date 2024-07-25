import { useState , useCallback , useEffect , useRef} from 'react'


function App() {
  const [length , setLength] = useState(8)
  const [numberAllow , setNumberAllow] = useState(false)
  const [charAllow , setCharAllow] = useState(false)
  const [defaultPassword, setpassword] = useState("")

 // useref  hook
 const passwordRef= useRef(null) 

  const passwordGenerator = useCallback(()=> {

    let pass = ""
    let str = 
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    if (numberAllow) str += "1234567890"
    if (charAllow) str += "!@#$%^&*(){}:~<>?,./-="

    for (let index = 1; index <= length; index++) {
     let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setpassword(pass)
 
  },[length,numberAllow,charAllow,setpassword])


const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current ?.select();
  // passwordRef.current ?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(defaultPassword)
},[defaultPassword])

 // method optimised with setpassword  
  useEffect(()=>{
    passwordGenerator()
  },[length , numberAllow , charAllow , passwordGenerator])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-1 my-16 text-orange-500 bg-gray-700">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className = "flex shadow-md rounded-lg overflow-hidden mb-4">
      <input 
      type="text"
      value = {defaultPassword}
      className='outline-none w-full py-1 px-3 text-center'
      placeholder = "password"
      readOnly
      ref = {passwordRef}
      />

      <button
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'

      >copy</button>
      
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>

          <input 
          type="range" 
          min = {8}
          max = {16}
          value = {length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label >length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked = {numberAllow}
          id="numberInput"
          onChange={()=>{
            setNumberAllow((prev)=> !prev)
          }}
           />
           <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked = {charAllow}
          id="charInput"
          onChange={()=>{
            setCharAllow((prev)=> !prev)
          }}
           />
           <label htmlFor="charInput">Characters</label>
        </div>
      </div>
   </div>
    </>
  )
}

export default App
