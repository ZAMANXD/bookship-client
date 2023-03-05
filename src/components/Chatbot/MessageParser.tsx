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

    if (lowercaseMessage.includes('book list') || lowercaseMessage.includes('list of books') || lowercaseMessage.includes('list of book') || lowercaseMessage.includes('top books')) {
      this.actionProvider.bookListHandler();
    
  }
  
  }
}

export default MessageParser;
