// AddBook.jsx
import { useState } from 'react';
// import axios from 'axios';

const AddBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        description: '',
        cover_image: '',
        free: false,
        available: false
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // setLoading(true);
        // try {
        //     await axios.post('/api/books', formData);
        //     setSuccess('Book added successfully!');
        //     setFormData({
        //         title: '',
        //         author: '',
        //         description: '',
        //         cover_image: '',
        //         free: false,
        //         available: false
        //     });
        // } catch (err) {
        //     setError('Failed to add book. Please try again.');
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <div className="form-container">
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Cover Image URL:</label>
                    <input
                        type="url"
                        name="cover_image"
                        value={formData.cover_image}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            name="free"
                            checked={formData.free}
                            onChange={handleChange}
                        />
                        Free
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="available"
                            checked={formData.available}
                            onChange={handleChange}
                        />
                        Available
                    </label>
                </div>

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}

                <button type="submit" disabled={loading}>
                    {loading ? 'Adding...' : 'Add Book'}
                </button>
            </form>
        </div>
    );
};

export default AddBook;