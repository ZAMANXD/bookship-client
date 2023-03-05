import { StateWithMessages } from './types';
import React, { MutableRefObject } from 'react';
import BookList from "./BookList/BookList";

class ActionProvider {
  private createChatBotMessage: any;
  private setState: (state: ((prevState: StateWithMessages) => StateWithMessages) | StateWithMessages) => void;
  private createClientMessage: any;
  private stateRef: MutableRefObject<StateWithMessages>;
  private createCustomMessage: any;

  constructor(
    createChatBotMessage: any,
    setStateFunc: (state: ((prevState: StateWithMessages) => StateWithMessages) | StateWithMessages) => void,
    createClientMessage: any,
    stateRef: MutableRefObject<StateWithMessages>,
    createCustomMessage: any,
    ...rest: any[]
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  chatInitializationHandler=()=>{
    const message= this.createChatBotMessage('hello there, welcome to BookShip. How can I help you?');
    this.setChatbotMessage(message);
  }

  bookListHandler=()=>{
    const message = this.createChatBotMessage(
      // `Here is a list of books you can read: {<BookList/>}`
      `Here is a list of books you can read:` 
    );
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (message: any) => {
    this.setState((state: StateWithMessages) => ({...state, messages: [...state.messages, message]}));
  }
}

export default ActionProvider;
