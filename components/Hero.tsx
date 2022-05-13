import React from 'react'

interface Props {
    setModalOn: (on: boolean) => void
}

function Hero({setModalOn}: Props) {

    const openModal = () => {
        setModalOn(true)
    }

  return (
    <div className='flex flex-col h-screen justify-center my-auto ml-10 md:ml-28'>
        <div className='hidden xl:inline-flex relative xl:ml-[710px] 2xl:ml-[850px] opacity-80'>
            <div className='absolute -top-4 left-40 w-72 h-72 bg-purple-300 mix-blend-lighten blur-md rounded-full animate-blob animation-delay-3000'></div>
            <div className='absolute -top-14 left-16 w-72 h-72 bg-yellow-300 mix-blend-lighten blur-md rounded-full animate-translateUp'></div>
            <div className='absolute -top-4 w-72 h-72 bg-green-300 mix-blend-lighten blur-md rounded-full animate-blob animation-delay-2000'></div> 
        </div>
        <h2 className='text-lightgray relative max-w-md md:max-w-none md:pr-16 text-7xl font-bold'>Hello! I'm <span className='text-primary'> Juan Carlos</span></h2>
        <h1 className='text-lightgray relative max-w-md md:max-w-none md:pr-16 text-4xl font-bold'>Software Developer from <span className='text-secondary'> Costa Rica</span></h1>
        <button onClick={openModal} className='text-sale-800 relative bg-primary font-semibold h-14 w-48 border rounded-xl mt-5 cursor-pointer hover:bg-secondary hover:text-lightgray hover:rounded-lg transition-all'>Get in contact :)</button>
    </div>
  )
}

export default Hero