import Image from 'next/image'
import { styles } from "../pages/style";
import innovation from "../public/img/innovation.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import the icons you need
import {
  faChevronCircleDown,
  faFilePen,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center bg-primary text-white'>
      <div className={`${styles.paddingX} flex flex-col md:flex-row items-center justify-center mx-auto w-full max-w-7xl pt-30`}>
        <div className='flex flex-col items-center md:items-start w-full'>
          <h1 className={`${styles.heroHeadText} mb-3 lg:mb-0 md:mb-3`}>Task Completor</h1>
          <p className={`${styles.heroSubText} text-center md:text-start`}>Générer un beau document n’a jamais été aussi simple.</p>
          <a className={`${styles.heroSubTextLight} bg-white hover:bg-black py-3 px-2 rounded-md text-black hover:text-white w-1/3 my-10 text-center flex gap-2 items-center justify-center`}>
            <p>Créer</p>
            <FontAwesomeIcon icon={faChevronRight} className='w-[10px] pt-[3px] sm:w-[15px]'/>
          </a>
        </div>
        <div className='w-9/12 xs:w-4/12 sm:w-3/12 md:w-full min-w-[300px]'>
          <Image src={innovation} alt="Picture of a woman and IA" className='my-0 mx-auto'/>
        </div>
      </div>
      <div className='absolute bottom-12 w-full flex justify-center'>
        <FontAwesomeIcon icon={faChevronCircleDown} className='w-[50px] hover:text-black'/>
      </div>
    </div>
  )
}

export default Hero
