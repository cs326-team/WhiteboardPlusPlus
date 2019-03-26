import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: ${({width}) => (width ? `${width}px` : '50px')};
    height: ${({ height}) => (height ? `${height}px` : '25px')};
    color: ${({color}) => (color ? color:'red')};
    cursor: ${({cursor}) => (cursor ? cursor: 'pointer')};
    name: ${({name}) => (name ? name:'Buttone')};
    text: ${({text}) => (text ? text:'inherit')}
    background: ${({background}) => (background ? background:'gray')};
    
`;


export default Button;