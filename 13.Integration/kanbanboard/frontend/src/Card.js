import React from "react";
import { _Card } from './assets/scss/Card.scss';
import CardTitle from "./CardTitle";
import CardDetails from "./CardDetails";

function Card({no, title, description, status, tasks}) {
    return (
        <div className={ _Card }>
            <CardTitle title={title} />
            <CardDetails description={description} tasks={tasks} />
        </div>
    );
}

export default Card;