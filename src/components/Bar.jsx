import { useEffect, useState } from "react";

export const Bar = ({ parentHeight, data }) => {

  const amount = data.amount;
  const [height, setHeight] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const infoBubbleClass = isHovering ? "visible opacity-100" : "invisible opacity-0"
  const barColourClass = isHovering ? "bg-cyan" : "bg-red"
  const heightClass = `h-[${height}px]`

  useEffect(() => {
    setHeight(prev => (data.amount * 3).toFixed(0));
  }, [parentHeight]);

  return (
    <div className="flex flex-col h-full justify-end items-center w-[33px] md:w-[55px]">
      <div className={`flex items-center justify-center rounded-lg bg-dark-brown text-white p-2 text-sm mb-2 ${infoBubbleClass} transition-opacity`}>£{amount}</div>
      <div className={`${heightClass} ${barColourClass} rounded-lg bg-red w-full transition-colors`} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false) }><span className="invisible">d</span></div>
      <p>{data.day}</p>
    </div>
  )
}