import React from 'react'
import styled from 'styled-components';

export default function Square() {
  return (
    <SquareContainer>
        <DotEmpty></DotEmpty>
    </SquareContainer>
  )
}
const DotEmpty = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-top: 30px;
  background-color: #16bdca;
  :hover {
    background-color: #27282b; 
}
`;

const SquareContainer = styled.div`
  height: 15vh;
  width: 15vh;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #27282b;
  opacity: 1;
  :hover {
      background-color: #16bdca; 
  }
`;