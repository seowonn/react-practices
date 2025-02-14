import React from 'react';
import TaskList from './TaskList';

function CardDetails({description, tasks}) {
    return (
        <div>
            {description}
            <TaskList tasks={tasks} />
        </div>
    );
}

export default CardDetails;