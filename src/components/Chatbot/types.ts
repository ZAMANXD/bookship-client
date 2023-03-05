// types.ts

export interface State {
    // Define your state properties here
    isOpen: boolean;
    isDisabled: boolean;
    selectedValue: string | null;
  }
  
  export interface Action {
    // Define your action properties here
    type: string;
    payload: any;
  }
  // types.ts
export interface Message {
  // define the properties of a message
}

export interface State {
  // define the properties of the state
}

export interface StateWithMessages extends State {
  messages: Message[];
}
