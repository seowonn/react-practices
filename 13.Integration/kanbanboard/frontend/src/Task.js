import React from 'react';
import { _Task } from './assets/scss/Task.scss';

function Task({task}) {
    return (
        <li className={ _Task }>
            <input type="checkbox" checked={task.done} value={task.name} />
            {task.name}
        </li>
    );
}

export default Task;