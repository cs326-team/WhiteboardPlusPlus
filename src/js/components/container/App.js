import React from 'react';
import Canvas from './Canvas';
import Header from '../presentational/styled/Header';
import ButtonContainer from './ButtonContainer';
import LoginForm from './LoginFormContainer';



const color = "#ff826f";

const App = () => (
    <div>
        <Header color={color}>Whiteboard++</Header>
        <Canvas color={color}/>
        <ButtonContainer />
        <LoginForm />
    </div>
);

export default App;