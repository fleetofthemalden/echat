import React from 'react';
import { Media, MediaLeft, Image, MediaContent, Content } from 'bloomer';

import { Message } from 'redux/interfaces';

interface MessageComponentProps {
  message: Message;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ message }: MessageComponentProps) => {
  const { messageText, timestamp, sender } = message;
  return (
    <Media>
      <MediaLeft>
        <Image isSize='64x64' src='https://via.placeholder.com/128x128' />
      </MediaLeft>
      <MediaContent>
        <Content>
          <p>
            <strong>{sender.displayName}</strong>&nbsp;<small>{timestamp}</small>
            <br />
            {messageText}
          </p>
        </Content>
      </MediaContent>
    </Media>
  );
}

export default MessageComponent;
