import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BlogDetails() {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setBlog(data));
  }, [id]);

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;