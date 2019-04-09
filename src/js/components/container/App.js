import React from 'react';
import Canvas from './Canvas';
import AppContainer from '../presentational/styled/AppContainer';
import Header from '../presentational/styled/Header';
import ButtonContainer from './ButtonContainer';
import CanvasContainer from '../presentational/styled/CanvasContainer';
import LoginForm from './LoginForm';
import LeftGutter from '../presentational/styled/LeftGutter';
import RightGutter from '../presentational/styled/RightGutter';



const color = "#ff826f";

const App = () => (
  <AppContainer className="container">
    <Header color={color}>Whiteboard++</Header>
    <CanvasContainer>
      <LeftGutter>
        <ButtonContainer />
      </LeftGutter>
      <Canvas color={color} />

      <RightGutter>
        <LoginForm />
      </RightGutter>
    </CanvasContainer>
  </AppContainer>
);

export default App;