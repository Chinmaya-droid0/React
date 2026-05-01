import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
  const userName = "Ranjan"
  return(
    <div>
      <h1>Custom App | Chinmaya {userName}</h1>
    </div>
  )
}

// const reactElement = React.createElement(  // injected by Babble
//   'a',
//   {href:'https:/google.com', target:'_blank'},
//   'Click This'
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
