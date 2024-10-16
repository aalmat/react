import React, { useState } from 'react';
import './Combo.css';

const Combo = ({ comboId, title, price, onDelete }) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleComment = () => {
        setComments([...comments, newComment]);
        setNewComment('');
    };

    const handleDelete = () => {
        onDelete(comboId);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h3>{title}</h3>
            <h3>Price: {price} Tg</h3>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleDelete}>Delete</button>

            <h4>Comments</h4>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>

            <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
            />
            <button onClick={handleComment}>Comment</button>
        </div>
    );
};

export default Combo;
