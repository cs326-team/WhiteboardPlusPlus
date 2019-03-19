'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var divStyle = {
  fillStyle: 'lightgray',
  outline: 'black 3px solid',
  width: '640px',
  height: '400px'
};
// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var Canvas = function (_React$Component) {
  _inherits(Canvas, _React$Component);

  function Canvas() {
    _classCallCheck(this, Canvas);

    return _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this));
  }

  _createClass(Canvas, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var canvas = this.refs.canvas;
      var ctx = canvas.getContext("2d");
      var img = this.refs.image;
      img.onload = function () {
        ctx.drawImage(img, 0, 0);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { 'class': 'Canvas Container' },
        React.createElement(
          'h1',
          null,
          'Canvas'
        ),
        React.createElement(
          'canvas',
          { ref: 'canvas', style: divStyle },
          React.createElement('img', { ref: 'image', src: 'https://i.ytimg.com/vi/OZq7YXA8PQY/hqdefault.jpg' })
        )
      );
    }
  }]);

  return Canvas;
}(React.Component);
// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(Canvas, null), contentNode);