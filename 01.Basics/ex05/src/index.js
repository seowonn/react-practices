import ReactDOM from 'react-dom/client';
import {App} from './app.js';

// React는 Virtual DOM을 활용하여 변경이 필요한 부분만 업데이트한다.

// document.getElementsById("root").appendChild(App());
// createRoot()를 사용하여 React 앱을 루트(root) DOM 노드에 연결하게 된다.
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(App())는 React 방식으로 UI를 렌더링하고 변경을 감지하여 필요한 부분만 업데이트할 수 있도록 한다.
root.render(App());