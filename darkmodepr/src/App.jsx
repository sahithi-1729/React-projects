import { useState } from 'react'
import './App.css'
import DarkMoonIcon from './icons/darkmoon.svg';

function App() {
  const [color, setColor] = useState('#242424')

  function changeColor(color){
    setColor(prevColor => prevColor === '#242424' ? 'white' : '#242424');
  }

  return (
    <div className='w-full h-screen duration-100 flex justify-end' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-end inset-x-0 px-2'>
          <button 
          
          onClick={ changeColor} 
          
          className=' border-black bg-slate-500  px-3 py-2 rounded-2xl '>
            <img src={DarkMoonIcon} alt="Dark Moon" style={{ width: '36px', height: '36px' }} />
          </button>
      </div>
    </div>
  )
}

export default App
