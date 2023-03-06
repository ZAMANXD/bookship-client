import React, { useState, useRef, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/routes';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import ChatIcon from './assets/chat-icon.png';
import CloseIcon from './assets/close-icon.png';
import Chatbot from 'react-chatbot-kit';
import config from './components/Chatbot/Config';
import MessageParser from './components/Chatbot/MessageParser';
import ActionProvider from './components/Chatbot/ActionProvider';

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const chatbotRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target as Node)) {
        setIsChatbotOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [chatbotRef]);

  return (
    <div>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
        {isChatbotOpen ? (
          <div className='close-icon' ref={chatbotRef} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={CloseIcon} alt="close chatbot" style={{ height: '60px', marginRight: '10px', cursor: 'pointer' }} onClick={handleClick} />
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}></Chatbot>
          </div>
        ) : (
          <img className='chat-icon' src={ChatIcon} alt="open chatbot" style={{ height: '100px', width: '100px', cursor: 'pointer' }} onClick={handleClick} />
        )}
      </div>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster />
        <ToastContainer />
      </CartProvider>
    </div>
  );
}

export default App;
