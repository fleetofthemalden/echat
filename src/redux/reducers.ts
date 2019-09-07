import { SEND_MESSAGE, MessageAction } from './actions';
import { MessagesState } from './interfaces';

const initialState: MessagesState = {
  conversations: {}
};

export function messagesReducer(state: MessagesState = initialState, action: MessageAction): MessagesState {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, conversations: {}};
   }
  return state;
}
