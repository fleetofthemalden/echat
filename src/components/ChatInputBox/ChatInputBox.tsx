import React from 'react';
import { Field, Control, Input, Button } from 'bloomer';


const ChatInputBox: React.SFC = () => {
  return (
    <div>
      <Field hasAddons>
        <Control>
          <Input type="text" placeholder='send message' />
        </Control>
        <Button isColor={'primary'}>Send</Button>
      </Field>
    </div>
  );
}

export default ChatInputBox;
