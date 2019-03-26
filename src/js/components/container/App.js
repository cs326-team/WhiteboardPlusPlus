import React from 'react';
import Canvas from './Canvas';
import Header from '../presentational/styled/Header';
import LoginForm from './LoginFormContainer';



const color = "#ff826f";

const App = () => (
    <div>
        <Header color={color}>Whiteboard++</Header>
        <Canvas color={color}/>
        <LoginForm />
    </div>
);

export default App;