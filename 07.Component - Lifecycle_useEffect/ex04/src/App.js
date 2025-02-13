import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {

    const getCurrentTime = () => {
        const now = new Date();

        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
        }
    }

    const [currentTime, setCurrentTime] = useState(getCurrentTime());
    const [ticks, setTicks] = useState(0);

    // 클래스형 컴포넌트의 componentDidMount() 함수와 같다.
    // mount, unmount 시에는 두번째 인자로 빈 배열 넣기, 아니라면 계속 렌더링됨.
    useEffect(() => {
        console.log("App: mount될 때 타이머 시작");

        // prevTicks 이용: setState에 함수를 전달하면 React가 자동으로 제공하는
        // 이전 상태 값
        const intervalId = setInterval(() => {
            setTicks(prevTicks => prevTicks + 1);
            setCurrentTime(getCurrentTime());
        }, 1000);

        // unmount할 때 실행할 코드 작성
        return () => {
            console.log("App 타이머 정리");
            clearInterval(intervalId); // clousure
        }
    }, []);
    // useEffect 함수의 두번째 인자에 [](빈 배열)을 넣으면 
    // 처음 컴포넌트가 마운트(처음 렌더링) 될 때 한 번만 실행된다.

    return (
        <Clock
            title={`ex04: Clock Component II: ${ticks}`}
            hours={currentTime.hours}
            minutes={currentTime.minutes}
            seconds={currentTime.seconds} />
    );
}