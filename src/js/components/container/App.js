import React from 'react';
import Canvas from './Canvas';
import Header from '../presentational/styled/Header';
import ButtonContainer from './ButtonContainer';

const color = "#ff826f";

const App = () => (
    <div>
        <Header color={color}>Whiteboard++</Header>
        <Canvas color={color}/>
        <ButtonContainer />
    </div>
);

export default App;