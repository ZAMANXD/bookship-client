import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import './CommentForm.css';

interface CommentFormProps {
    onSubmit: (author: string, text: string) => void;
  }
  
  const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const {user}=useContext(AuthContext)
  
    // const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setAuthor(event.target.value);
    // };
  
    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
      setAuthor(user?.displayName);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(author, text);
      setText('');
    };
  
    return (
        <div>
  <form className="CommentForm" onSubmit={handleSubmit}>
          <div className="CommentForm-input-container">
            <h1 className='text-lg font-bold py-4'>{user?.displayName}</h1>
            {/* <input
              type="text"
              className="CommentForm-input"
              placeholder="Your name"
              value={author}
              onChange={handleAuthorChange}
            /> */}
            <textarea
              className="CommentForm-textarea"
              placeholder="Add a comment"
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <button type="submit" className="CommentForm-submit-button">
            Comment
          </button>
        </form>
      </div>
    );
  };

  export default CommentForm;
  