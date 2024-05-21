import React, { useState } from 'react'
import Projects from './Projects'
// import '/src/Projects.jsx'

function App() {
  var [a, b] = useState(0);
  return (
    <div className='w-full h-screen bg-zinc-900 text-pink-500'>
      <h1 className=''>Welcome to Fi-4</h1>
      <h1>{a}</h1>
      <button onClick={()=>b(a++)} className='p-3 bg-customBlue2 text-white scale-50 rounded'>Get Started {a}</button>
      <div className='w-44 h-3 bg-red-500'></div>
      <br />
      {/* data pass krna */}
      <Projects projectDetails={{Name: "Fi-4", Category: "techDisplay"}}/> 
    </div>
    // <></> react fragment
  )
}

export default App