import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: ${({width}) => (width ? `${width}px` : '4rem')};
    height: ${({ height}) => (height ? `${height}px` : '4rem')};
    color: ${({color}) => (color ? color:'blue')};
    cursor: ${({cursor}) => (cursor ? cursor: 'pointer')};
    background: ${({background}) => (background ? background:'lightblue')};
`;

export default StyledButton;
