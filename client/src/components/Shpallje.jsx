// Dashboard.js

import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Shpallje = () => {
  const [posts, setPosts] = useState([]);
  const[logedUser, setLogedUser] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/users/${userId}`, {
      withCredentials: true})
    .then((res) => {
      console.log(res);
      setLogedUser(res.data);
      console.log("Fetched data:", logedUser);
    })
    .catch((err) => {
      console.log(err);
    });

    axios .get(`http://localhost:8000/api/posts`, {
        withCredentials: true,
        })
      .then(response => {
        // Set the fetched posts to the state
        setPosts(response.data.clinics);
        console.log("Fetched data:", posts);
        console.log("response",response); 
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []); 


  
  
  

  return (
    <>
    <Navbar />



  


  <div style={{ width: '70%' }}>
    <h2>Shpallje</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
      {posts.map(post => (
        <div key={post.id} style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px' }}>
          <div>
            <Link to={`/shpallje/${post._id}`}>
              <h4 style={{ marginTop: '0' }}>{post.destinacioni}</h4>
            </Link>
            <p>Pershkrimi: {post.pershkrimi}</p>
            <p>Cmimi Ditor: {post.cmimiDitor}</p>
            <p>Data Rezervimit : {post.dataRezervimit}</p>
          </div>
        </div>
        

      ))}
    </div>

  </div>

    
    </>
  
  );
};

export default Shpallje;
