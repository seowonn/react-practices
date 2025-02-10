// app.js은 클라이언트 측에서 실행되는 파일이다.

// 순수 JavaScript를 사용하여 직접 DOM을 조작하는 방식
function App() {
    const App = document.createElement('div');
    App.textContent = "Hello World";

    return App;
}

// 전통적인 DOM API를 조작하는 방식식
document.getElementById("root").appendChild(App());