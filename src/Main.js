import React, { Component } from 'react';
import './index.css';
import Grid from './Grid';

class Main extends Component {
    constructor(props) {
        super(props);
        this.speed = 100;
        this.rows = 30;
        this.cols = 50;
        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        }
    }

    componentDidMount() {
        this.seed();
    }

    render() {
        return (
            <div>
                <h1>The Game of Life</h1>
                    <Grid 
                        gridFull = {this.state.gridFull}
                        rows = {this.rows}
                        cols = {this.cols}
                        selectBox = {this.selectBox}
                    />
                <h2>Generations: {this.state.generation}</h2>
            </div>
        );
    }

    selectBox = (row, cols) => {
        let gridCopy = arrayClone(this.state.gridFull);
        gridCopy[row][cols] = !gridCopy[row][cols];
        this.setState({
            gridFull: gridCopy
        });
    }

    seed = () => {
        let gridCopy = arrayClone(this.state.gridFull);
        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++){
                if (Math.floor(Math.random()) * 4 ===1) {
                    gridCopy[i][j] = true;
                }
            }
        }
    }
}

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
}

export default Main;