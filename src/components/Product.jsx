import React from 'react'

// export default function Product(props) {
//   return (
//     <div>
//         <img src={props.url} alt={props.alt} />
//         <div>{props.name}</div>
//         <div>{props.price}</div>
//     </div>
//   )
// }

// 이것을 js 문법으로 **구조분해할당** 
export default function Product({url, alt, name, price}) {
    // 번거롭게 props.를 반복해서 적어줄 필요가 없어진다
    return (
        <div>
            <img src={url} alt={alt} />
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
}
