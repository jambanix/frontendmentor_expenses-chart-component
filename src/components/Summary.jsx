import { Chart } from "./Chart";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { CHART_CONTAINER_HEIGHT } from "../lib/container";

export const Summary = ({ data }) => {

  const screenWidth = useScreenWidth();
  const total = data && data.map(entry => entry.amount).reduce((accum, current) => accum + current, 0);

  // The highest amount on the data, use this as a base for determining the heights in relation to the container height
  const maxAmount = Math.max(...data.map(item => item.amount));

  // Container height for the chart based on screen size
  const containerHeight = screenWidth === "desktop" ? CHART_CONTAINER_HEIGHT : CHART_CONTAINER_HEIGHT - 50;

  // Section height based on screen size
  const sectionHeight = screenWidth === "desktop" ? 500 : 450

  return (
    <section className="bg-white w-full rounded-lg flex flex-col p-4 md:p-8 gap-6" style={{minHeight: `${sectionHeight}px`}}>
      <h2 className="text-xl md:text-3xl text-dark-brown font-bold">Spending - Last 7 days</h2>
      <Chart data={data} maxAmount={maxAmount} containerHeight={containerHeight}/>
      <hr className="text-dark-brown/15"/>
      <div className="flex flex-col justify-center md:gap-2">
        <p className="text-medium-brown">Total this month</p>
        <div className="flex justify-between items-center">
          <p className="text-4xl md:text-5xl font-bold text-dark-brown">£{total}</p>
          <div className="flex flex-col">
            <p className="self-end text-dark-brown font-bold">+2.4%</p>
            <p className="text-medium-brown">from last month</p>
          </div>
        </div>
      </div>
    </section>
  )
}