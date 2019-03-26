import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: ${({width}) => (width ? `${width}rem` : '2rem')};
    height: ${({ height}) => (height ? `${height}rem` : '2rem')};
    color: ${({color}) => (color ? color:'blue')};
    cursor: ${({cursor}) => (cursor ? cursor: 'pointer')};
    name: ${({name}) => (name ? name:'Buttone')};
    background: ${({background}) => (background ? background:'lightgray')}; 
    
`;


export default Button;
