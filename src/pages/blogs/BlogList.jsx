import React from 'react';
import { Link } from "react-router-dom";


const BlogList = ({ blogs, onDelete, onEdit }) => {
  return (
    <div className='list-group-item'>
      <ul className="list-group-item ">
        {blogs.map((blog) => (
          <li key={blog.id} className="list-group-item">
            <p><img src={blog.image} alt="Blog" style={{ width: '200px' }} /></p>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>Tags: {blog.tags.join(', ')}</p>
            <div className="my-2">
              <button className="btn btn-warning" onClick={() => onEdit(blog)}>
                Modifica
                </button>
              <button className="btn btn-danger" onClick={() => onDelete(blog.id)}>
                Elimina
              </button>
              <Link className="btn btn-success" to={`/list-blogs/${blog.id}`}>
            Dettagli
          </Link>
            </div>
          </li>
        ))}
      </ul>
    </div >
  );
};

export default BlogList;
