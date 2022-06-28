/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
export type LinkData = {
    link: string;
    description?: string;
    image?: string;
    title?: string;
};

export type Message = {
    id?: string;
    system?: boolean;
    message: string;
    userId?: string;
    nickname?: string;
    linkData?: LinkData;
};

export type NoParamFunction = () => void;

export enum SocketAction {
    REGISTER_ROOM = 'register_to_room',
    USER_JOINED = 'user_joined',
    SEND_MESSAGE = 'send_message',
    RECEIVE_MESSAGE = 'receive_message',
    ROOM_CONFIG = 'room_config',
}
