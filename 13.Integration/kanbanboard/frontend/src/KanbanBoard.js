import React from 'react';
import CardList from './CardList';
import './assets/scss/KanbanBoard.scss';
import data from './assets/json/data';

function KanbanBoard() {

    const statuses = ["ToDo", "Done", "Doing"];

    // JS에서 {}는 기본적으로 객체이며, key-value 형태로 데이터를 저장할 수 있다. 
    const groupedData = {};
    data.forEach(item => {
        if(statuses.includes(item.status)) {
            groupedData[item.status] = groupedData[item.status] || [];
            groupedData[item.status].push(item);
        }
    })
    
    return (
        <div className={ 'Kanban_Board' }>
            {
                statuses.map(status => (
                    <CardList key={status} cardList={groupedData[status] || []} status={status} />
                ))
            }
        </div>
    );
}

export default KanbanBoard;