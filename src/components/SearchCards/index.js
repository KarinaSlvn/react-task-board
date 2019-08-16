import React, {Component} from 'react';
import './styles.styl'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSync, faListAlt} from '@fortawesome/free-solid-svg-icons'

import {Link, Redirect} from 'react-router-dom';

class SearchCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: '',
            submitValue: false
        }
    }

    handleChange = (e) => {
        this.setState({
            currentValue: e.target.value
        });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                submitValue: true
            })
        }
    };

    render() {
        const path = `/task-board/${this.state.currentValue.toLowerCase().replace(/\s/g, "-")}`;
        return (
            <React.Fragment>
                <div className='search-cards'>
                    <div className="search-title">Outlook Taskboard</div>
                    <button className="refresh-search" onClick={() => {
                        this.setState({currentValue: ''});
                    }}>
                        <FontAwesomeIcon icon={faSync}/>
                    </button>
                    <input type="text" placeholder="Filter" value={this.state.currentValue} className='search-input'
                           onChange={(e) => this.handleChange(e)}
                           onKeyPress={(e) => this.handleKeyPress(e)}/>
                    <Link to={path} className="search-btn">
                        <FontAwesomeIcon icon={faListAlt}/>
                    </Link>
                </div>
                {this.state.submitValue && <Redirect to={path}/>}
            </React.Fragment>
        );
    }
}

export default SearchCards;