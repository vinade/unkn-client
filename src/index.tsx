import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { v4 as uuidv4 } from 'uuid';
import App from './App';

function getRoomID(): string {
  let uid = document.location.href.split('#')[1];

  if (!uid) {
    uid = uuidv4();
    document.location.href = `#${uid}`;
  }

  return uid;
}

const roomId = getRoomID();
const userId = uuidv4();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App userId={userId} roomId={roomId} />
  </React.StrictMode>,
);
