import React, { useRef } from 'react';
import './assets/scss/App.scss';

export default function App() {
    const outerRef = useRef(null);
    const innerRef = useRef(null);

    return (
        // li가 많아지면 스크롤이 생기고 div가 늘어난다.
        <div 
            className={'App'}
            ref={outerRef}
            onScroll = {(e) => {
                // clientHeight: 화면의 높이, innerRef.current.clientHeight: 내부 리스트 전체 높이
                console.log(outerRef.current.scrollTop, outerRef.current.clientHeight, innerRef.current.clientHeight);
            }}>
            <div
                ref={innerRef}>
                <ul>
                    {
                        Array.from({length: 100}, (_, i) => i + 1).map((e) => <li key={e}>{`아이템 ${e}`}입니다.</li>)
                    }
                </ul>
            </div>
        </div>
    );
}