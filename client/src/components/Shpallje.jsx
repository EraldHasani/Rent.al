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
{/* 

    <div className="grid col-2" style={{margin:"100px",width:"85%"}}>
      <div>

  
    
    {/* <div className='grid col-5 ' style={{  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}> */}
    {/* <div className="row col-sm ">
      {posts.map(post => (
        <div className='card' key={post.id} style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px'}}>
          <div>
            <Link to={`/shpallje/${post._id}`}>  <h4 style={{ }}>{post.destinacioni}</h4> </Link>
            <p>Description trip: {post.pershkrimi}</p>
            <p>Daily Price: {post.cmimiDitor}</p>
            <p>Reservation Day : {post.dataRezervimit ? new Date(post.dataRezervimit).toLocaleDateString() : null} </p>
          </div>
        </div>
      ))}
    </div> */}

  {/* </div>
  </div> */} 

<div className="grid col-2" style={{margin:"100px",width:"85%"}}>

<h1  className="border-bottom" >Announcement</h1>

  <div className='shpallje'>
  {posts.map(post => (
    <div className="card" key={post.id}>
      <div className="top-section">
        
        <div className="border2" ></div>
        <div className="icons">
          <div className="logo">
          </div>
          <span className="big-tex">Description trip:</span>
        </div>
        <span className="regular-text m-1">{post.pershkrimi}</span>

      </div>
      <div className="bottom-section">
        <span className="title">
          <Link to={`/shpallje/${post._id}`}>
            <span className="title fs-4">{post.destinacioni}</span>
          </Link>
        </span>
        <div className="row row1">
          <div className="item">
            <span className="big-text fs-5">Daily Price:</span>
            <span className="regular-text fs-6">{post.cmimiDitor} €</span>
          </div>
          <div className="item">
            <span className="big-text fs-5">Reservation Day:</span>
            <span className="regular-text fs-6">{post.dataRezervimit ? new Date(post.dataRezervimit).toLocaleDateString() : null}</span>
          </div>
        </div>
        <div className="row row2">
          <div className="item">
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

</div>
  

    
    </>
  
  );
};

export default Shpallje;
