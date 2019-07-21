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
        ],
        term: '',
        filter: 'all' // active , all , done
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
    search( items, term ) {

        if (term.length === 0 ) {
            return items;
        }

        return items.filter( (item) => {
            return item.label
                    .toLowerCase()
                     .indexOf(term.toLowerCase()) > -1;
        })
    }
    filter( items, filter ) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter( (item) => !item.done);
            case 'done':
                return items.filter( (item) => item.done);
            default:
                return items;
        }
    }
    onSearchItem = (term) => {
        this.setState({ term });
    }
    onFilterChange = (filter) => {
        this.setState({ filter });
    }
    render() {
        const { todoData, term, filter } = this.state;

        const visibleItems = this.filter(
                this.search(todoData, term), filter );

        const doneCount = todoData.filter( (el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div>
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel">
                    <SearchPanel 
                        onSearchItem={ this.onSearchItem }/>
                    <ItemStatusFilter 
                        filter={filter}
                        onFilterChange={this.onFilterChange}/>
                </div>
                
                <TodoList 
                    todos={ visibleItems } 
                    onDeleted={ this.deleteItem }
                    onToggleDone={ this.onToggleDone }
                    onToggleImportant={ this.onToggleImportant }/>
                <AddItem 
                    onItemAdded={ this.addItem }/>
            </div>
        );
    }
}

