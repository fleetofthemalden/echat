export const SEND_MESSAGE = 'SEND_MESSAGE';
export type SEND_MESSAGE = typeof SEND_MESSAGE;

/**
 * @prop type - action type
 * @prop payload - action payload
 */
export interface SendMessage {
	type: SEND_MESSAGE;
	payload: string;
}

export type MessageAction = SendMessage;
