import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import { useAuth } from '../AuthContext';


const Navbar = (props) => {
    const { logout } = useAuth();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const userId = localStorage.getItem('userId');


    const userDataString = localStorage.getItem('user'); // Retrieve the string from localStorage
    const user = JSON.parse(userDataString);

    console.log(user.firstName); // Example: Accessing the firstName property

    console.log(user)
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${userId}`, {
            withCredentials: true,
        })            .then((res) => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])



    const handleLogout = async (e) => {
        try {
            await logout();
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }




    return (

<nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">

            <a className="navbar-brand" href="dashboard">Rent.al</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-lg-auto">
                    <li className="nav-item">
                    <Link className="nav-link  " to="/dashboard">Home</Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link className="nav-link  " to="/shpallje">Shpallje </Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link mx-5" to="/create">Create</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link mx-5" to="/favorites">Favourites</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link mx-5" to="/reservations">Reservation</Link>
                    </li>

                    {/* <li className="nav-item">
                    <Link className="nav-link mx-5" to="/chat">Messages</Link>
                    </li> */}
                    {  userId ? (
                     <li className="nav-item">
                     <a className="nav-link mx-5" style={{cursor:"pointer"}}  onClick={handleLogout}>Logout</a>
                 </li> 
                  ) : (
                    <div className="d-flex">
                        <li className="nav-item">
                            <Link className="nav-link mx-5" style={{cursor:"pointer"}}  to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-5" style={{cursor:"pointer"}}  to="/register">Register</Link>
                        </li>
                    </div>
                )
            } 
                </ul>

                
            </div>

        </div>
    </nav>


     

    )
}
export default Navbar;
