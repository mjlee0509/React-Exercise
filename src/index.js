import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// "root"라는 div를 react-dom의 최상위 요소로
const RootElement = document.getElementById("root")
const root = ReactDOM.createRoot(RootElement);

// 하위 요소 렌더링
root.render(
  // React.StrictMode : 디버깅 도구. 지금 당장 필요하진 않을듯
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);