import React from 'react';
import PureCanvas from '../presentational/PureCanvas';
import Bordered from '../presentational/styled/Bordered';
import axios from 'axios';
import _ from 'lodash';

const API_GET_URL = id => `http://localhost:3000/api/whiteboard/${id}`;

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.saveContext = this.saveContext.bind(this);
        this.drawPoint = this.drawPoint.bind(this);
        this.drawLine = this.drawLine.bind(this);
        this.onMouseDownHandler = this.onMouseDownHandler.bind(this);
        this.getCoordsFromEvent = this.getCoordsFromEvent.bind(this);
        this.onMouseUpHandler = this.onMouseUpHandler.bind(this);
        this.getDataUrl = this.getDataUrl.bind(this);
        this.debouncedSetImageData = _.debounce(this.props.imageDataHandler, 500);

        this.state = {
            points: [],
            isMouseDown: false,
            color: this.props.color,
            didPaintImage: false,
            canvasId: this.props.canvasId
        }
    }
    
    componentDidMount() {
        if (this.state.canvasId) {
            axios.get(API_GET_URL(this.state.canvasId))
                .then(response => {
                    const image = new Image();
                    image.src = response.data.URI;
                    image.onload = () => {
                        this.ctx.drawImage(image, 0, 0);
                    };
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }

    saveContext(ctx) {
        this.ctx = ctx;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
    }

    getDataUrl() {
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

        this.debouncedSetImageData(this.getDataUrl()); 
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
            points: this.state.points.concat([[-1, this.props.color]]) //-1 adds a marker to the array to seperate lines
        });
    }
    onMouseUpHandler(e) {
        this.drawPoint(e);
        this.setState({
            isMouseDown: false,
            points: this.state.points.concat([[-1, this.props.color]]) //-1 adds a marker to the array to seperate lines
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
          <Bordered
            color={this.props.color}
            width={500}
            height={500}
          >
            <PureCanvas
              onClick={this.drawPoint}
              onMouseMove={this.drawLine}
              onMouseDown={this.onMouseDownHandler}
              onMouseUp={this.onMouseUpHandler}
              contextRef={this.saveContext}
              width={500}
              height={500}
            />
          </Bordered>
        );
    }
}