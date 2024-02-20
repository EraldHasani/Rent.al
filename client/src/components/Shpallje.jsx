// Dashboard.js

import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./style/Shpallje.css"


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



  


  <div className='announcement' >
    <h2>Announcement</h2>
    <div className='announcements' >
      {posts.map(post => (
        <div className='announcement-item' key={post.id} >
          <div>
            <Link to={`/shpallje/${post._id}`}>
              <h4 >{post.destinacioni}</h4>
            </Link>
            <p>Description: {post.pershkrimi}</p>
            <p>Daily Price: {post.cmimiDitor}</p>
            <p>Reservation Day : {post.dataRezervimit}</p>
          </div>
        </div>
        

      ))}
    </div>

  </div>

    
    </>
  
  );
};

export default Shpallje;
