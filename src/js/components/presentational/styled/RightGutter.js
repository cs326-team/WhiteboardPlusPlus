import React from 'react';
import styled from 'styled-components';

const RightGutter = styled.div`
  margin-left: ${({margin}) => margin ? margin : '1rem'};
`;

export default RightGutter;
