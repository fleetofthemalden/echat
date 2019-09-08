export const SEND_MESSAGE = 'SEND_MESSAGE';
export type SEND_MESSAGE = typeof SEND_MESSAGE;

export const GET_MESSAGES = 'GET_MESSAGES';
export type GET_MESSAGES = typeof GET_MESSAGES;

export const LOGIN = 'LOGIN';
export type LOGIN = typeof LOGIN;

export const SELECT_CONVERSATION = 'SELECT_CONVO';
export type SELECT_CONVERSATION = typeof SELECT_CONVERSATION;

/**
 * @prop type - action type
 * @prop payload - action payload
 */
export interface SendMessage {
	type: SEND_MESSAGE;
	payload: string;
}

export interface GetMessages {
  type: GET_MESSAGES;
  payload: string;
}

export type MessageAction = SendMessage | GetMessages;
