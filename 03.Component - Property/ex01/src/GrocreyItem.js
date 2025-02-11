import React from 'react';

// GroceryList의 자식 컴포넌트인 GroceryItem은 { name, count }를 
// 객체 구조 분해 (destructuring) 방식으로 받는다. 
// 원래는 props.name, props.count로 접근할 수도 있다. 
function GrocreyItem({name, count}) {
    return (
        <li>
            <strong>{name}</strong>
            <span>{count}</span>
        </li>
    );
}

export default GrocreyItem;