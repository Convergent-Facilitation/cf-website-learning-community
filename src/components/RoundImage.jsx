 
import React from 'react';
import styled from 'styled-components';

const RoundImageWrapper = styled.div`
  border-radius: 50%;
`;

const RoundImage = ({ children }) => {
  return <RoundImageWrapper>{children}</RoundImageWrapper>;
};

export default RoundImage;
