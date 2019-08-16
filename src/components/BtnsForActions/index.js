import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

class BtnsForActions extends Component {
    render() {
        return (
            <React.Fragment>
                <button className="edit-card" onClick={() => this.props.windowForEdit(true)}>
                    <FontAwesomeIcon icon={faEdit}/>
                </button>
                <Link to='/task-board'>
                    <button className="delete-card" onClick={this.props.destroyCard}>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                </Link>
            </React.Fragment>
        );
    }
}

export default BtnsForActions;