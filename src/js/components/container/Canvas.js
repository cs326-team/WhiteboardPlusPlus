import React from 'react';
import PureCanvas from '../presentational/PureCanvas';


export default class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.saveContext = this.saveContext.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.state = {
            points: []
        }
    }

    saveContext(ctx) {
        this.ctx = ctx;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
    }

    componentDidUpdate() {

        this.ctx.fillStyle = 'red';
        this.state.points.forEach(point => this.ctx.fillRect(point[0], point[1], 1, 1));
    }

    onClickHandler(e) {
        const { x, y } = e.target.getBoundingClientRect();
        const [xOffset, yOffset] = [x, y];
        const { clientX, clientY } = e;

        // +1 to account for border, may not be necessary, need to verify
        const coords = [Math.round(clientX - xOffset + 1), Math.round(clientY - yOffset + 1)];
        this.setState({ points: this.state.points.concat([coords]) });
    }

    render() {
        return (
            <div>
                <h1>Hello, canvas.</h1>
                <PureCanvas
                    onClick={this.onClickHandler}
                    contextRef={this.saveContext}
                    width={300}
                    height={300}
                />
            </div>
        );
    }
}