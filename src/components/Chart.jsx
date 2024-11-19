import { Bar } from "./Bar"
import { getBarHeight } from "../lib/container"

export const Chart = ({ data, maxAmount, containerHeight }) => {

  return (
    <div className={`flex justify-evenly items-end gap-4`} style={{height: `${containerHeight}px`}}>
      {data.map((entry, ix) => <Bar data={entry} key={ix} height={getBarHeight(entry.amount, maxAmount)}/>)}
    </div>
  )
}