import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-orange-600 p-4'> React Router</h1>
    </>
  )
}

export default App
