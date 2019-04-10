import React from 'react';


export default class PureCanvas extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
          <canvas
            width={this.props.width}
            height={this.props.height}
            ref={node =>
              node
                ? this.props.contextRef(node.getContext('2d'))
                : null
            }
            onClick={this.props.onClick}
            onMouseMove={this.props.onMouseMove}
            onMouseDown={this.props.onMouseDown}
            onMouseUp={this.props.onMouseUp}
          />
        );
    }
}