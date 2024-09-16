import { useRef, useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref=useRef(null);
  const copypasstoclipboard=useCallback(()=>{passwordref.current?.select();
    passwordref.current?.setSelectRange(0,99);
window.navigator.clipboard.writeText(password)
  },[password])
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789";
    }
    if (character) {
      str = str + "!@#$%^&*()";
    }
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character,setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg  bg-orange-500 px-4 my-8">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="className='flex shadow rounded-lg overflow-hidden mb-4'">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordref}
          />
          <button onClick={copypasstoclipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              className="cursor-pointer"
              onChange={() => {
                setLength(event.target.value);
              }}
            />
            <label className="text-white">length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberinput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label className="text-white">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label className="text-white">Character</label> 

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
