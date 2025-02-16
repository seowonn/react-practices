import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// render: React의 가상 DOM을 실제 HTML DOM에 적용하는 역할
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)