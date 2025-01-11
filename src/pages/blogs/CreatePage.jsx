import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogList from './BlogList';
import BlogForm from './BlogForm';
import 'bootstrap/dist/css/bootstrap.min.css';
function CreatePage() {

  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await axios.get('http://localhost:3000/posts/');
    setBlogs(response.data.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    fetchBlogs();
  };

  const handleSave = async (blog) => {
    if (blog.id) {
      await axios.put(`http://localhost:3000/posts/${blog.id}`, blog);
    } else {
      await axios.post('http://localhost:3000/posts/', blog);
    }
    setCurrentBlog(null);
    fetchBlogs();
  };
  return (
    <div>
      <h1>Crea e modifica i tuoi  Post</h1>
      <div className="container mt-5">
        <BlogForm blog={currentBlog} onSave={handleSave} />
        {blogs.length > 0 ?
          <BlogList blogs={blogs} onDelete={handleDelete} onEdit={setCurrentBlog} />
          : ''}
      </div>
    </div>


  );
}
export default CreatePage;