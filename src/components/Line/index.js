import React, {Component} from 'react';
import './styles.styl'

import {lanes} from '../../helpers/data.json'
import Card from '../Card'
import {id} from '../../helpers/uniq_id'

class Line extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.sortedCards(this.Cards()),
            countCard: this.Cards().length
        };
    }

    updateCards = (value, id, isDelete) => {
        if (isDelete) {
            this.setState({
                cards: this.state.cards.filter(card => card.id !== id)
            })
        } else {
            this.setState({
                cards: this.state.cards.map(card => {
                if (card.id === id) {
                    card.title = value.title;
                    card.description = value.description;
                    card.priority = value.priority;
                }
                return card
            })});
        }
    };

    Cards = () => {
        return lanes.reduce((acc, line) => {
            if (line.id === this.props.id) return line.cards;
            return acc;
        }, [])
    };

    sortedCards = (cards) => {
        return cards.sort((prevCard, nextCard) => prevCard.priority - nextCard.priority)
    };

    mappingCards = (arr) => {
        return arr.map(card => <Card title={card.title}
                                     description={card.description}
                                     key={card.id}
                                     id={card.id}
                                     priority={card.priority}
                                     decreaseCountCards={this.decreaseCountCards}
                                     updateCards={this.updateCards}/>)
    };

    renderCards = () => {
        return this.mappingCards(this.state.cards)
    };

    addNewCard = (card) => {
        this.setState({
            countCard: this.state.countCard + 1
        });
        this.state.cards.push(card);
    };

    onDragOver = (e) => {
        e.preventDefault()
    };

    onDrop = (e) => {
        const id = e.dataTransfer.getData("id");
        const dragCard = {};
        lanes.forEach(line => {
            const card = line.cards.filter(card => card.id === id)[0];
            for (let property in card) {
                dragCard[property] = card[property];
            }
        });
        this.addNewCard(dragCard)
    };

    decreaseCountCards = () => {
        this.setState({
            countCard: this.state.countCard - 1
        });
    };

    render() {
        return (
            <div className='lane' onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e)}>
                <header className="lane__title">
                    {this.props.id}
                    <button className="add-cards" onClick={() => this.addNewCard({
                        "id": id(),
                        "title": "New task",
                        "label": "30 mins",
                        "description": "You can write something",
                        "priority": 4
                    })}>+
                    </button>
                    <div className="count-card">{this.state.countCard}</div>
                </header>
                <div className="cards">
                    {this.renderCards()}
                </div>
            </div>
        );
    }
}

export default Line;

