import React from "react";
import Card from './Card';
import { Card_List } from './assets/scss/CardList.scss';

function CardList({ cardList, status }) {

    return (
        <div className={ Card_List }>
            <h1>{status}</h1>
            {
                cardList.map(card => 
                    <Card
                        key={card.no}
                        title={card.title}
                        description={card.description}
                        tasks={card.tasks}
                    />
            )}
        </div>
    );
}

export default CardList;