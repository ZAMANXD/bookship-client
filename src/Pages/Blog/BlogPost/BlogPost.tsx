import React, { useState } from 'react';
import './BlogPost.css';
import CommentForm from '../CommentForm/CommentForm';
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

interface BlogPostProps {
    _id: string;
    title: string;
    author: string;
    content: string;
    picture: string;
    likes: number;
    comments: { name: string, text: string }[];
  }

const BlogPost = () => {
  const blog:any =useLoaderData();
  const { _id,title, author, content, picture, likes }=blog;
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);
    const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<{ author: string; text: string }[]>([]);

  
  const [showFull, setShowFull] = useState(false);
  const [truncatedText, setTruncatedText] = useState(content.slice(0, 300));

  const handleLikeClick = () => {
    if (isLiked) {
        setLikeCount(likeCount - 1);
        setIsLiked(false);
      } else {
        setLikeCount(likeCount + 1);
        setIsLiked(true);
      }
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
    <div className="BlogPost ">
      <div className="BlogPost-header">
      <img src={picture} alt={title} />
        <div className='flex flex-col'>
        <span className='text-xs'>February 23,2023</span>
        <h2 className="BlogPost-title py-2">{title}</h2>
        <p className="BlogPost-author">By {author}</p>
        </div>
      </div>
      <p className="BlogPost-content text-justify">{truncatedText}</p>
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
          {isLiked ? <><FaRegThumbsDown className='text-xl font-semibold'/></> : <FaRegThumbsUp className='text-xl font-semibold'/>}
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