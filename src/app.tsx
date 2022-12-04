import React from 'react';
import styled from 'styled-components';
import Canvas from './components/canvas';
import Header from './components/header';
import Title from './components/title';
import DropBox from './components/drop_box';

const CenterWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <>
      <Title />
      <Header />
      <CenterWrapper>
        <Canvas />
      </CenterWrapper>
    </>
  );
}
