import NavBar from "../components/NavBar"
import Image from 'next/image'
import portrait from '../images/Retrato.jpg'


function about() {
  return (
      <main className="bg-lightgray">
        <NavBar  />

        <div className="flex h-screen max-w-3xl my-auto items-center ml-10 md:ml-28">
            <Image className='cursor-pointer rounded-full object-cover m-4' src={portrait} alt="logo" height="200" width="200"/>   
            <div className="flex flex-col m-8">
                <h3 className="text-3xl text-slate-700 font-bold">Hello!</h3>
                <p className="text-slate-800 text-sm">You probably want to know more about me :)</p>
                <hr className=" border-2 border-yellow-500 my-2 w-10" />
                <p className="text-slate-800 max-w-md text-sm">I'm a Software Developer with a post-graduate degree on Mobile Development and an interesting
                background in photography and desgin. I've worked and managed different projects extending from Python/Django full stack projects to iOS and Roku.
                I am very passionate about what I do and I will help or collaborate with you in any way I can.</p>
            </div>
        </div>
      </main>
    
  )
}

export default about