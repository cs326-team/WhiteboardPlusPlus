import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.div`
    margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : "1rem"};
    padding-top: ${({paddingTop}) => paddingTop ? paddingTop : "auto"};
`;

export default BaseButton;