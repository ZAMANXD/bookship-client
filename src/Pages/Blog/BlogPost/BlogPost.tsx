import React, { useState } from 'react';
import './BlogPost.css';
import CommentForm from '../CommentForm/CommentForm';

interface BlogPostProps {
    title: string;
    author: string;
    content: string;
    picture: string;
    likes: number;
    comments: { name: string, text: string }[];
  }

const BlogPost: React.FC<BlogPostProps> = ({ title, author, content, picture, likes }) => {
    const [likeCount, setLikeCount] = useState(likes);
    const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<{ author: string; text: string }[]>([]);
  const [showFull, setShowFull] = useState(false);
  const [truncatedText, setTruncatedText] = useState(content.slice(0, 300));

  const handleLikeClick = () => {
    setLikeCount(likes + 1);
  };

  const handleCommentSubmit = (author: string, text: string) => {
    setComments([...comments, { author, text }]);
  };

  const handleReadMoreClick = () => {
    setShowFull(true);
    setTruncatedText(content);
  };

  const handleReadLessClick = () => {
    setShowFull(false);
    setTruncatedText(content.slice(0, 300));
  };

  return (
    <div className="BlogPost">
      <div className="BlogPost-header">
      <img src={picture} alt={title} />
        <div className='flex flex-col'>
        <h2 className="BlogPost-title">{title}</h2>
        <p className="BlogPost-author">By {author}</p>
        </div>
      </div>
      <p className="BlogPost-content">{truncatedText}</p>
      {showFull ? (
        <button className="BlogPost-read-less" onClick={handleReadLessClick}>
          Read Less
        </button>
      ) : (
        <button className="BlogPost-read-more" onClick={handleReadMoreClick}>
          Read More
        </button>
      )}
      <div className="BlogPost-footer">
        <div className="BlogPost-like-container">
          <button className="BlogPost-like-button" onClick={handleLikeClick}>
            Like
          </button>
          <p className="BlogPost-likes">{likeCount} likes</p>
        </div>
        <p
          className="BlogPost-comment-toggle"
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? 'Hide comments' : 'Show comments'}
        </p>
      </div>
      {showComments && (
        <div className="BlogPost-comments">
          {comments.map((comment, index) => (
            <div className="BlogPost-comment" key={index}>
              <p className="BlogPost-comment-author">{comment.author}</p>
              <p className="BlogPost-comment-text">{comment.text}</p>
            </div>
          ))}
          <CommentForm onSubmit={handleCommentSubmit} />
        </div>
      )}
    </div>
  );
};

export default BlogPost;