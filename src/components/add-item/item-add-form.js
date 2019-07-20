import React, { Component } from  'react';

import './item-add-form.css'

// АНАЛОГИЧНО 1
export default class ItemAddForm extends Component {
    render() {
        return(
            <div className="item-add-form">
                <button className="item-add-btn btn btn-info"
                onClick={ () => this.props.onItemAdded('hello') }
                > Add item</button>
            </div>
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