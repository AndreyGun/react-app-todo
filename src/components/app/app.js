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
            this.createTodoItem('Drink Coffe'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ]
    }

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            id: this.maxId++,
            done: false
        }
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
        const newItem = this.createTodoItem(text);
        
        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArray
            }
        });
    };
    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex( (el) => el.id === id );

        // update object
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        // construct new array
        return [
            ...arr.slice(0, idx), // add all elements before idx
            newItem,
            ...arr.slice(idx + 1)  // add all elements after idx
        ];
    }
    onToggleDone = (id) => {
        console.log('this is ', id);
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };
    onToggleImportant = (id) => {
        this.setState(({todoData}) =>{
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
        console.log('this is ', id);
    }
    render() {
        const { todoData } = this.state;
        const doneCount = todoData.filter( (el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div>
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                
                <TodoList 
                    todos={ todoData } 
                    onDeleted={ this.deleteItem }
                    onToggleDone={ this.onToggleDone }
                    onToggleImportant={ this.onToggleImportant }
                    />
                <AddItem 
                    onItemAdded={ this.addItem }
                />
            </div>
        );
    }
}

