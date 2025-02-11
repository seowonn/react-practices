import React from 'react';

function GrocreyItem({name, count}) {
    return (
        <li>
            <strong>{name}</strong>
            <span>{count}</span>
        </li>
    );
}

export default GrocreyItem;