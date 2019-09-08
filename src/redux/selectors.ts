import { Conversation, Message } from './interfaces';
import { AppState } from './rootStore';

export function getConversations(state: AppState): Conversation[] {
  return [];
}

export function getMessages(state: AppState, conversationId: Conversation['id']): Message[] {
  return [];
}

export function getLastMessage(state: AppState, conversationId: Conversation['id']): Message {
  return {
    senderId: 'placeholder',
    messageText: 'placeholder text'
  };
}