import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogList from './BlogList.jsx';
import { Link } from "react-router-dom";


const ListPage = () => {
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
      <div className="container mt-3">
        <Link className="btn btn-primary" to="/list-blogs/create">
            Aggiungi un nuovo post
          </Link>
          
        {blogs.length > 0 ?
          <BlogList blogs={blogs} onDelete={handleDelete} onEdit={setCurrentBlog} />
          : ''}
          
      </div>
  
    );
  };
  
  export default ListPage;