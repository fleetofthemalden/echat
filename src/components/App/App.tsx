import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import { Container } from 'bloomer';

import ChatInputBox from 'components/ChatInputBox'
import MessageComponent from 'components/Conversation/Message';

import { Message } from 'redux/interfaces';

const getMockMessage = (): Message => {
  return {
    messageText: 'placeholder message text',
    sender: {
      id: 'jeff',
      displayName: 'Jeff',
      activeConversations: []
    },
    timestamp: 'a while ago'
  };
}

const App: React.FC = () => {
  return (
    <Container>
      <ChatInputBox />
      <MessageComponent message={getMockMessage()} />
    </Container>
  );
}

export default App;
