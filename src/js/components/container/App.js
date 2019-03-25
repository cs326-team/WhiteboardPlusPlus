import React from 'react';
import Canvas from './Canvas';
import Header from '../presentational/styled/Header';

const color = "#ff826f";

const App = () => (
    <div>
        <Header color={color}>Whiteboard++</Header>
        <Canvas color={color}/>
    </div>
);

export default App;