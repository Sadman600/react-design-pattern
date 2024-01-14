import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef();

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //   };

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  //   useEffect(() => {
  //     myRef.current?.focus();
  //   }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
      {/* <form onSubmit={handleSubmit}> */}
      <input
        //   ref={myRef}
        value={inputValue}
        onChange={handleChange}
        style={{ border: "1px solid tomato" }}
        type="text"
        name="name"
        id="name"
      />
      <button type="submit">submit</button>
      {/* </form> */}
    </div>
  );
};

export default UseRefHook;
