import React, {Component} from 'react';
import './styles.styl'

import {lanes} from '../../helpers/data.json'

import Line from '../Line'
import SearchCards from "../SearchCards";

class Board extends Component {
    render() {
        return (
            <React.Fragment>
                <SearchCards/>
                <div className='board'>
                    {lanes.map(line => <Line id={line.id}
                                             key={line.id}/>)}
                </div>
            </React.Fragment>
        );
    }
}

export default Board;