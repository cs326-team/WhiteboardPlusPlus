import React from 'react';
import styled from 'styled-components';

const LeftGutter = styled.div`
  margin-right: ${({ margin }) => margin ? margin : '1rem'};
`;

export default LeftGutter;
