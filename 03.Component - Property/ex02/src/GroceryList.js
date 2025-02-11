import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList({groceries}) {

    /**
     * 여기서 groceryItems는 <GroceryItem> 컴포넌트들의 배열이다.
     * {} 를 통해 JSX에서 JavaScript 표현식을 삽입할 수 있다. 
     * 이후 React가 이를 HTML 요소로 렌더링한다. 
     */
    // const groceryItems = [];
    // groceries.forEach((grocery) => {
    //     groceryItems.push(<GroceryItem name={grocery.name} count={grocery.count}/>);
    // });

    // return <ul>{groceryItems}</ul>;

    /**
     * map() 방식을 사용하는 이유: map()은 원본 배열을 변경하지 않고, 새로운 배열을 반환한다. 
     *  변수 선언 필요없이 JSX 내부에서 바로 변환이 가능하다. 
     * 여기서 새로운 배열이란, const newArray = groceries.map()의 newArray를 말한다. 
     */
    return (
        <ol className={"grocery-list"}>
            {
                groceries.map((grocery, index) => <GroceryItem 
                                                        key={index}
                                                        name={grocery.name}
                                                        count={grocery.count}/>)
            }
        </ol>
    );
}

export default GroceryList;