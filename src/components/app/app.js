import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

import './app.css'

 export default class App extends Component {

    //  НОМЕР 1
    // constructor() {
    //     super();
    //     this.state = {
    //         todoData: [
    //             {label: 'Drink Coffe', important: false, id: 1 },
    //             {label: 'Make Awesome App', important: true, id: 2 },
    //             {label: 'Have a lunch', important: false, id: 3 },
    //         ]
    //     }
    // }

    maxId = 100;

    //  АНАЛОГИЧНО НОМЕРУ 1
    state = {
        todoData: [
            {label: 'Drink Coffe', important: false, id: 1 },
            {label: 'Make Awesome App', important: true, id: 2 },
            {label: 'Have a lunch', important: false, id: 3 },
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex( (el) => el.id === id );
            const newArray = [
                ...todoData.slice(0, idx), // add all elements before idx
                ...todoData.slice(idx + 1)  // add all elements after idx
            ];
            return {
                todoData: newArray
            }
        });
    }
    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }
        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArray
            }
        });


    }
    render() {
        return (
            <div>
                <AppHeader toDo={1} done={3} />
                <div className="top-panel">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                
                <TodoList 
                    todos={this.state.todoData} 
                    onDeleted={ this.deleteItem }
                    />
                <AddItem 
                    onItemAdded={ this.addItem }
                />
            </div>
        );
    }
}

