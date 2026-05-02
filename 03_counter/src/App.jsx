import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
 
   
   //let counter = 15;

   const addValue=()=>{
       
       //counter +=1
       setCounter(counter +=1)
       
   }

   const removeValue= () =>{
    setCounter(counter-=1)
   }

  return (
    <>
   <h1>Chinmay aur React</h1>
   <h2>Counter Value: {counter}</h2>

   <button onClick={addValue}>Add value{counter}</button>
   <br/>
   <button onClick={removeValue}>Remove value{counter}</button>
   <p>Footer:{counter}</p>
   </>
  )
}

export default App
