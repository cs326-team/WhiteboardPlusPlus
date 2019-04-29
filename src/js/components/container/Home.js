import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Canvas from './Canvas';
import AppContainer from '../presentational/styled/AppContainer';
import Header from '../presentational/styled/Header';
import CanvasPanel from './CanvasPanel';
import CanvasContainer from '../presentational/styled/CanvasContainer';
import LoginForm from './LoginForm';
import LeftGutter from '../presentational/styled/LeftGutter';
import RightGutter from '../presentational/styled/RightGutter';



const colorInit = "#ff826f";
const API_POST_URL = () => `http://localhost:3000/api/whiteboard/add`;

const createWhiteboardUrl = (origin, whiteboardId) => `${origin}/whiteboard/${whiteboardId}`;

const Home = ({match}) => {
  const [color, setColor] = useState(colorInit);
  const [imageData, setImageData] = useState("");
  const [linkUrl, setLinkUrl] = useState(null);

  const postImageData = imgData => {
    axios.post(API_POST_URL(), { URI: imgData})
      .then(response => {
        const whiteboardId = response.data['_id'];
        const whiteboardUrl = createWhiteboardUrl(location.origin, whiteboardId);
        
        setLinkUrl(whiteboardUrl);
      })
      .catch(error => {
        console.log(error);
      });
  }

  // make sure we don't have a url and we're trying to access a whiteboard
  // before generating a link
  if (!linkUrl && match.path === "/whiteboard/:id") {
    const { id } = match.params;
    setLinkUrl(createWhiteboardUrl(location.origin, id));
  }

  return (
    <AppContainer 
      className="container"
    >
      <Header color={color}>Whiteboard++</Header>
      <CanvasContainer>
        <LeftGutter>
          <CanvasPanel 
            setColorHandler={e => setColor(e.hex)}
            color={color}
            onSaveHandler={() => postImageData(imageData)}
            linkUrl={linkUrl}
          />
        </LeftGutter>
        <Canvas 
          color={color} 
          canvasId={match.params.id} 
          imageDataHandler={imgData => setImageData(imgData)} 
        />
        <RightGutter>
          <LoginForm />
        </RightGutter>
      </CanvasContainer>
    </AppContainer>
  );
};

export default Home;