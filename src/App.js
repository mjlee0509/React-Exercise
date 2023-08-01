import React from "react";
import ProductPage from "./pages/ProductPage";

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

  return (
    // ProductPage 컴포넌트 렌더링
    <div>
      <ProductPage /> 
    </div>
  )


}

export default App;
