import { useState } from "react";
import style from "../../../css/InputName.module.css";
import { AnimatePresence, m } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import { competences_list } from "../../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";



const AddCompetencesInput = ({input, setInput}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [competence, setCompetence] = useState("")

  const handleChange = (e) => {
    const value = e.target.value;
    setCompetence(value)
    if (value.length > 0) {
      const filteredSuggestions = competences_list.filter((domain) =>
        domain.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCompetence(suggestion);
    setSuggestions([]);
  };

  const handleAddCompetences = () => {
    setInput([competence, ...input]),
    setCompetence("");
  }



  return (
    <div className="w-full relative h-full">
      <div className="w-full">
        <ul className="mb-8 flex w-full">
          {input.map((competence) => (
            <li className="rounded-md text-sm bg-green-800 w-fit p-2 my-1 mr-2">{competence}</li>
          ))}
        </ul>
        <div className="w-full relative">
          <m.label variants={fadeIn("right", "spring", 0.5, 0.75)} className={`${style.autoInput} w-full`} >
            <input required type="text" value={competence} onChange={(e) => handleChange(e)} className={`${style.inputClassic} w-full rounded-md transition-all text-white`}/>
            <span className={`${style.placeholderInputClassic}`}>Compétences</span>
            <button onClick={handleAddCompetences} className="p-1 bg-tertiary rounded-md w-[50px] h-[50px] absolute right-[4px] bottom-[3px] border-white hover:bg-white hover:text-tertiary transition-all">
              <div className="max-w-[50px] mx-auto">
                <FontAwesomeIcon icon={faPlus} size="lg" />
              </div>
            </button>
          </m.label>
          <AnimatePresence>
            {suggestions.length !== 0 && (
              <m.ul variants={fadeIn("top", "spring", 0.2, 0.75)} initial="hidden" animate="show" exit="hidden" className="absolute bg-white w-full rounded-md z-50">
                {suggestions.slice(0, 5).map((suggestion, idx) => (
                  <li className="w-full py-2 px-4  text-black py-3 cursor-pointer hover:bg-tertiary rounded-md transition-all hover:text-white"  key={idx} onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion}
                  </li>
                ))}
              </m.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )

}

export default AddCompetencesInput;
