import {HiArrowNarrowRight} from "react-icons/hi"
import {Link} from 'react-scroll'

const Hero: React.FC<{}> = () => {
  return (
    <div id="hero" data-name="hero" className='w-full h-screen bg-[#27384C]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#F6AE2D]'>Jmenuji se</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Dušan Jarkovský</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Jsem web developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Jsem frontendový web developer s důrazem na tvorbu uživatelsky přitažlivého rozhraní. Momentálně hledám svou první pracovní příležitost v této oblasti.</p>
            <div>
                <Link to="about" smooth={true} duration={500}>
                  <button className='text-white group border-2 px-6 py-3 flex items-center hover:bg-[#F6AE2D] hover:border-[#F6AE2D]'>O mě
                  <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3'/>
                  </span>
                  </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero