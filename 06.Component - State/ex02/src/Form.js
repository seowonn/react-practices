import React, { useState } from 'react';
import './assets/Form.css';

export default function Form() {
    /**
     * useState는 React의 상태 관리 Hook이다. 
     * 상태가 변경되면 Foem 컴포넌트 전체가 다시 렌더링된다. 
     * 하지만 React가 실제 DOM 업데이트 시, 변경된 부분만 업데이트하도록 최적화해준다.!
     */
    /**
     * 제어된 컴포넌트: 입력 필드의 값이 상태에 의해 제어되는 방식
     */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);

    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post"
            onSubmit={(e) => {
                e.preventDefault();
            }}>
            <label htmlFor="name">이름</label>
            <input
                value={name}
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                // onChange: 이벤트 핸들러
                // e.target.value는 입력 필드의 현재 값.
                onChange={(e) => {
                    // 10자 제한한
                    setName(e.target.value.substring(0, 10));
                }} />

            <label htmlFor="email">이메일</label>
            <input
                value={email}
                id="email"
                name="email"
                type="text"
                autoComplete="off"
                onChange={(e) => {
                    setEmail(e.target.value);
                    
                    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    // re.test: 정규 표현식(re)를 사용하여 이메일이 유효한지(true/false)를 반환한다. 
                    const valid = re.test(e.target.value);
                    setValidEmail(valid);
                }}/>
            {
                email === '' ? null : (validEmail ? <b>O</b> : <b>X</b>)
            }
            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" autoComplete="off" />

            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender" />
                <label>남</label> <input type="radio" name="gender" />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select id="birthYear" name="birthYear">
                <option value=''>생년을 선택하세요</option>
                <option value='1997'>1997년</option>
                <option value='1998'>1998년</option>
                <option value='1999'>1999년</option>
                <option value='2000'>2000년</option>
                <option value='2001'>2001년</option>
            </select>

            <label htmlFor="description">자기소개</label>
            <textarea id="description" name="description" />

            <fieldset>
                <legend>약관동의</legend>
                <input id="agree-prov" type="checkbox" name="agreeProv" />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}