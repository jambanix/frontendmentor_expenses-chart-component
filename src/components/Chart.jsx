import { Bar } from "./Bar"

export const Chart = ({data}) => {
  return (
    <div className="flex justify-evenly h-[520px] items-end">
      {data.map(entry => <Bar data={entry} />)}
    </div>
  )
}