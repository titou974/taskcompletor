import dynamic from "next/dynamic";
import { about_sections } from "../utils/constants";
import styles from "../components/style";
import { Button } from "react-scroll";
import Link from "next/link";
const Navbar = dynamic(() => import("../components/navbar"));
const SocialLinks = dynamic(() => import("../components/sociallinks"))

const About = () => {
  return (
    <div className={`w-full`}>
      <Navbar />
      <div className={`h-full ${styles.paddingX} py-40 w-full max-w-7xl mx-auto`}>
        {about_sections.map((section, index) => (
          <div key={index} className="py-6">
            <h2 className={`text-white font-bold ${styles.sectionSubText} pb-4`}>{section.title}</h2>
            {index === 3 ? (
              <Link href={"faq"}>
                <button className="flex items-center gap-2 hover:bg-[#011B6B] py-2 px-4 transition-all rounded-md">
                  <p className="text-white underline">{section.description}</p>
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.87447 9.19487C7.74636 9.19487 7.61826 9.14768 7.51712 9.04654C7.32159 8.85101 7.32159 8.52738 7.51712 8.33185L11.2524 4.59659L7.51712 0.861336C7.32159 0.665808 7.32159 0.342175 7.51712 0.146646C7.71265 -0.0488821 8.03628 -0.0488821 8.23181 0.146646L12.3244 4.23924C12.5199 4.43477 12.5199 4.7584 12.3244 4.95393L8.23181 9.04654C8.13068 9.14768 8.00257 9.19487 7.87447 9.19487Z" fill="white"/>
                  <path d="M11.8531 5.1022H0.505677C0.22924 5.1022 0 4.87296 0 4.59652C0 4.32008 0.22924 4.09084 0.505677 4.09084H11.8531C12.1295 4.09084 12.3587 4.32008 12.3587 4.59652C12.3587 4.87296 12.1295 5.1022 11.8531 5.1022Z" fill="white"/>
                  </svg>
                </button>
              </Link>
            ) : (
              <p className="text-[16px] text-slate-200 pt-4 ">{section.description}</p>
            )}
            {index === 2 && (
              <ul className="text-slate-200 pt-6">
                <li>{section.list_points_1}</li>
                <li className="pt-3">{section.list_points_2}</li>
                <li className="pt-6">{section.list_points_3}</li>
              </ul>
            )}
            {index === 4 && (
              <a href="https://titouanhirsch.com/" target="_blank">
                <button className="flex items-center gap-2 hover:bg-[#011B6B] mt-4 py-2 px-4 transition-all rounded-md">
                  <p className="text-white underline">Découvrir mon Portfolio</p>
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.87447 9.19487C7.74636 9.19487 7.61826 9.14768 7.51712 9.04654C7.32159 8.85101 7.32159 8.52738 7.51712 8.33185L11.2524 4.59659L7.51712 0.861336C7.32159 0.665808 7.32159 0.342175 7.51712 0.146646C7.71265 -0.0488821 8.03628 -0.0488821 8.23181 0.146646L12.3244 4.23924C12.5199 4.43477 12.5199 4.7584 12.3244 4.95393L8.23181 9.04654C8.13068 9.14768 8.00257 9.19487 7.87447 9.19487Z" fill="white"/>
                  <path d="M11.8531 5.1022H0.505677C0.22924 5.1022 0 4.87296 0 4.59652C0 4.32008 0.22924 4.09084 0.505677 4.09084H11.8531C12.1295 4.09084 12.3587 4.32008 12.3587 4.59652C12.3587 4.87296 12.1295 5.1022 11.8531 5.1022Z" fill="white"/>
                  </svg>
                </button>
              </a>
            )}
            {index === 5 && (
              <SocialLinks />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
