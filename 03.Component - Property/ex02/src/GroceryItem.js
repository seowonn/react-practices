import React from "react";

/*
    function(함수형 컴포넌트)를 사용한 이유: state나 lifecycle 메서드가 필요없고
    단순한 프레젠테이션 컴포넌트이므로 함수형 컴포넌트가 적절하다. 
*/
function GroceryItem({name, count}) {
    return (
        <li>
            <strong>{name}</strong>
            <span>{count}</span>
        </li>
    );
}

export default GroceryItem;