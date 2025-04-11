import { useState } from 'react';
// import axios from 'axios';

const AddCategory = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // setLoading(true);
        // try {
        //     await axios.post('/api/categories', formData);
        //     setSuccess('Category added successfully!');
        //     setFormData({ name: '', description: '' });
        // } catch (err) {
        //     setError('Failed to add category. Please try again.');
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <div className="form-container">
            <h2>Add New Category</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Category Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
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

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}

                <button type="submit" disabled={loading}>
                    {loading ? 'Adding...' : 'Add Category'}
                </button>
            </form>
        </div>
    );
};

export default AddCategory;