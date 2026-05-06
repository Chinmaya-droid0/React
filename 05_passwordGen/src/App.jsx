import { useState, useCallback, useEffect, useRef} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("")

  //useRef Hook
   const passwordRef = useRef(null)

  const passGen = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (num)  str+= "0123456789"
    if (char) str+= "!@#$%^&*()-_=+[]{}|:;"

    for (let i = 1; i <= length; i++) {
     let char = Math.floor(Math.random() * str.length + 1)

     pass += str.charAt(char)
      
    }
  
    setPass(pass)

  }, [length, num, char, setPass]) 

  const copyPassClip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 14);
    window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(() => {passGen()}, [length, num, char, passGen])

  return (
    <>
     <h1 className="text-3xl font-bold !text-blue-500">Password Generator</h1>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type='text'
        value={pass}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPassClip} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={21}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length:{length}</label> 
        </div>

         <div className='flex items-center gap-x-1'>
         <input 
           type='checkbox'
           defaultChecked =  {num}
           id='numberInput'
           onChange={()=>{setNum((prev) => !prev);}}
         />
         <label htmlFor='numberInput'>Numbers</label>
         </div>
         
         <div className='flex items-center gap-x-1'>
         <input 
           type='checkbox'
           defaultChecked =  {char}
           id='charInput'
           onChange={()=>{setChar((prev) => !prev);}}
         />
         <label htmlFor='charInput'>Characters</label>
         </div>

      </div>
     </div>
    </>
  )
}

export default App
