import React from 'react';
import Bordered from './styled/Bordered'


export default class PureCanvas extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
          <Bordered
            color="red"
            width={this.props.width}
            height={this.props.height}
          >
            <canvas
              width={this.props.width}
              height={this.props.height}
              ref={node =>
                node
                  ? this.props.contextRef(node.getContext('2d'))
                  : null
              }
              onClick={this.props.onClick}
            />
          </Bordered>
        );
    }
}