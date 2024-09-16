import { useState } from "react";

function Buttonbg() {
  const [bgcolor, setbgcolor] = useState("white");
  // useEffect(() => {
  //   document.body.style.backgroundColor = bgcolor;
  // }, [bgcolor]);
  return (
    <>
     <div className="h-screen w-full flex flex-col items-center justify-center" style={{ backgroundColor: bgcolor }}>
        <button
          onClick={() => setbgcolor("black")}
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Black
        </button>
        <button
          onClick={()=>setbgcolor("yellow")}
          type="button"
          className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          yellow
        </button>
        <button
          onClick={()=>setbgcolor("green")}
          type="button"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          green
        </button>
        <button
          onClick={()=>setbgcolor("red")}
          type="button"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          red
        </button>
      </div>
    </>
  );
}
export default Buttonbg;
