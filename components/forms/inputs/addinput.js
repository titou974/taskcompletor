import { useState } from "react";
import style from "../../../css/InputName.module.css";
import { AnimatePresence, m } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";



const AddInput = ({input, setInput, dataset, placeholder}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [element, setElement] = useState("")

  const handleChange = (e) => {
    const value = e.target.value;
    setElement(value)
    if (value.length > 0 && dataset) {
      const filteredSuggestions = dataset.filter((domain) =>
        domain.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput([...input, suggestion]),
    setElement("");
    setSuggestions([]);
  };

  const handleAddCompetences = () => {
    setInput([...input, element]),
    setElement("");
  }

  const handleDeleteCompetence = (indexToDelete) => {
    setInput(input.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="w-full relative h-full">
      <div className="w-full">
        <ul className="mb-8 flex w-full flex-wrap">
        <AnimatePresence>
          {input && input.length !== 0 && input.map((element, index) => (
              <m.li
                className="rounded-md text-sm bg-secondary w-fit p-2 my-1 mr-2 font-bold flex justify-between gap-3"
                variants={fadeIn("top", "spring", 0.2, 0.75)}
                initial="hidden"
                animate="show"
                exit="hidden"
                key={index}>
                {element}
                <button onClick={() => handleDeleteCompetence(index)}>
                  <div className="max-w-[17px]">
                    <FontAwesomeIcon icon={faXmark} size="sm" />
                  </div>
                </button>
              </m.li>
          ))}
        </AnimatePresence>
        </ul>
        <div className="w-full relative">
          <div className="w-full relative bg-secondary flex items-center rounded-md pr-2 py-1 shadow-lg">
            <m.label variants={fadeIn("right", "spring", 0.5, 0.75)} className={`${style.autoInput} w-full`} >
              <input required type="text" value={element} onChange={(e) => handleChange(e)} className={`${style.inputClassic} w-full rounded-md transition-all text-white`}/>
              <span className={`${style.placeholderInputClassic}`}>{placeholder}</span>
            </m.label>
            <button onClick={handleAddCompetences} className="p-4 bg-tertiary rounded-md min-w-[50px] min-h-[50px] border-white hover:bg-white hover:text-tertiary transition-all flex items-center justify-center gap-2">
              <p className="font-bold">Ajouter</p>
              <div className="max-w-[20px] mx-auto">
                <FontAwesomeIcon icon={faPlus} size="sm"/>
              </div>
            </button>
          </div>
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

export default AddInput;
