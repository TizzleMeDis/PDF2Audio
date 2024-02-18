import React from 'react'

export default function Header() {
  return (
    <header className='flex flex-row justify-between items-center'>
        <div className='flex flex-row justify-center items-center'>
            <img src="assets/pexels-stas-knop-5939401.jpg" alt="App-Logo" className='w-20 rounded-2xl'/>
            <span className='mx-2'>PDF2Audio</span>
        </div>
        <div className='flex flex-row justify-between'>
            <div className='mx-1 px-1'>Home</div>
            <div className='mx-1 px-1'>About</div>
            <div className='mx-1 px-1'>Code Base</div>
        </div>
    </header>
  )
}
