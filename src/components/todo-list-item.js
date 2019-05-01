import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({label, important = false}) => {

    const style = {
        color: important ? 'tomato' : 'green'
    }

    return  (
        <span className='todo-list-item'>
            <span className='todo-list-item-label'
                 style={style} >
              { label }
            </span>
            <button type="button"
                    className="btn btn-trash">
                <svg className="trash-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
            </button>
            <button type="button"
                    className="btn btn-exclamation"></button>
            </span>
        );
}

export default TodoListItem;