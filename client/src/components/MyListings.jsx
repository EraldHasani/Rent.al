import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthContext";




// const Listings = (props) => {
//     const navigate = useNavigate()
//     const [todos, setTodo] = useState([]);
//     const [inProgress, setProgress] = useState([]);
//     const [completeds, setCompleted] = useState([]);

//     // useEffect(() => {
//     //     let userLoggedIn = window.sessionStorage.getItem("userLoggedIn");

//     //     if (userLoggedIn == "true") {
//     //         getAllPost();
//     //     } else {
//     //         navigate("/login");
//     //     }

//     // }, []);


//     const removePost = (id) => {
//         axios.delete(`http://localhost:8000/forms/${id}`)
//             .then((res) => {
//                 console.log(res.data);
//                 getAllPost();

//             })
//             .catch((err) => {
//                 console.log(err);
//             });

//     }



//     const updatePost = (id, newStatus) => {
//         axios.put(`http://localhost:8000/forms/${id}`, {
//             "Status": newStatus
//         })
//             .then((res) => {
//                 console.log(res.data);
//                 getAllPost();

//             })
//             .catch((err) => {
//                 console.log(err);
//             });

//     }



//     const filterByStatus = (posts, status) => {
//         return posts.filter((post) => post.Status == status)
//     }


//     const getAllPost = () => {
//         axios.get('http://localhost:8000/forms')
//             .then((res) => {
//                 const postData = res.data?.Posts;
//                 const todoData = filterByStatus(postData, "todo");
//                 const inProgressData = filterByStatus(postData, "inprogress");
//                 const completedData = filterByStatus(postData, "completed");



//                 setTodo(todoData)
//                 setProgress(inProgressData)
//                 setCompleted(completedData)

//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }
//     return (
//         <>
//             <div className="page-container">
//                 <h1>My Listings</h1>
//                 <div className="all-container">
//                     <div className="task-container todo-container">
//                         <h3>Joaktiv</h3>
//                         {todos.length > 0 && todos.map((item, ind) => (

//                             <div key={ind} className="project-container">
//                                 <p>{item.brandi}</p>
//                                 <p>{item.vitiProdhimit}</p>
//                                 <button className="custom-button inprogress" onClick={(e) => updatePost(item._id, "inprogress")}>Levize tek Aktive</button>
//                             </div>
//                         ))}

//                     </div>
//                     <div className="task-container inprogress-container">
//                         <h3>Aktive</h3>
//                         {inProgress.length > 0 && inProgress.map((item, ind) => (

//                             <div key={ind} className="project-container">
//                                 <p>{item.brandi}</p>
//                                 <p>{item.vitiProdhimit}</p>
//                                 <button className="custom-button completed" onClick={(e) => updatePost(item._id, "completed")}>Levize te Shitur</button>
//                             </div>
//                         ))}

//                     </div>
//                     <div className="task-container completed-container">
//                         <h3>Shitur</h3>
//                         {completeds.length > 0 && completeds.map((item, ind) => (

//                             <div key={ind} className="project-container">
//                                 <p>{item.brandi}</p>
//                                 <p>{item.vitiProdhimit}</p>
//                                 <button className="custom-button remove" onClick={(e) => removePost(item._id)}>Remove Post</button>
//                             </div>
//                         ))}

//                     </div>
//                 </div>


//             </div>
//         </>
//     );
// }




// //update endpoint
// const express = require('express');
// const router = express.Router();

// router.put('/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
//     if (!updatedProduct) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     updatedProduct.status = 'pending';
//     await updatedProduct.save();
//     res.json({ message: 'Product updated and pending approval' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });



// //Admin Approval Endpoint
// router.put('/products/:id/approve', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const updatedProduct = await Product.findByIdAndUpdate(id, { status: 'approved' }, { new: true });
//       if (!updatedProduct) {
//         return res.status(404).json({ message: 'Product not found' });
//       }
//       res.json({ message: 'Product approved' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });


//   router.put('/products/:id/reject', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const updatedProduct = await Product.findByIdAndUpdate(id, { status: 'rejected' }, { new: true });
//       if (!updatedProduct) {
//         return res.status(404).json({ message: 'Product not found' });
//       }
//       res.json({ message: 'Product rejected' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });
  
  

// module.exports = router;



const MyListings = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuth();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchPosts = async () => {
            try {

                const response = await fetch('http://localhost:8000/forms', {
                    withcredentials: true,
                    credentials: 'include',     
                });
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const deletePost = (id) => {
        axios.delete(`http://localhost:8000/forms/${id}`, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            console.log(res.data);
            console.log(posts.filter((post) => post._id !== id) );
            setPosts(posts.filter((post) => post._id !== id));
        })
        .catch((err) => {
            console.log(err);
        });
    }
    

    return (

       
        <div  className="all-posts" >
            {isLoading ? (
                <p>Loading posts...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) :( <div>
                {userId && posts && posts
                    .filter(post => post.userId === userId)
                    .map(post => (
                        <div key={post.id} style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px' }}>
                            <img src={post.image} alt="Car" style={{ width: '20%', height: 'auto', borderRadius: '5px' }} />
                            <div>
                                <Link to={`/form/${post._id}`}>
                                    <h4 style={{ marginTop: '0' }}>{post.brandi}</h4>
                                </Link>
                                <p>Model: {post.modeli}</p>
                                <p>Price: {post.price}</p>
                            </div>
                            <div>
                                <Link to={`/update/form/${post._id}`}>
                                    <button style={{ marginRight: '10px' }}>Edit</button>
                                </Link>
                                <button onClick={(e) => deletePost(post._id)}>Delete</button>
                                </div>                        
                        </div>

                    ))}
            </div>)}

        </div>
    );
};




export default MyListings;