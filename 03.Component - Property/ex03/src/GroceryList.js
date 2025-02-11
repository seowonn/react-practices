import React, { Component } from 'react';
import GrocreyItem from './GrocreyItem';

// 클래스 컴포넌트의 특징
// 1. 클래스 상속을 사용한다.(Component)
class GroceryList extends Component {
    // 2. 생성자를 통해 props를 초기화한다.
    constructor(props) {
        super(props);
    }

    // 3. render() 메서드 안에서 return을 사용한다. 
    // -> 클래스형 컴포넌트는 render()를 통해 UI를 반환해야 한다. 
    render() {
        return (
            <ol className={"grocery-list"}>
                {
                    // 4. props를 접근할 때 this.props를 사용한다. 
                    this.props.groceries.map((grocery, index) => <GrocreyItem 
                                                            key={index}
                                                            name={grocery.name}
                                                            count={grocery.count} />)
                }
            </ol>
        );
    }
}

export default GroceryList;