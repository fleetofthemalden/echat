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
  senderId: User['id'];
  messageText: string;
  mediaUrl?: string;
  // conversationId: Conversation['id'];
}

export interface Conversation {
  id: string;
  messages: Message[];
}
