import { Conversation, Message } from './interfaces';
import { AppState } from './rootStore';

export function getConversations(state: AppState): Conversation[] {
  // TODO: sort by otherUser name
  return Object.values(state.messagesState.conversations);
}

export function getMessages(state: AppState, conversationId: Conversation['id']): Message[] {
  return state.messagesState.conversations[conversationId].messages;
}

export function getLastMessage(state: AppState, conversationId: Conversation['id']): Message {
  return getMessages(state, conversationId)[0];
}