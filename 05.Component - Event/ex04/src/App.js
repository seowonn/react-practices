import React, { useRef } from 'react';
import logo from './assets/images/react-logo.png'

function App(props) {
    // useRef: React에서 DOM 요소에 직접 접근하거나, 렌더링과 관계없이 값을 저장할 떄 사용하는 Hook
    const imgRef = useRef(null);

    const onKeyUpInput = (e) => {
        console.log("keyup " + e.target.value);
    }

    const onKeyDownInput = (e) => {
        console.log("keydown " + e.target.value);
    }

    const onFocusInput = (e) => {
        console.log("focus");
    }

    // 포커스(입력 커서)가 빠져나갈 때 발생하는 이벤트
    const onBlurInput = (e) => {
        console.log("blur");
    }

    const onMouseOverImg = (e) => {
        const offsetTop = imgRef.current.offsetTop;
        const offsetLeft = imgRef.current.offsetLeft;

        console.log(`onMouseOverImg x = ${e.clientX-offsetLeft} y = ${e.clientY - offsetTop}`);
    }

    const onMouseMoveImg = (e) => {
        console.log(`onMouseMoveImg x = ${e.clientX} y = $${e.clientY}`)
    }

    const onMouseOutImg = (e) => {
        console.log(`onMouseOutImg x = ${e.clientX} y = $${e.clientY}`)
    }

    return (
        <>
            <h2>Event Handler 예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력하세요'
                onKeyUp={onKeyUpInput}
                onKeyDown={onKeyDownInput}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
            />
            <br/>
            <br/>
            <img
                ref={imgRef}
                style={{
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                }}
                onMouseOver={onMouseOverImg}
                onMouseMove={onMouseMoveImg}
                onMouseOut={onMouseOutImg}
                src={logo}
            />
        </>
    );
}

export default App;