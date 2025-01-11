import React, { useState, useEffect } from 'react';


const BlogForm = ({ blog, onSave }) => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        content: '',
        image: '',
        tags: '',
    });

    useEffect(() => {
        if (blog) {
            setFormData({
                id: blog.id || '',
                title: blog.title || '',
                content: blog.content || '',
                image: blog.image || '',
                tags: blog.tags ? blog.tags.join(', ') : '',
            });
        }
    }, [blog]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedData = { ...formData, tags: formData.tags.split(',').map(tag => tag.trim()) };
        onSave(formattedData);
        setFormData({
            id: '',
            title: '',
            content: '',
            image: '',
            tags: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <input
                type="text"
                name="title"
                placeholder="Titolo"
                value={formData.title}
                onChange={handleChange}
                className="form-control mb-2"
            />
            <textarea
                name="content"
                placeholder="Contenuto"
                value={formData.content}
                onChange={handleChange}
                className="form-control mb-2"
            />
            <input
                type="text"
                name="image"
                placeholder="URL Immagine"
                value={formData.image}
                onChange={handleChange}
                className="form-control mb-2"
            />
            <input
                type="text"
                name="tags"
                placeholder="Tags (separate da virgola)"
                value={formData.tags}
                onChange={handleChange}
                className="form-control mb-2"
            />
            <button type="submit" className="btn btn-primary">
                Salva
            </button>
        </form>
    );
};

export default BlogForm;
