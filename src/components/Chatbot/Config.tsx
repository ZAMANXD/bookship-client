import { createChatBotMessage } from "react-chatbot-kit";
import BookList from "./BookList/BookList";
import BotAvatar from "./BotAvatar/BotAvatar";
import IWidget from "react-chatbot-kit";

interface IBookListWidgetProps {
  bookList: any;
}

const config = {
  initialMessages: [
    createChatBotMessage(`Welcome`, {
      // widget: "bookList",
    }),
  ],
  botName: "BookShip ChatBot",
  customComponents: {
    botAvatar: (props: any) => <BotAvatar {...props}></BotAvatar>,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#6B727D",
    },
    chatButton: {
      backgroundColor: "#6B727D",
      color: "#000000",
    },
  },
  // state: {
  //   bookList: [],
  // },
  // widgets: [
  //   {
  //     widgetName: "bookList",
  //     mapStateToProps: ["bookList"],
  //     widgetFunc: (props: IBookListWidgetProps) => (
  //       <BookList {...props}></BookList>
  //     ),
  //     props: {
  //       bookList: [],
  //     },
  //   },
  // ],
};

export default config;
