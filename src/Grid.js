import React, { Component } from 'react';
import Box from './Box';

class Grid extends Component { 
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const width = (this.props.cols) * 14;
        const rowsArr = [];
        const boxClass = "";
        for (let i = 0; i < this.props.rows; i++) {
            for (let j = 0; j < this.props.cols; j++) {
                let boxId = i + "_" + j;

                boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
                rowsArr.push(
                    <Box 
                        boxClass = {boxClass}
                        key = {boxId}
                        boxId = {boxId}
                        row = {i}
                        col = {j}
                        selectBox = {this.props.selectBox}
                    />
                )
            }
        }
        return (
            <div className="grid" style={{width: width}}>
                {{rowsArr}}
            </div>
        );
    }
}

export default Grid;