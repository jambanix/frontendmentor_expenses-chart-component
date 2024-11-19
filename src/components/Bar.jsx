import { useEffect, useState } from "react";

export const Bar = ({ data, height }) => {

  const amount = data.amount;
  const [isHovering, setIsHovering] = useState(false);

  const infoBubbleClass = isHovering ? "visible opacity-100" : "hidden opacity-0"
  const barColourClass = isHovering ? "bg-cyan" : "bg-red"

  console.log(data.amount, height);

  return (
    <div className="flex flex-col h-full justify-end items-center w-[33px] md:w-[55px]">
      <div className={`flex items-center justify-center rounded-lg bg-dark-brown text-white p-2 text-sm mb-2 ${infoBubbleClass} transition-opacity`}>£{amount}</div>
      <div className={`${barColourClass} rounded-lg w-full transition-all`} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} style={{height: `${height}px`}}></div>
      <p>{data.day}</p>
    </div>
  )
}