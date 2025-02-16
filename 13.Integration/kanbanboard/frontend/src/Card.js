import React, { useState } from "react";
import { _Card, Card_Title, Card_Title_Open } from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({ title, description, tasks}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={ _Card }>
            <div
                className={ isOpen ? [Card_Title, Card_Title_Open].join(' ') : Card_Title }
                onClick={() => setIsOpen(!isOpen)}>
                {title}
            </div>
            <div>
                {description}
                {isOpen && <TaskList tasks={tasks} />}
            </div>
        </div>
    );
}

export default Card;