import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogPreview = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch your posts here.
    // This is just an example URL; replace it with your actual endpoint.
    axios.get('/events')
      .then(response => {
        setPosts(response.data);
      });
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPreview;

