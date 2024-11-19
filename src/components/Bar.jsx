import { useEffect, useState } from "react";

const today = new Date().toLocaleDateString("en-GB", {weekday: "short"}).toLowerCase();

export const Bar = ({ data, height }) => {

  const amount = data.amount;
  const [isHovering, setIsHovering] = useState(false);

  const infoBubbleClass = isHovering || data.day === today ? "visible opacity-100" : "hidden opacity-0"

  const barColourClass = () => {
    if (isHovering) {
      return data.day !== today ? "bg-red/50" : "bg-cyan/50";
    }
    else if (data.day === today) {
      return "bg-cyan/50"
    }
    else {
      return "bg-red"
    }
  }


  return (
    <div className="flex flex-col h-full justify-end items-center w-[20px] sm:w-[35px] md:w-[55px] gap-2">

      {/* Popup with amount */}
      <div className={`flex items-center justify-center rounded-lg bg-dark-brown text-white p-2 text-xs mb-2 ${infoBubbleClass} transition-opacity font-semibold`}>£{amount}</div>

      {/* Bar */}
      <div className={`${barColourClass()} rounded-lg w-full transition-all`} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} style={{height: `${height}px`}}></div>

      {/* Day label */}
      <p className="text-medium-brown">{data.day}</p>
    </div>
  )
}