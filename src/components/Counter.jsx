import React from 'react'
import { useState } from 'react'

export default function Counter() {

//     // useState 초기값을 0으로 지정
//     const [count, setCount] = useState(0);

//     // 버튼 클릭시 이벤트 함수 정의
//   const updateCount = (arg) => {
//     setCount (count + arg);
//   } 

    // 일반 변수로 state를 다뤄보자
    let count = 0;
    const updateCount = (arg) => {
        count = count + arg;
    }



  return (
    <div>
        <button onClick={() => updateCount(-1)}>-</button>
        <span>{count}</span>
        <button onClick={() => updateCount(+1)}>+</button>
    </div>
  )
}
