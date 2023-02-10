import React, { useState } from "react";
import './BlogPostUpdate.css';

interface Props {}

const BlogPostUpdate: React.FC<Props> = () => {
    
    const [title,setTitle]=useState("")
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState<File | null>(null);
  

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setTitle(event.target.value);
  }

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPicture(event.target.files ? event.target.files[0] : null);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement the logic to submit the post data to the server
  };

  return (
    <div className="BlogPostUpdate mx-auto">
      <form className="BlogPost-form" onSubmit={handleSubmit}>
        <input type="text"
        className="BlogPost-input"
        placeholder="Enter Title"
        value={title}
        onChange={handleTitleChange}
        />

        <textarea
          className="BlogPost-textarea"
          placeholder="Write your blog..."
          value={content}
          onChange={handleContentChange}
        />
        <div className="BlogPost-image-upload-container ">
            {picture ? 
            (
            <img className="h-20" src={picture ? URL.createObjectURL(picture) : ""} alt="" />
            ) 
            : 
            <input
            type="file"
            className="BlogPost-image-upload-input"
            onChange={handlePictureChange}
            />
            }

        </div>

        <button type="submit" className="BlogPost-submit-button">
          Post
        </button>
      </form>
    </div>
  );
};

export default BlogPostUpdate;
