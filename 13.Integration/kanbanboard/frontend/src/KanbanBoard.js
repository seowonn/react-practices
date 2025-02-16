import React from 'react';
import CardList from './CardList';
import './assets/scss/KanbanBoard.scss';
import data from './assets/json/data';

function KanbanBoard() {
    const toDoData = data.filter((item) => item.status == "ToDo");
    const doneData = data.filter((item) => item.status == "Done");
    const doingData = data.filter((item) => item.status == "Doing");

    return (
        <div className={ 'Kanban_Board' }>
            <CardList cardList={toDoData} status={"ToDo"} />
            <CardList cardList={doneData} status={"Done"} />
            <CardList cardList={doingData} status={"Doing"} />
        </div>
    );
}

export default KanbanBoard;