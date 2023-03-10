import { useCallback } from "react";
import { useState, memo } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";


export const App = memo(() => {
  console.log("Appレンダリング");
  
  const [num, setNum] = useState(0);
  
  const onClickButton = () => {
    setNum((oldNum) => oldNum + 1);
  };

  const onClickReset =  useCallback(() => {
    setNum(0);
  },[]);
  
  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      {/*↓Propsとして関数を設定*/}
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});