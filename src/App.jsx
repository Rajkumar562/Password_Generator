import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  // it allows you to create a reference to a DOM element without causing the component to re-render. Here it is used to select the current value of reference passed which is the input Element. Changing the value of a useRef doesn't trigger a re-render of the component. This makes it useful for storing values that you don't want to cause re-renders.

  const copyPassword = useCallback(() => {
    passwordRef.current?.select(); //to select the text of input field
    // passwordRef.current?.setSelectionRange(0,5) // will only select first 5 values of the field
    window.navigator.clipboard.writeText(password);
    // window is only present in react and client side development , it is not present in server side development like node.js
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz";
    if (num) s += "0123456789";
    if (char) s += "~!@#$%^&*()_+-={}[]`";

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * s.length);
      pass += s.charAt(idx);
    }
    setPassword(pass);
  }, [length, num, char, setPassword]); // if password is used callback will call again and again in infinite loop and we have added setPassword as the callback should remember / cache only when password is changed and saved

  // CallBack is used here for optimization
  // useEffect is to run the function if any of the dependency changes
  useEffect(() => {
    passwordGenerator();
  }, [length, num, char, passwordGenerator]);

  return (
    <div className="w-2/5 mx-auto px-4 py-3 my-8 font-bold text-green-300 bg-gray-500 rounded-xl">
      <h1 className="text-white text-center my-3">Password Generator</h1>

      <div className="flex rounded-xl overflow-hidden mb-4">
        <input
          ref={passwordRef}
          type="text"
          value={password}
          placeholder="password"
          className="oultine-none w-full py-1 px-3"
          readOnly
        />
        <button onClick={copyPassword} className="outline-none text-white bg-blue-800 px-4 py-2">
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />{" "}
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={num} id="NumberInput" onChange={() => setNum((prev) => !prev)} />{" "}
          <label htmlFor="NumberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={char} id="characterInput" onChange={() => setChar((prev) => !prev)} />{" "}
          <label htmlFor="characterInput">Special Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
