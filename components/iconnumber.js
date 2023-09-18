"use client"
import {useEffect, useState} from "react"

const IconNumber = ({number, color}) => {

  const [textColor, setTextColor] = useState("black")
  const [backgroundColor, setBackgroundColor] = useState("white")
  const [strokeColor, setStrokeColor] = useState("black")

  useEffect(() => {
    HandleColorTextInput()
  })

  const HandleColorTextInput = () => {
    if (color === "white") {
      setTextColor("black");
      setBackgroundColor("white");
      setStrokeColor("black")
    } else if (color === "green") {
      setTextColor("white");
      setBackgroundColor("#4ade80");
      setStrokeColor("#4ade80")
    } else if (color === "orange") {
      setTextColor("white");
      setBackgroundColor("#fbbf24")
      setStrokeColor("#fbbf24")
    }
  }

  return (
    <>
      {
        number === 1 && (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18.5" fill={color === "green" ? "#4ade80" : "white"} stroke={color === "green" ? "#4ade80" : "black"} stroke-width="3" className="transition-all"/>
      <path d="M22.5322 31H18.416V14.6377L13.0254 16.5713V13.0264L22.3125 9.67188H22.5322V31Z" fill={color === "green" ? "white" : "black"} className="transition-all"/>
      </svg>
        )
      }
      {
        number === 2 && (
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18.5" fill={backgroundColor} stroke={strokeColor} stroke-width="3" className="transition-all"/>
          <path d="M26.0684 29H13.4619V26.5879L19.4414 20.1641C19.9069 19.6562 20.3005 19.195 20.6221 18.7803C20.9437 18.3656 21.2061 17.9847 21.4092 17.6377C21.6038 17.2992 21.7435 16.9818 21.8281 16.6855C21.9212 16.3893 21.9678 16.1016 21.9678 15.8223C21.9678 15.4076 21.9085 15.0394 21.79 14.7178C21.6715 14.3962 21.5065 14.1211 21.2949 13.8926C21.0749 13.6725 20.8125 13.5033 20.5078 13.3848C20.2116 13.2663 19.8815 13.207 19.5176 13.207C19.0436 13.207 18.6247 13.2747 18.2607 13.4102C17.9053 13.5371 17.609 13.7275 17.3721 13.9814C17.1266 14.2438 16.9404 14.5697 16.8135 14.959C16.6865 15.3483 16.623 15.7926 16.623 16.292H13.0811C13.0811 15.471 13.2376 14.6966 13.5508 13.9688C13.8639 13.2324 14.3083 12.5892 14.8838 12.0391C15.4508 11.4889 16.1364 11.0573 16.9404 10.7441C17.7529 10.4225 18.6501 10.2617 19.6318 10.2617C20.5713 10.2617 21.4007 10.3929 22.1201 10.6553C22.848 10.9176 23.4574 11.2858 23.9482 11.7598C24.4307 12.2337 24.7988 12.805 25.0527 13.4736C25.3066 14.1338 25.4336 14.8659 25.4336 15.6699C25.4336 16.2793 25.3363 16.8633 25.1416 17.4219C24.9554 17.972 24.6888 18.5179 24.3418 19.0596C23.9863 19.6012 23.5632 20.1556 23.0723 20.7227C22.5814 21.2812 22.0355 21.8695 21.4346 22.4873L17.9561 26.1689H26.0684V29Z" fill={textColor} className="transition-all"/>
          </svg>
        )
      }
    </>
  )
}

export default IconNumber;
