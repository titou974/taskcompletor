import { useState } from "react";
import style from "../../../css/InputName.module.css";
import { AnimatePresence, m } from "framer-motion";
import { fadeIn } from "../../../utils/motion";



const AutoSuggestionInput = ({input, setInput, dataset, typedPlaceholder}) => {
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 0) {
      const filteredSuggestions = dataset.filter((domain) =>
        domain.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
  };


  return (
    <div className="w-full relative h-full">
      <m.label variants={fadeIn("right", "spring", 0.5, 0.75)} className={`${style.autoInput} w-full`} >
        <input required type="text" value={input} onChange={handleChange} className={`${style.inputClassic} w-full rounded-md transition-all`}/>
        <span className={`${style.placeholderInputClassic}`}>{typedPlaceholder}</span>
      </m.label>
      <AnimatePresence>
        {suggestions.length !== 0 && (
          <m.ul variants={fadeIn("top", "spring", 0.2, 0.75)} initial="hidden" animate="show" exit="hidden" className="absolute bg-white w-full rounded-md">
            {suggestions.slice(0, 5).map((suggestion, idx) => (
              <li className="w-full py-2 px-4  text-black py-3 cursor-pointer hover:bg-tertiary rounded-md transition-all hover:text-white"  key={idx} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  )

}

export default AutoSuggestionInput;
