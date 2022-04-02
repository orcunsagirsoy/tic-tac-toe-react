import React from 'react'
import styled from 'styled-components';

export default function History() {
  return (
    <HistoryContainer>
        <HistoryBtn></HistoryBtn>
        <HistoryBtn></HistoryBtn>
        <HistoryBtn></HistoryBtn>
    </HistoryContainer>
  )
}

const HistoryBtn = styled.div`
  height: 5vh;
  width: 5vh;
  border-radius: 10px;
  border: 2px solid #27282b;
  margin-left: 5px;
`;

const HistoryContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;