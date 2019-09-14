export interface MessagesState {
  conversations: {
    [key: string]: Conversation;
  }
}

export interface User {
  id: string;
  displayName: string;
  activeConversations: Conversation['id'][];
}

export interface Message {
  // id: string;
  sender: User;
  messageText: string;
  mediaUrl?: string;
  timestamp: string;
  // conversationId: Conversation['id'];
}

export interface Conversation {
  id: string;
  messages: Message[];
}
