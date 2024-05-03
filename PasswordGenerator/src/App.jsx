import { useState ,useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password, setPassword] = useState(' ')

  const passwordRef = useRef(null)

  const generatePassword = useCallback (() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if(numberAllowed)  str += '1234567890'
    if(charAllowed)    str += '!@#$%^&*'
    for(let i=0;i<length;i++){
      const char = Math.floor(Math.random()*str.length)+1
      pass += str.charAt(char)
    }

    setPassword(pass)

  } , [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  useEffect( () => {
    generatePassword()
  },[length, numberAllowed, charAllowed])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-20 bg-slate-700 text-center text-lg text-slate-300'>
          <h1>Password Generator</h1>
          <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
               <input type="text"
                  value={password}
                  className=' outline-none w-full py-1 px-3  text-base3  text-yellow-600'
                  placeholder='Password'
                  readOnly
                  ref={passwordRef}
                />
                <button onClick={copyPasswordToClipboard}
                  className=' outline-none  bg-blue-900 text-yellow-100 px-3 py-0.5 shrink-0' 
                >Copy</button>
          </div>
          <div className=' flex text-sm gap-x-2'>
              <div className=' flex items-center gap-x-1'>
                  <input type="range"
                    min={8} max={50}
                    value={length}
                    className=' cursor-pointer'
                    onChange={(e) => setLength(e.target.value)}
                   name="" id="" />
                   <label htmlFor="Length" className=' text-red-500'>Length:{length}</label>
              </div>
              <div className=' flex items-center gap-x-1'>
                  <input type="checkbox" 
                     defaultChecked={numberAllowed}
                     onChange={() => {
                       setNumberAllowed ((prev) => !prev )
                     }}
                  name="" id="" />
                  <label htmlFor="Number" className=' text-red-500'>Numbers</label>
              </div>
              <div className=' flex items-center gap-x-1'>
                  <input type="checkbox" 
                     defaultChecked={charAllowed}
                     onChange={() => {
                       setCharAllowed ((prev) => !prev )
                     }}
                  name="" id="" />
                  <label htmlFor="Char" className=' text-red-500'>Characters</label>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
