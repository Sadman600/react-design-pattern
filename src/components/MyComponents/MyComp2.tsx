import { useContext } from "react";
import { InputContext, TInputContext } from "../InputField/InputApp";

const MyComp2 = () => {
  const {name} = useContext(InputContext) as TInputContext;

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${name} again!`}</h2>
    </>
  );
};

export default MyComp2;
