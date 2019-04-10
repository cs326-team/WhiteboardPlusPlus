import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Canvas from './Canvas';
import AppContainer from '../presentational/styled/AppContainer';
import Header from '../presentational/styled/Header';
import ButtonPanel from './ButtonPanel';
import CanvasContainer from '../presentational/styled/CanvasContainer';
import LoginForm from './LoginForm';
import LeftGutter from '../presentational/styled/LeftGutter';
import RightGutter from '../presentational/styled/RightGutter';



const colorInit = "#ff826f";
const API_POST_URL = () => `http://localhost:3000/api/whiteboard/add`;

const Home = ({match}) => {
  const [color, setColor] = useState(colorInit);
  // const [initialized, setInitialized] = useState(false);
  const [imageData, setImageData] = useState("");

  const postImageData = imgData => {
    axios.post(API_POST_URL(), { URI: imgData})
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  // console.log(imageData);
  return (
    <AppContainer 
      className="container"
    >
      <Header color={color}>Whiteboard++</Header>
      <CanvasContainer>
        <LeftGutter>
          <ButtonPanel 
            setColorHandler={e => setColor(e.hex)}
            color={color}
            onSaveHandler={() => postImageData(imageData)}
          />
        </LeftGutter>
        <Canvas color={color} canvasId={match.params.id} imageDataHandler={imgData => setImageData(imgData)} />
        <RightGutter>
          <LoginForm />
        </RightGutter>
      </CanvasContainer>
    </AppContainer>
  );
};

export default Home;