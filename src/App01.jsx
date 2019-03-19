const divStyle = {
  fillStyle: 'lightgray',
  outline: 'black 3px solid',
  width: '640px',
  height: '400px'
};
// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class Canvas extends React.Component {
  constructor() {
    super();
  }
  componentDidMount()
  {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;
    img.onload = () => {ctx.drawImage(img,0,0)}
  }

  render() {
    return (
      <div class="Canvas Container">
        <h1>Canvas</h1>
        <canvas ref="canvas" style={divStyle}>
        <img ref="image" src="https://i.ytimg.com/vi/OZq7YXA8PQY/hqdefault.jpg"/>
        </canvas>
      </div>
    );
  }
}
// This renders the JSX component inside the content node:
ReactDOM.render(<Canvas />, contentNode);
