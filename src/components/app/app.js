import React from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

import './app.css'

const App = () => {

    const todoData = [
        {label: 'Drink Coffe', important: false, id: 1 },
        {label: 'Make Awesome App', important: true, id: 2 },
        {label: 'Have a lunch', important: false, id: 3 },
    ];

    return (
        <div>
            <AppHeader toDo={1} done={3} />
            <div className="top-panel">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            
            <TodoList 
                todos={todoData} 
                onDeleted={ (id) => console.log(`delete id: ${id}`) }
                />
        </div>
    );
}

export default App;

