import React from 'react';
import PureCanvas from '../presentational/PureCanvas';

/**
 * Still need to figure out issue where the mouse is down 
 * and the user leaves the canvas. The state variable 
 * gets left as true, even if the user their mouse up.
 * Update: This also occurs if the user right clicks inside of the canvas and then left clicks. (Mouse down, right click, mouse down)
 * Update2: This also occurs if the user holds mouse down outside of the canvas area and then releases the mouse inside of the canvas
 */

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.saveContext = this.saveContext.bind(this);
        this.drawPoint = this.drawPoint.bind(this);
        this.drawLine = this.drawLine.bind(this);
        this.onMouseDownHandler = this.onMouseDownHandler.bind(this);
        this.getCoordsFromEvent = this.getCoordsFromEvent.bind(this);
        this.onMouseUpHandler = this.onMouseUpHandler.bind(this);
        this.getColor = this.getColor.bind(this);
        this.setColor = this.setColor.bind(this);
        this.getDataUrl = this.getDataUrl(this);

        this.state = {
            points: [],
            isMouseDown: false,
            color: "#000000"
        }
    }

    saveContext(ctx) {
        this.ctx = ctx;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;

    }
    getDataUrl(){
        return this.ctx.canvas.toDataURL("image/png");
    }

    componentDidUpdate() {
        this.ctx.fillStyle = this.props.color;
        this.ctx.strokeStyle = this.props.color;
        let prevPoint = this.state.points[0];
        this.state.points.forEach(point => {
            // this.ctx.fillRect(point[0], point[1], 1, 1)
            this.ctx.beginPath();

            // If the point is -1,-1 then the mouse was released and the line should have a break
            if (prevPoint[0] < 0 || point[0] < 0) {
                // skip ahead to the next point without connecting the lines.

                this.ctx.fillStyle = prevPoint[1];
                this.ctx.strokeStyle = prevPoint[1];

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
        if (coords[0] < 10 || coords[0] > 490 || coords[1] < 10 || coords[1] > 490){
            this.state.isMouseDown = false;
        }
        return coords;
    };    

    onMouseDownHandler(e) {

        this.drawPoint(e);

        this.setState({
            isMouseDown: true,
            points: this.state.points.concat([[-1, this.state.color]]) //-1 adds a marker to the array to seperate lines
        });
    }
    onMouseUpHandler(e) {
        this.drawPoint(e);
        this.setState({
            isMouseDown: false,
            points: this.state.points.concat([[-1, this.state.color]]) //-1 adds a marker to the array to seperate lines
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
    setColor(color){
        this.state.color = color;
    }
    getColor(){
        return this.state.color;
    }

    render() {
        return (
            <PureCanvas
                onClick={this.drawPoint}
                onMouseMove={this.drawLine}
                onMouseDown={this.onMouseDownHandler}
                onMouseUp={this.onMouseUpHandler}
                contextRef={this.saveContext}
                width={500}
                height={500}
                color={this.props.color}
            />
        );
    }
}