import { Chart } from "./Chart";

export const Summary = ({data}) => {

  const total = data && data.map(entry => entry.amount).reduce((accum, current) => accum + current, 0);

  return (
    <section className="bg-white w-full rounded-lg flex flex-col p-4 gap-4 h-[421px] md:h-[511px]">
      <h2 className="text-2xl">Spending - Last 7 days</h2>
      <Chart data={data} />
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