import { navLinks } from "../utils/constants";
import styles from "./style";
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
    <nav className={`${styles.paddingX} w-full fixed top-0 py-5 flex items-center justify-center z-50 text-[16px] bg-primary text-white`}>
      <div className="w-full flex items-center justify-between max-w-7xl">
        <div className="cursor-pointer">
          <Image src={feather} alt="A writer feather" className= "w-[35px] lg:w-[50px] z-50"/>
        </div>
        <ul className="hidden lg:flex list-none">
          {navLinks.map((link) => (
            <li key={link.id} className="px-5 transition-colors hover:text-secondary">
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
        </ul>
        <ul className="flex lg:hidden list-none">
          <li className="px-5">
            <a>
              <FontAwesomeIcon icon={faFileCirclePlus} className='w-[40px]  transition-colors hover:text-tertiary cursor-pointer'/>
            </a>
          </li>
          <li className="px-5">
            <a>
              <FontAwesomeIcon icon={faQuestion} className='w-[22px]  transition-colors hover:text-tertiary cursor-pointer'/>
            </a>
          </li>
          <li className="px-5">
            <a>
              <FontAwesomeIcon icon={faUser} className='w-[28px] transition-colors hover:text-tertiary cursor-pointer'/>
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex items-center">
          <a className="hover:text-secondary cursor-pointer transition-colors">Se connecter</a>
          <a className="cta3 cursor-pointer ms-4">
            <p>S'enregistrer</p>
          </a>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
