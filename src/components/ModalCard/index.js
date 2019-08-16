import React, {Component} from 'react';
import './styles.styl'

import task from '../HOCCard'
import TextField from "@material-ui/core/TextField";
import BtnsForEditing from "../BtnsForEditing";
import BtnsForActions from "../BtnsForActions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

class Modal extends Component {
    render() {
        const {state, checkedOnPersonalMark, destroyCard, handleEditData, windowForEdit, editCard} = this.props;
        return (<div className='modal-card'>
                    <React.Fragment>
                        {state.render &&
                        <div className='card' style={{background: checkedOnPersonalMark(state.priority)}}>
                            {state.edit ?
                                (<React.Fragment>
                                    <TextField label="Title" value={state.valueTitleInput}
                                               style={{
                                                   marginBottom: 25
                                               }}
                                               InputProps={{
                                                   style: {
                                                       fontSize: '0.8rem'
                                                   }
                                               }}
                                               onChange={handleEditData('valueTitleInput')}/>
                                    <TextField label="Description"
                                               value={state.valueDescriptionInput}
                                               multiline={true}
                                               rows={3}
                                               rowsMax={4}
                                               style={{
                                                   marginBottom: 25
                                               }}
                                               InputProps={{
                                                   style: {
                                                       fontSize: '0.8rem'
                                                   }
                                               }}
                                               onChange={handleEditData('valueDescriptionInput')}/>
                                    <TextField type='number' value={state.valuePriorityInput} label="Priority"
                                               inputProps={{min: "1", max: "4", step: "1"}}
                                               style={{
                                                   marginBottom: 25
                                               }}
                                               InputProps={{
                                                   style: {
                                                       fontSize: '0.8rem'
                                                   }
                                               }}
                                               onChange={handleEditData('valuePriorityInput')}/>
                                </React.Fragment>) :
                                (<React.Fragment>
                                    <h1 className='card__title'>{state.title}
                                        <Link to='/task-board'>
                                            <FontAwesomeIcon icon={faTimes} className='close-modal'/></Link>
                                    </h1>
                                    <p className='card__description'>{state.description}</p>
                                </React.Fragment>)
                            }
                            <div className="btns-for-actions">
                                {state.edit ?
                                    (<BtnsForEditing windowForEdit={windowForEdit} editCard={editCard}/>) :
                                    (<BtnsForActions windowForEdit={windowForEdit} destroyCard={destroyCard}/>)
                                }
                            </div>
                        </div>
                        }
                    </React.Fragment>
                </div>
        );
    }
}

const ModalCard = task(Modal);

export default ModalCard;