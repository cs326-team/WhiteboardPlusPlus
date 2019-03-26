import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: ${({width}) => (width ? `${width}px` : '50px')};
    height: ${({ height}) => (height ? `${height}px` : '25px')};
    color: ${({color}) => (color ? color:'blue')};
    cursor: ${({cursor}) => (cursor ? cursor: 'pointer')};
    name: ${({name}) => (name ? name:'Buttone')};
    background: ${({background}) => (background ? background:'lightgray')};
    label: ${({label}) => (label ? label:'inherit')};
    value: ${({value}) => (value ? value:"inherit")};
    
`;


export default Button;