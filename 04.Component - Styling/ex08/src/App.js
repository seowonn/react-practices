import React from 'react';
import Header from './Header';
import './assets/scss/App.scss';

// 익명 함수를 통해 1개만 내보낼 수 있음.
export default function() {
    return (
        <div id={'App'}>
            <Header />
        </div>
    )
}

