import React from 'react';
import styled from 'styled-components';

const Bordered = styled.div`
    border: 1px solid ${({ color }) => (color ? color : 'black')};
    width: ${({width}) => (width ? `${width}px` : 'inherit')};
    width: ${({ height}) => (height ? `${height}px` : 'inherit')};
`;

export default Bordered;