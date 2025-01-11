import React from 'react';
import { FaTrash } from 'react-icons/fa';


const BlogItem = ({ blog, onDelete }) => {
    return (
        <li className="d-flex flex-wrap ">
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
