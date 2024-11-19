
export const Balance = () => {
  return (
    <section className="bg-red w-full rounded-lg flex justify-between p-4 text-white items-center">
      <div className="flex flex-col gap-2">
        <h3>My Balance</h3>
        <p className="text-4xl font-semibold">£921.48</p>
      </div>
      <div className="bg-dark-brown h-12 w-12 rounded-full relative">
        <div className="border-2 border-white h-12 w-12 absolute rounded-full -left-5"></div>
      </div> 
    </section>
  )
}