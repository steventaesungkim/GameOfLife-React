import React, { Component } from 'react';
import './index.css';
import Grid from './Grid';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            generation: 0
        }
    }

    render() {
        return (
            <div>
                <h1>The Game of Life</h1>
                <Grid />
                <h2>Generations: {this.state.generation}</h2>
            </div>
        );
    }
}

export default Main;