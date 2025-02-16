import React from "react";
import Card from './Card';
import { Card_List } from './assets/scss/CardList.scss';

function CardList({ cardList, status }) {

    return (
        <div className={ Card_List }>
            <h1>{status}</h1>
            {cardList.map((card) => (
                <div key={card.no}>
                    <Card
                        key={card.no}
                        no={card.no}
                        title={card.title}
                        description={card.description}
                        status={card.status}
                        tasks={card.tasks}
                        />
                </div>
            ))}
        </div>
    );
}

export default CardList;