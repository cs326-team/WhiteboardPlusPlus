import React from 'react';
import PureCanvas from '../presentational/PureCanvas';

/**
 * Still need to figure out issue where the mouse is down 
 * and the user leaves the canvas. The state variable 
 * gets left as true, even if the user their mouse up.
 */

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.saveContext = this.saveContext.bind(this);
        this.drawPoint = this.drawPoint.bind(this);
        this.drawLine = this.drawLine.bind(this);
        this.toggleIsMouseDown = this.toggleIsMouseDown.bind(this);
        this.getCoordsFromEvent = this.getCoordsFromEvent.bind(this);

        this.state = {
            points: [],
            isMouseDown: false
        }
    }

    saveContext(ctx) {
        this.ctx = ctx;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
    }

    componentDidUpdate() {
        this.ctx.fillStyle = this.props.color;
        this.ctx.strokeStyle = this.props.color;
        let prevPoint = this.state.points[0];
        this.state.points.forEach(point => {
            // this.ctx.fillRect(point[0], point[1], 1, 1)
            this.ctx.beginPath();

            // If the point is -1,-1 then the mouse was released and the line should have a break
            if (prevPoint[0] === -1) {
                // skip ahead to the next point without connecting the lines.
                prevPoint = point;
            } else {
                this.ctx.moveTo(prevPoint[0], prevPoint[1]);
                this.ctx.lineTo(point[0], point[1]);
                this.ctx.stroke();
            }
            prevPoint = point;
        });
    }

    getCoordsFromEvent (mouseEvent) {
        const { x, y } = mouseEvent.target.getBoundingClientRect();
        const [xOffset, yOffset] = [x, y];
        const { clientX, clientY } = mouseEvent;

        // +1 to account for border, may not be necessary, need to verify
        const coords = [
          Math.round(clientX - xOffset + 1),
          Math.round(clientY - yOffset + 1)
        ];

        return coords;
    };    

    toggleIsMouseDown(e) {
        this.drawPoint(e);

        this.setState({
            isMouseDown: !this.state.isMouseDown,
            points: this.state.points.concat([-1, -1]) //-1 adds a marker to the array to seperate lines
        });
    }

    // adds point to canvas  
    drawPoint(e) {
        const coords = this.getCoordsFromEvent(e);
        this.setState({ points: this.state.points.concat([coords]) });
    }

    drawLine(e) {
        if(this.state.isMouseDown) {
            this.drawPoint(e);
        }
    }

    render() {
        return (
            <PureCanvas
                onClick={this.drawPoint}
                onMouseMove={this.drawLine}
                onMouseDown={this.toggleIsMouseDown}
                onMouseUp={this.toggleIsMouseDown}
                contextRef={this.saveContext}
                width={300}
                height={300}
                color={this.props.color}
            />
        );
    }
}