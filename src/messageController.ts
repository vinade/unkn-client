import React from 'react';
import io, { Socket } from 'socket.io-client';
import { Message, SocketAction } from './types';

// eslint-disable-next-line no-unused-vars
type ConfigFunction = (config:Object)=>void;

export default class MessageController {
  setMessages?: React.Dispatch<React.SetStateAction<Message[]>>;

  roomId?: string;

  userId?: string;

  socket: Socket;

  messages: Message[];

  config: Object;

  constructor(address: string) {
    this.config = {};
    this.socket = io(address);
    this.messages = [];
    this.setMessages = undefined;

    this.listenUserJoined();
    this.listenReceiveMessage();
    this.listenRoomConfig();
  }

  isValidMessage(message: Message) {
    if (!message.id) {
      return false;
    }

    const duplicated = this.messages.some((item) => item.id === message.id);
    return !duplicated;
  }

  setRoom(roomId?: string, userId?: string) {
    this.roomId = roomId;
    this.userId = userId;

    if (!roomId || !userId) {
      return;
    }

    this.socket.emit(SocketAction.REGISTER_ROOM, { userId, roomId });
  }

  send(message: string) {
    if (!this.roomId || !this.userId) {
      return;
    }

    this.socket.emit(SocketAction.SEND_MESSAGE, {
      message,
      userId: this.userId,
      roomId: this.roomId,
    });
  }

  listenRoomConfig() {
    this.socket.on(SocketAction.ROOM_CONFIG, (data: Object) => {
      Object.assign(this.config, data);
    });
  }

  listenUserJoined() {
    this.socket.on(SocketAction.USER_JOINED, (data: Message) => {
      if (!this.setMessages) {
        return;
      }

      if (!this.isValidMessage(data)) {
        return;
      }

      this.messages.push({
        id: data.id,
        system: true,
        message: `${data.nickname} entrou na sala`,
      });

      this.setMessages([...this.messages]);
    });
  }

  listenReceiveMessage() {
    this.socket.on(SocketAction.RECEIVE_MESSAGE, (data: Message) => {
      if (!this.setMessages || !this.userId) {
        return;
      }

      if (!this.isValidMessage(data)) {
        return;
      }

      const messageData = { ...data };

      if (data.userId === this.userId) {
        messageData.userId = undefined;
      }

      if (messageData.userId) {
        [messageData.nickname] = messageData.userId.split('-');
      }

      messageData.message = messageData.message.replace(/\n/g, '<br />');
      this.messages.push(messageData);
      this.setMessages([...this.messages]);
    });
  }
}
