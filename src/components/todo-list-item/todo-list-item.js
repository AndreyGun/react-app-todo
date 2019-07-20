import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

    constructor() {
        super();

        this.state = {
            done: false,
            important: false
        }
        this.onLabelClick = () => {
            console.log(`Done: ${this.props.label}`);
            this.setState( ( {done} ) => {
                return {
                    done: !done
                }
            });
        }
        this.onMarkImportant = () => {
            // this.setState({
            //     important: true
            // });
            this.setState( ( {important} ) => {
                return {
                    important: !important
                }
            })
        }
        this.removeItem = () => {
            console.log( this );
        }
    }

    render () {
        const { label, onDeleted } = this.props;
        const { done, important} = this.state;

        let classNames = 'todo-list-item';
        if ( done ) {
            classNames += ' done';
        }
        if ( important ) {
            classNames += ' important';
        }
        return  (
            <span className='list-group-item'>
                <span className={classNames}
                    onClick= { this.onLabelClick } >
                    { label }
                </span>
                <button type="button"
                        className="btn btn-outline-success"
                        onClick={this.onMarkImportant} >
                        <i className="fa fa-exclamation" />
                </button>
                <button type="button"
                        className="btn btn-outline-danger"
                        onClick={onDeleted} >
                        <i className="fa fa-trash-o" />
                </button>
            </span>
        );
   }
}