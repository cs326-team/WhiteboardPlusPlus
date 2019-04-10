import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';



// import Canvas from './Canvas';
// import AppContainer from '../presentational/styled/AppContainer';
// import Header from '../presentational/styled/Header';
// import ButtonPanel from './ButtonPanel';
// import CanvasContainer from '../presentational/styled/CanvasContainer';
// import LoginForm from './LoginForm';
// import LeftGutter from '../presentational/styled/LeftGutter';
// import RightGutter from '../presentational/styled/RightGutter';



const colorInit = "#ff826f";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={'/whiteboard/:id'} component={Home} />
      <Route path={'/'} component={Home} />
    </Switch>
  </Router>
);

//   const [color, setColor] = useState(colorInit);
//   // const [canvasId, setCanvasId] = useState(-1)
//   console.log(window.location)
//   return (
//     <AppContainer 
//       className="container"
//     >
//       <Header color={color}>Whiteboard++</Header>
//       <CanvasContainer>
//         <LeftGutter>
//           <ButtonPanel 
//             setColorHandler={e => setColor(e.hex)}
//             color={color}
//           />
//         </LeftGutter>
//         <Canvas color={color} />
//         <RightGutter>
//           <LoginForm />
//         </RightGutter>
//       </CanvasContainer>
//     </AppContainer>
//   );
// };

export default App;