import React from 'react';
import { FaTrash } from 'react-icons/fa';


const BlogItem = ({ blog, onDelete }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h5>{blog.title}</h5>
                <p>ID: {blog.id}</p>               
                <p>Contenuto: {blog.content}</p>            
            </div>
            <FaTrash onClick={() => onDelete(blog.id)} style={{ cursor: 'pointer' }} />
        </li>
    );
};

export default BlogItem;
