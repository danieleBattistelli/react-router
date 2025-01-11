import React from 'react';


const BlogList = ({ blogs, onDelete, onEdit }) => {
  return (
    <ul className="list-group mt-3">
      {blogs.map((blog) => (
        <li key={blog.id} className="list-group-item">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <p><img src={blog.image} alt="Blog" style={{ width: '100px' }} /></p>
          <p>Tags: {blog.tags.join(', ')}</p>
          <button className="btn btn-warning" onClick={() => onEdit(blog)}>Modifica</button>
          <button className="btn btn-danger" onClick={() => onDelete(blog.id)}>Elimina</button>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
