import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import { Container } from 'bloomer';

import ChatInputBox from '../ChatInputBox';

const App: React.FC = () => {
  return (
    <Container>
      <ChatInputBox />
    </Container>
  );
}

export default App;
