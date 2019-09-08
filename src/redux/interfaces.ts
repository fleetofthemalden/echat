export interface MessagesState {
  conversations: Object;
}

export interface User {
  id: string;
  displayName: string;
}

export interface Message {
  senderId: User['id'];
  messageText: string;
  mediaUrl?: string;
  // conversationId: string;
}
