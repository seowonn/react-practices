import React from 'react';
import GrocreyItem from './GrocreyItem';

function GroceryList(props) {
    return (
        <ol className={"grocery-list"}>
            <GrocreyItem name={'bread'} count={10}/>
            <GrocreyItem name={'milk'} count={20}/>
            <GrocreyItem name={'egg'} count={30}/>
        </ol>
    );
}

export default GroceryList;