import React from 'react';
import BlogPost from '../BlogPost/BlogPost';



interface Props {
  posts: {
    _id: string;
    title: string;
    author: string;
    content: string;
    picture: string;
    likes: number;
    comments: Comment[];
  }[];
}

interface Comment {
  name: string;
  text: string;
}

const BlogList: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <BlogPost key={post._id} {...post} />
      ))}
    </div>
  );
};

export default BlogList;
