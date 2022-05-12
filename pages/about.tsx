import NavBar from "../components/NavBar"
import Image from 'next/image'
import plantsPortrait from '../images/portraitPlants.jpeg'
import { DiHtml5, DiCss3, DiPython, DiDjango, DiReact, DiJavascript1, DiTerminal, DiDocker, DiDatabase, DiPhotoshop, DiIllustrator } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si"

interface Icon {
    icon: React.ReactNode,
    tooltipText: string
 }

function about() {
  return (
      <main className="bg-lightgray relative">
        <NavBar  />

        <div className="flex flex-col absolute my-auto h-auto top-52 lg:top-0 lg:min-h-screen justify-evenly items-center lg:flex-row lg:justify-between">
            <div className="flex h-2xl max-w-3xl my-auto items-center ml-10 md:ml-28">
                <Image className='cursor-pointer rounded-full object-cover m-4' src={plantsPortrait} alt="logo" height="200" width="200"/>   
                <div className="flex flex-col m-8">
                    <h3 className="text-3xl text-slate-700 font-bold">Hello!</h3>
                    <p className="text-slate-800 text-sm">You probably would like to know more about me!</p>
                    <hr className=" border-2 border-yellow-500 my-2 w-10" />
                    <p className="text-slate-800 max-w-md text-sm">I'm a Software Developer with a post-graduate degree on Mobile Development and an interesting
                    background in photography and design. I've worked and managed different projects extending from front-end and full-stack projects to mobile environments like iOS and Roku.
                    I am very passionate about what I do and I will help or collaborate with you in any way I can.</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-5 ml-32 md-gap-6 p-2 max-w-7xl lg:mx-auto">
                <AboutIcon icon={<DiHtml5 size="60" />} tooltipText={"HTML"} />
                <AboutIcon icon={<DiCss3 size="60" />} tooltipText={"CSS"} />
                <AboutIcon icon={<DiPython size="60" />} tooltipText={"Python"} />
                <AboutIcon icon={<DiDjango size="60" />} tooltipText={"Django"} />
                <AboutIcon icon={<DiJavascript1 size="60" />} tooltipText={"Javascript"} />
                <AboutIcon icon={<DiReact size="60" />} tooltipText={"ReactJS"} />
                <AboutIcon icon={<SiNextdotjs size="60" />} tooltipText={"NextJS"} />
                <AboutIcon icon={<DiDocker size="60" />} tooltipText={"Docker"} />
                <AboutIcon icon={<DiDatabase size="60" />} tooltipText={"Databases"} />
                <AboutIcon icon={<DiTerminal size="60" />} tooltipText={"Terminal"} />
                <AboutIcon icon={<DiPhotoshop size="60" />} tooltipText={"Photoshop"} />
                <AboutIcon icon={<DiIllustrator size="60" />} tooltipText={"Illustrator"} />
            </div>
        </div>
        
      </main>
    
  )
}

const AboutIcon = ({ icon, tooltipText }:Icon) => (

    <div className='text-white relative group bg-primary p-1 hover:bg-yellow-500 rounded-xl hover:rounded-md transition-all duration-300'>
        {icon}

        <label className='absolute w-auto p-1 m-2 min-w-max -left-2 z-20 rounded-md shadow-md bg-slate-800 taxt-white text-sm font bold origin-left scale-0 group-hover:scale-100 transition-all'>
            <span>{tooltipText}</span>
        </label>
    </div>
            


)

export default about