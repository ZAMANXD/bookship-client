import React from 'react';
import BlogList from '../BlogList/BlogList';
import BlogPostUpdate from '../BlogPostUpdate/BlogPostUpdate';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const posts = [
        {
            _id: '01',
          title: 'Blog on Lessons in Chemistry by Bonnie Garmus',
          author: 'Achintya Kumar Talukdar',
          picture: 'https://static01.nyt.com/images/2022/04/10/books/review/05GroupText-GARMUS-SUB01/05GroupText-GARMUS-SUB01-videoSixteenByNineJumbo1600-v2.jpg' ,
          content: 'Chemistry is the study of matter and energy, and the interactions between them. It is a fascinating subject that encompasses a wide range of topics, from the smallest building blocks of matter, to the complex reactions that take place in our everyday lives. Here are some of the key lessons in chemistry that students can learn from Bonnie Garmus, a well-known chemistry educator and author. In conclusion, chemistry is a fascinating subject that offers a wealth of knowledge and lessons for students. From understanding the basics of matter, to exploring chemical reactions and solutions, students can gain a deeper appreciation for the world around them and how chemistry plays a role in our everyday lives. By studying with Bonnie Garmus, students can gain a comprehensive understanding of chemistry and its many applications.',
          likes: 0,
          comments: [],
        },
        {
            _id: '02',
          title: 'Blog on The Stolen Heir: A Novel of Elfhame',
          author: 'Achintya Kumar Talukdar',
          picture: 'https://m.media-amazon.com/images/I/51m1CHFKUxL.jpg' ,
          content: 'The Stolen Heir is a thrilling novel set in the magical world of Elfhame. It follows the journey of a young elven prince who has been taken from his home and is being hunted by dark forces. The prince must find a way to reclaim his throne and save his kingdom from the darkness that threatens to destroy it. The novel is written by bestselling author Holly Black and is a perfect blend of adventure, fantasy, and magic. The protagonist, Prince Cardan, is a complex character who must navigate through a world of politics, deceit, and betrayal in order to reclaim his throne and save his kingdom. The story is filled with powerful themes of loyalty, courage, and self-discovery, and is both thrilling and heartwarming. The Stolen Heir is a must-read for fans of adventure, fantasy, and magic.',
          likes: 0,
          comments: [],
        },
      ];
    return (
        <div>
            
            {/* <BlogPostUpdate/> */}
            <BlogList posts={posts} />
        </div>
    );
};

export default Blog;