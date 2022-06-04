import React from 'react';
import './chat.scss';
import ChatButton from '../../../../assets/icons/chat-button.png';

function Chat() {
  return (
    <div className="chat">
      <div className="chat__container">
        <div className="chat__header">
          <p className="chat__header-text">Chat</p>
        </div>
        <div className="chat__messages">
          <p className="chat__date">сегодня</p>
          <div className="chat__admin-message">
            <p className="admin-message__author">ADMIN SUPER 1</p>
            <p className="admin-message__text">Какого вида ошибку Вы видите?</p>
            <p className="admin-message__time time">18:04</p>
          </div>
          <div className="chat__client-message">
            <p className="client-message__text">
              Данный почтовый ящик не может быть изменен.
            </p>
            <p className="client-message__time time">18:06</p>
          </div>
        </div>
        <div className="chat__textarea-for-message">
          <label htmlFor="message" className="webim-label webim-js-overlabel">
            <textarea
              className="textarea-for-message"
              id="message"
              name="message"
              title="Cообщение..."
            />
          </label>
          <button type="submit">
            <img className="chat-button" src={ChatButton} alt="button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
