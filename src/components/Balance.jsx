
export const Balance = () => {
  return (
    <section className="bg-red w-full rounded-xl flex justify-between px-4 py-2 md:px-8 md:py-6 text-white items-center">
      <div className="flex flex-col gap-1">
        <h3>My Balance</h3>
        <p className="text-2xl md:text-4xl font-semibold">£921.48</p>
      </div>
      <div className="bg-dark-brown h-12 w-12 rounded-full relative">
        <div className="border-2 border-white h-12 w-12 absolute rounded-full -left-5"></div>
      </div> 
    </section>
  )
}