import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNUmberAllowed] = useState(false);
  const [charAllowed, setCahrAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_";
    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    console.log("copy works");
  };

  return (
    <>
      <div className="bg-black w-full h-screen p-4">
        <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
          <h1 className="text-white font-bold text-center">
            Password Generator
          </h1>
          <div className="flex rounded-lg overflow-hidden my-4">
            <input
              className="outline-none bg-white w-full py-1 px-3"
              type="text"
              placeholder="Password"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              className="bg-blue-600 text-white font-bold hover:bg-blue-700 px-3 py-2"
              onClick={copyToClipboard}
            >
              copy
            </button>
          </div>
          <div className="flex space-x-2 text-orange-400 text-[20px]">
            <input
              defaultValue={length}
              type="range"
              id="length"
              max={100}
              min={6}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">length{length}</label>
            <input
              type="checkbox"
              id="number"
              defaultChecked={numberAllowed}
              onChange={() => setNUmberAllowed((prev) => !prev)}
            />
            <label htmlFor="number">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="character"
              onChange={() => setCahrAllowed((prev) => !prev)}
            />
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
