import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MyListings from './MyListings'; // Importing MyListings component

const MyProfile = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate();

    const userDataString = localStorage.getItem('user');
    const user = JSON.parse(userDataString);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${userId}`, {
            withCredentials: true,
        })
        .then((res) => {
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const navigateToUserInfo = () => {
        navigate('/userinfo');
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>My Profile</h2>
            <p style={styles.info}>{firstName} {lastName}</p>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={navigateToUserInfo}>My Account</button>
                <button style={styles.button} onClick={() => navigate('/favorites')}>Favorites</button>
                <button style={styles.smallButton} onClick={() => navigate(-1)}>Go Back</button>
            </div>
            <div style={styles.listingsContainer}>
                <MyListings />
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        margin: 'auto',
        maxWidth: '800px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    info: {
        fontSize: '18px',
        marginBottom: '10px',
    },
    buttonContainer: {
        marginTop: '20px',
    },
    button: {
        padding: '10px 20px',
        margin: '0 10px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    smallButton: {
        padding: '5px 10px',
        fontSize: '14px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '3px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    listingsContainer: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center', // Center items horizontally
        flexWrap: 'wrap',
    },
};

export default MyProfile;
