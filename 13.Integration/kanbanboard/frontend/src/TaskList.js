import React from 'react';
import { Task_List } from './assets/scss/TaskList.scss'
import Task from './Task';

function TaskList({tasks}) {
    return (
        <div className={ Task_List }>
                {
                    tasks.map((task) => (
                        <ul>
                            <Task task={task}/>
                        </ul>
                    ))
                }
        </div>
    );
}

export default TaskList;