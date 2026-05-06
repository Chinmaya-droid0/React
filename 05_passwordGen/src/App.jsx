import { useState, useCallback} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("")

  const passGen = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (num)  str+= "0123456789"
    if (char) str+= " ! @ # $ % ^ & * ( ) - _ = + [ ] { } | : ; "

    for (let i = 1; i <= array.length; i++) {
     let char = Math.floor(Math.random() * str.length + 1)

     pass = str.charAt(char)
      
    }
  
    setPass(pass)

  }, [length, num, char, setPass]) 

  return (
    <>
     <h1 className="text-3xl font-bold !text-blue-500">Password Generator</h1>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>Test</div>
    </>
  )
}

export default App
