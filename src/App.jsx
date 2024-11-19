import { useState } from "react";
import { useEffect } from "react"
import { Balance } from "./components/Balance";
import { Summary } from "./components/Summary";

function App() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("data.json")
    .then(response => response.json())
    .then(data => setData(prev => data));
  }, []);

  return (
    <>
      <main className="bg-cream-bg flex items-center justify-center min-h-screen w-full">
        <div className="flex flex-col gap-6 w-[90%] max-w-[560px] min-w-[320px]">
          <Balance />
          <Summary data={data} />
        </div>
      </main>
    </>
  )
}

export default App
