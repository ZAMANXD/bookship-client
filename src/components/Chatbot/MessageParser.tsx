import { State } from './types';
import ActionProvider from './ActionProvider';

class MessageParser {
  private actionProvider: ActionProvider;
  private state: State;

  constructor(actionProvider: ActionProvider, state: State) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message: string): void {
    const lowercaseMessage = message.toLowerCase();

    if (lowercaseMessage.includes('hi') || lowercaseMessage.includes('hello') || lowercaseMessage.includes('howdy')) {
      this.actionProvider.chatInitializationHandler();
    }

    else if (lowercaseMessage.includes('book list') || lowercaseMessage.includes('list of books') || lowercaseMessage.includes('list of book') || lowercaseMessage.includes('top 5 books') || lowercaseMessage.includes('top books') || lowercaseMessage.includes('top 5 book'))  {
      this.actionProvider.bookListHandler();
    }

    else if (lowercaseMessage.includes('pay') || lowercaseMessage.includes('payments') || lowercaseMessage.includes('buy') || lowercaseMessage.includes('purchase') || lowercaseMessage.includes('paid') || lowercaseMessage.includes('payment')) {
      this.actionProvider.paymentsDisclaimerHandler();
    }

    else {
      this.actionProvider.fallbackHandler();
    }
  }
}

export default MessageParser;
