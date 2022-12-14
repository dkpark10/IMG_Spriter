import React from 'react';

import {
  Title,
  Canvas,
  Header,
  DragBox,
  Footer,
  CodeArea,
  SlicedImage,
  SizeScaleRangeBar,
} from './components/index';

export default function App() {
  return (
    <>
      <Title />
      <Header />
      <CodeArea />
      <SizeScaleRangeBar />
      <Canvas />
      <SlicedImage />
      <Footer />
    </>
  );
}
