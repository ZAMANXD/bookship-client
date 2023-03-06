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
      `Here is a list of top 5 books you can read:
      1. Rich Dad Poor Dad,
      2. The Stolen Heir: A Novel of Elfhame,
      3. The House of Wolves,
      4. A Curse for True Love,
      5. Lessons in Chemistry,` 
    );
    this.setChatbotMessage(message);
  };

  paymentsDisclaimerHandler=()=>{
    const message= this.createChatBotMessage('Bookship is a demo website. A team of passionate and highly dedicated developers built this website is for only to demonstrate skills. None of the products are real. Please do not attempt to purchase any product as well as do not put any real credit card or bank information on this website.');
    this.setChatbotMessage(message);
  };

  fallbackHandler=() => {
    const message= this.createChatBotMessage('Sorry, I did not understand. Please try again.');
    this.setChatbotMessage(message);
  }

  setChatbotMessage = (message: any) => {
    this.setState((state: StateWithMessages) => ({...state, messages: [...state.messages, message]}));
  }
}

export default ActionProvider;
