// Dashboard.js

import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const ShpalljeOne = () => {
  const [posts, setPosts] = useState(null);
  const[logedUser, setLogedUser] = useState(null);
  const userId = localStorage.getItem('userId');
  const[updated, setUpdated] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/users/${userId}`, {
      withCredentials: true})
    .then((res) => {
      console.log("test", res);
      setLogedUser(res.data);
      console.log("Fetched data:logeduser", logedUser);
      
    })
    .catch((err) => {
      console.log(err);
    });
    axios.get(`http://localhost:8000/api/post/${id}`, {
        withCredentials: true,
        })
      .then(response => {
        console.log(response);
        // Set the fetched posts to the state
        setPosts(response.data.clinic);
        console.log("Fetched data:", posts);
        console.log("response",response);
        setUpdated(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [updated]); 


 
const MerrPjese = (e) => {
  e.preventDefault();

  axios.patch(`http://localhost:8000/api/post/users/${id}`,{
    
    firstName: logedUser.firstName,
    lastName: logedUser.lastName,
    userId: logedUser._id,
    
  }, {
    withCredentials: true
    
  })
    .then((res) => {
      console.log(res);
      setUpdated(true);

    })
    .catch((err) => {
      console.log(err);
    });
}


const handleELire = () => {
  axios.post(`http://localhost:8000/shpallje/eLire/${id}`,{
  }, {
    withCredentials: true
    
  })
    .then((res) => {
      console.log(res);
      setUpdated(true);

    })
    .catch((err) => {
      console.log(err);
    });
}

const handleEZene = () => {
  axios.post(`http://localhost:8000/shpallje/eZene/${id}`,{
  }, {
    withCredentials: true
    
  })
    .then((res) => {
      console.log(res);
      setUpdated(true);

    })
    .catch((err) => {
      console.log(err);
    });
}



  return (
    <>
    <Navbar />



  


  <div style={{ width: '70%' }}>
    <h2>Announcement</h2>
    {
    posts&& (
      <div  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop:"100px" }}>
      <h4>{posts.destinacioni}</h4>
        <p>Description: {posts.pershkrimi}</p>
        <p>Daily Price: {posts.cmimiDitor}</p>
        <p>Reservation Day : {posts.dataRezervimit}</p>
      </div>
      )

    }
     
     {
    logedUser && posts && !posts.users.some(user => user.userId === logedUser._id) ? (
        <button onClick={MerrPjese}>Participate</button>
    ) : null
}
{
    logedUser && posts  &&  logedUser._id=== posts.userId && posts.eMbyllur ? (
        <button onClick={handleELire}>Make Available</button>
    ) : null
}

      {
   logedUser && posts  && logedUser._id=== posts.userId && !posts.eMbyllur ? (
        <button onClick={handleEZene}>Make Occupied</button>
    ) : null
}

      <h3>Participants</h3>
      {
        posts && posts.users.map((user, index) => {
          return (
            <div key={index}>
              <p>{user.firstName} {user.lastName}</p>
            </div>
          )
        })
      }

    </div>
    
  

    
    </>
  
  );
};

export default ShpalljeOne;
