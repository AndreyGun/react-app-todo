import React, { Component } from  'react';

import './item-add-form.css'

// АНАЛОГИЧНО 1
export default class ItemAddForm extends Component {

    state = {
        label: ""
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
    };

    render() {
        return(
            <form className="item-add-form"
                onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={ this.onLabelChange }
                       placeholder="What need to be done"/>
                <button className="item-add-btn btn btn-info"> Add item</button>
            </form>
        )
    }
}

// ЭТО 1
// const ItemAddForm = ({ onItemAdded }) => {
//     return(
//         <div className="item-add-form">
//             <button className="item-add-btn btn btn-info"
//             onClick={ () => onItemAdded('hello') }
//             > Add item</button>
//         </div>
//     );
// }
// export default ItemAddForm;