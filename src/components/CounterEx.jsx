import React from 'react'
import { useState } from 'react';

export default function CounterEx() {

    const [number, setNumber] = useState(0);

    const plusNum = () => {
        setNumber(number + 1);
        // console.log(number);
        // 여기서 console.log로 number 값을 찍어보면 업데이트되기 전의 값이 뜬다. 왜??🤔 (NOTE-07.md 참고)
    };

    // 따라서, 업데이트 후의 값을 찍어보기 위해서는 이벤트 핸들러 함수가 실행되고 난 후의 시점, 즉 함수 밖에서 console.log를 찍어주자.
    console.log(number);

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={plusNum}>+1</button>
    </div>
  )
}
