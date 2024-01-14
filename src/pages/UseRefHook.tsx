import React, { useEffect, useRef } from "react";

const UseRefHook = () => {
  const myRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    myRef.current?.focus()
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={myRef}
          style={{ border: "1px solid tomato" }}
          type="text"
          name="name"
          id="name"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UseRefHook;
