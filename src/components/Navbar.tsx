import {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import Logo from "../assets/logo.png"
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#27384C] text-gray-300'>
        <div>
            <a href="/">
                <img src={Logo} alt="Logo Image" style={{width: "70px"}}/>
            </a>
        </div>

        {/* menu */}
        <ul className='hidden md:flex px-4'>
            <li className='px-2 cursor-pointer'>
                <Link to="hero" smooth={true} duration={500}>
                    Domů
                </Link>
            </li>
            <li className='px-2 cursor-pointer'>
                <Link to="about" smooth={true} duration={500}>
                    O mě
                </Link>
            </li>
            <li className='px-2 cursor-pointer'>
                <Link to="skills" smooth={true} duration={500}>
                    Zkušenosti
                </Link>
            </li>
            <li className='px-2 cursor-pointer'>                
                <Link to="contact" smooth={true} duration={500}>
                    Kontakt
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
                    Domů
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    O mě
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Zkušenosti
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Kontakt
                </Link>
            </li>
        </ul>

        {/* Social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                        href="https://www.linkedin.com/in/du%C5%A1an-jarkovsk%C3%BD-579b462b8/" target="_blank">
                            Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                        href="https://github.com/JarkovskyDev" target="_blank">
                            Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                        href="mailto:jarkovsky-dev@gmail.com">
                            Email <HiOutlineMail size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar