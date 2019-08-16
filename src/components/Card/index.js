import React, {Component} from 'react';
import './styles.styl'

import TextField from '@material-ui/core/TextField'
import BtnsForEditing from '../BtnsForEditing'
import BtnsForActions from '../BtnsForActions'

import task from '../HOCCard'
import ModalCard from "../ModalCard";

import {Link, Route} from 'react-router-dom';


class CardTask extends Component {
    onDragStart = (event, id) => {
        event.dataTransfer.setData("id", id);
    };

    render() {
        const {state, checkedOnPersonalMark, id, destroyCard, handleEditData, windowForEdit, editCard} = this.props;
        const path = `/task-board/${this.props.title.toLowerCase().replace(/\s/g, "-")}`;

        return (
            <React.Fragment>
                {state.render &&
                <div className='card' style={{background: checkedOnPersonalMark(this.props.priority)}} draggable
                     onDragStart={(e) => this.onDragStart(e, id)}
                     onDragEnd={destroyCard}>
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
                        (<Link to={path}>
                            <h1 className='card__title'>{this.props.title}</h1>
                            <p className='card__description'>{this.props.description}</p>
                        </Link>)
                    }
                    <div className="btns-for-actions">
                        {state.edit ?
                            (<BtnsForEditing windowForEdit={windowForEdit} editCard={editCard}/>) :
                            (<BtnsForActions windowForEdit={windowForEdit} destroyCard={destroyCard}/>)
                        }
                    </div>
                </div>
                }
                <Route path={path} component={() => <ModalCard title={this.props.title}
                                                               description={this.props.description}
                                                               priority={this.props.priority}
                                                               id={this.props.id}
                                                               decreaseCountCards={this.props.decreaseCountCards}
                                                               updateCards={this.props.updateCards}/>}/>
            </React.Fragment>
        );
    }
}

const Card = task(CardTask);

export default Card;