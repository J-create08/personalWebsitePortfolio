import Image from 'next/image'
import logoAssetDark from '../images/logoAssetDark.png'
import Link from "next/link"
import { BiHappyAlt } from "react-icons/bi";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";

interface Icon {
    icon: React.ReactNode,
    tooltipText: string,
    navHref: string
 }

function NavBar() {
  return (
    <div className='fixed top-0 left-0 mt-1 z-10'>
        <div className='relative h-16 w-screen'>
            {/* backdrop-blur-3xl : this is for bluring the navbar background*/}
            <div className='absolute -top-2 left-0 h-20 w-[110%] backdrop-blur-3xl opacity-70'/>
            <div className='relative top-0 left-0 flex px-4 py-2 items-center space-x-4'>
                <Link href="/">
                    <Image className='cursor-pointer' src={logoAssetDark} alt="logo" height="46" width="60"/>
                </Link>
                <div className='hidden md:inline-flex space-x-3 items-center'>
                    <NavBarIcon icon={<BiHappyAlt size="25" />} tooltipText={'About Me'} navHref={'/about'}/>
                    <NavBarIcon icon={<DiGithubBadge size="25" />} tooltipText={'GitHub'} navHref={'https://github.com/J-create08'}/>
                    <NavBarIcon icon={<FaLinkedinIn size="25" />} tooltipText={'LinkedIn'} navHref={'https://www.linkedin.com/in/juan-rojas-benavides/'}/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

const NavBarIcon = ({ icon, tooltipText, navHref }:Icon) => (
    <Link target="_blank" href={navHref}>
        {navHref != "/about" ? (
            <a target="_blank" rel="noopener noreferrer" href={navHref}>
                <div className='text-white relative cursor-pointer group bg-slate-700 p-1 hover:bg-secondary rounded-xl hover:rounded-md transition-all duration-300'>
                    {icon}

                    <label className='absolute w-auto p-1 m-2 min-w-max -left-2 rounded-md shadow-md bg-slate-800 taxt-white text-sm font bold origin-left scale-0 group-hover:scale-100 transition-all'>
                        <span>{tooltipText}</span>
                    </label>
                </div>
            </a>
        ):
            <div className='text-white relative cursor-pointer group bg-slate-700 p-1 hover:bg-secondary rounded-xl hover:rounded-md transition-all duration-300'>
                {icon}

                <label className='absolute w-auto p-1 m-2 min-w-max -left-2 rounded-md shadow-md bg-slate-800 taxt-white text-sm font bold origin-left scale-0 group-hover:scale-100 transition-all'>
                    <span>{tooltipText}</span>
                </label>
            </div>
        }
        
    </Link>     
)

export default NavBar