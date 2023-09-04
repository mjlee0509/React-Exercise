import React from "react";
// import ProductPage from "./pages/ProductPage";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  // return (
  //   <div className="wrapper">
  //     <button className="child-btn">버튼!</button>
  //   </div>
  // );

  // 위의 jsx 문법을 js 문법으로 변환하면 다음과 같다
  // const Button = React.createElement('button', {className: 'child-btn'}, '버튼!');
  // const Wrapper = React.createElement('div', {className : 'wrapper'}, Button);
  // return Wrapper;

  const [num, setNum] = useState(0);
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  

  return (

    <div>
      <input type="number"
      value={num} 
      onChange={(e) => setNum(e.target.value)}/> <br/>

      <input type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}/> <br/>

      <input type="checkbox"
      value={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}/>

      {isChecked ? <span>체크됨</span> : <span>체크안됨</span>}
    </div>
  )


}

export default App;
