import React from 'react';
import styled from 'styled-components';

const Bordered = styled.div`
    border: 1px solid ${({ color }) => (color ? color : 'black')};
    background-color:  background-color: rgba(255, 0, 0, .4);
    width: ${({width}) => (width ? `${width}px` : 'inherit')};
    width: ${({ height}) => (height ? `${height}px` : 'inherit')};
`;

export default Bordered;