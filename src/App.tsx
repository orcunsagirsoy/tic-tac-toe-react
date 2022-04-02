import './App.css';
import styled from "styled-components";
import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import Restart from './components/Restart';

function App() {

  const [title, setTitle] = useState<string>("I am title!");
  return (
    <AppContainer>
      <GameContainer>
        <GameTitle>{title}</GameTitle>
        <GameBoard><Board /></GameBoard>
        <GameHistory><History /></GameHistory>
        <GameRestartBtn><Restart /></GameRestartBtn>

      </GameContainer>
    </AppContainer>
  );
}


const AppContainer = styled.div`
  height: 100vh;
  border: 1px red solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GameContainer = styled.div`
  height: 60vh;
  width: 50%;
  border: 1px red solid;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const GameTitle = styled.div`
  height: 10vh;
  width: 50%;
  display: flex;
  border: 1px red solid;
  margin-top: 3px;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  font-weight: 900;
`;
const GameBoard = styled.div`
  height: 50vh;
  width: 50%;
  border: 1px red solid;
  margin-top: 3px;
  padding: 7px;
`;
const GameHistory = styled.div`
  height: 10vh;
  width: 50%;
  border: 1px red solid;
  margin-top: 3px;
`;
const GameRestartBtn = styled.div`
  height: 10vh;
  width: 50%;
  border: 1px red solid;
  margin-top: 3px;
`;
export default App;
