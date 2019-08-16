import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

class BtnsForEditing extends Component {
    render() {
        return (
            <React.Fragment>
                <button className="cancel-edit" onClick={() => this.props.windowForEdit(false)}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </button>
                <button className="submit-edit" onClick={this.props.editCard}>
                    <FontAwesomeIcon icon={faCheckCircle}/>
                </button>
            </React.Fragment>
        );
    }
}

export default BtnsForEditing;