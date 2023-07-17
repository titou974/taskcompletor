import { navLinks } from "../utils/constants";
import { styles } from "../pages/style";
import Image from 'next/image';
import feather from '../public/img/feather.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faQuestion,
  faFileCirclePlus,
} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className={`${styles.paddingX} w-full fixed top-0 py-5 flex items-center justify-center z-20 text-[16px] bg-primary text-white`}>
      <div className="w-full flex items-center justify-between max-w-7xl">
        <div>
          <Image src={feather} alt="A writer feather" className= "w-[35px] lg:w-[50px]"/>
        </div>
        <ul className="hidden lg:flex list-none">
          {navLinks.map((link) => (
            <li key={link.id} className="px-5 hover:text-secondary">
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
        </ul>
        <ul className="flex lg:hidden list-none">
          <li className="px-5">
            <a>
              <FontAwesomeIcon icon={faFileCirclePlus} className='w-[40px] hover:text-black'/>
            </a>
          </li>
          <li className="px-5">
            <a>
              <FontAwesomeIcon icon={faQuestion} className='w-[22px] hover:text-black'/>
            </a>
          </li>
          <li className="px-5">
            <a>
              <FontAwesomeIcon icon={faUser} className='w-[28px] hover:text-black'/>
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex items-center">
          <a className="me-2 hover:text-secondary">Se connecter</a>
          <a className="bg-white py-3 px-2 ms-2 rounded-md text-black hover:bg-black hover:text-white">
            <p>S'enregistrer</p>
          </a>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
