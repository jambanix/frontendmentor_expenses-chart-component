import { Bar } from "./Bar"
import { getBarHeight } from "../lib/container"
import { useScreenWidth } from "../hooks/useScreenWidth"

export const Chart = ({ data, maxAmount, containerHeight }) => {

  const screenSize = useScreenWidth();
  const requiredResize = screenSize === "desktop" ? 0 : 100

  return (
    <div className={`flex justify-evenly items-end gap-4 flex-grow`} style={{height: `${containerHeight}px`}}>
      {data.map((entry, ix) => <Bar data={entry} key={ix} height={getBarHeight(entry.amount, maxAmount, screenSize) - requiredResize}/>)}
    </div>
  )
}