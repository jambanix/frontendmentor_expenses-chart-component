import { Chart } from "./Chart";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { CHART_CONTAINER_HEIGHT } from "../lib/container";

export const Summary = ({data}) => {

  const screenWidth = useScreenWidth();
  const total = data && data.map(entry => entry.amount).reduce((accum, current) => accum + current, 0);

  // The highest amount on the data, use this as a base for determining the heights in relation to the container height
  const maxAmount = Math.max(...data.map(item => item.amount));

  // Base this off the figma design with 30px buffer
  const containerHeight = screenWidth === "desktop" ? CHART_CONTAINER_HEIGHT : CHART_CONTAINER_HEIGHT - 150;

  return (
    <section className="bg-white w-full rounded-lg flex flex-col p-4 gap-4 h-[461px] md:h-[611px]">
      <h2 className="text-2xl">Spending - Last 7 days</h2>
      <Chart data={data} maxAmount={maxAmount} containerHeight={containerHeight}/>
      <hr />
      <div className="flex flex-col justify-center">
        <h4>Total this month</h4>
        <div className="flex justify-between items-center">
          <p className="text-3xl">£{total}</p>
          <div className="flex flex-col">
            <p className="self-end">+2.4%</p>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </section>
  )
}