import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

    render () {
        
        const { label, onDeleted,
                onToggleDone,
                onToggleImportant,
                done, important } = this.props;

        let classNames = 'todo-list-item';
        if ( done ) {
            classNames += ' done';
        }
        if ( important ) {
            classNames += ' important';
        }
        return  (
            <span className='list-group-item'>
                <span className={ classNames }
                    onClick= { onToggleDone } >
                    { label }
                </span>
                <button type="button"
                        className="btn btn-outline-success"
                        onClick={ onToggleImportant } >
                        <i className="fa fa-exclamation" />
                </button>
                <button type="button"
                        className="btn btn-outline-danger"
                        onClick={ onDeleted } >
                        <i className="fa fa-trash-o" />
                </button>
            </span>
        );
   }
}