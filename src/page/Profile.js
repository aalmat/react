import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'John',
        surname: 'Doe',
        birthday: '1990-01-01',
        email: 'john.doe@example.com',
        password: '********',
        profilePicture: null,
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUserInfo({
                ...userInfo,
                profilePicture: file,
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!userInfo.name) {
            newErrors.name = "Name is required";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            setErrors({});
            console.log(userInfo);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div>
            <h1>Profile Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userInfo.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <div>
                    <label htmlFor="surname">Surname:</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={userInfo.surname}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="birthday">Birthday:</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={userInfo.birthday}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userInfo.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="profilePicture">Profile Picture:</label>
                    <input
                        type="file"
                        id="profilePicture"
                        name="profilePicture"
                        onChange={handleFileInputChange}
                    />
                </div>
                <div>
                    <button type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default Profile;
