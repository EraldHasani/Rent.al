import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./style/Login.css";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const { register,registerClient } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorEmail, setErrorEmailRegister] = useState();
  const [errorPassword, setErrorPasswordRegister] = useState();
  const [errorConfirmPassword, setErrorConfirmPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [adress, setAdress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [roleClient, setRoleClient] = useState('client');



  const [errorFirstName, setErrorFirstName] = useState();
  const [errorLastName, setErrorLastName] = useState();
  
  const user = localStorage.getItem("user");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Call the login function from the AuthContext
      await login(email, password);
      navigate("/dashboard");
      // Redirect or perform any other actions after successful login
    } catch (error) {
      console.log(error);
    }
    };
  


  const handleRegisterClient = async (e) => {
    e.preventDefault();

    try {
        // Call the register function from the AuthContext
        await registerClient(firstName, lastName, emailRegister,roleClient,phoneNumber,birthday,gender, passwordRegister,confirmPassword, );
        navigate('/dashboard')
        // Redirect or perform any other actions after successful registration
    } catch (error) {
        setErrorEmailRegister(error.response.data.errors.email.message)
          setErrorPasswordRegister(error.response.data.errors.password.message)
            setErrorConfirmPassword(error.response.data.errors.confirmPassword.message)
                setErrorFirstName(error.response.data.errors.firstName.message)
                    setErrorLastName(error.response.data.errors.lastName.message)

    }
};

  return (

    <>
      <section
        className="hero d-flex flex-column justify-content-center align-items-center"
        id="home"
      >
       

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto col-12">
              <div className="hero-text text-center" style={{marginTop: "-30px"}}>
                <h6
                  style={{ color: "black!important", opacity: "0!important"}}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  new way to explore new destinations!
                </h6>

                <h1
                  className="text-white"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Traveling made easier
                </h1>

                <a
                 data-bs-toggle="modal"
                 data-bs-target="#registerModal"
                  className="btn custom-btn mt-3"
                 
                >
                  Get started
                </a>

                <button
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  className="btn bg-color custom-btn bordered mt-3"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="membershipFormLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="membershipFormLabel">
                Login
              </h2>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
              </button>
            </div>

            <div className="modal-body">
              <form
                className="membership-form webform"
                role="form"
                onSubmit={handleLogin}
              >
                <input
                  type="email"
                  className="form-control mb-3"
                    placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="submit"
                  className="btn bg-color custom-btn bordered mt-3"
                  id="submit-button"
                  name="submit"
                  data-bs-dismiss="modal"
                >
                  Login
                </button>
              </form>
            </div>

            <div className="modal-footer"></div>
          </div>
        </div>
      </div>




      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="membershipFormLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="membershipFormLabel">
                Register
              </h2>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
              </button>
            </div>

            <div className="modal-body">
             
            <form  className="membership-form webform" onSubmit={handleRegisterClient}>
    
                    <div className="form-group form">
                      <div className="d-flex justify-content-between">
                        <input type="text" placeholder="First Name" className="form-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{marginRight:"20px"}} />
                        {errorFirstName ? <p className="error-message">{errorFirstName}</p> : null}
                        <input type="text" placeholder="Last Name" className="form-input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        {errorLastName ? <p className="error-message">{errorLastName}</p> : null}
                  
    

                      </div>
                    
                 
                        <input type="email" placeholder="Email" className="form-input mt-3" value={emailRegister} onChange={(e) => setEmailRegister(e.target.value)} />
                        {errorEmail ? <p className="error-message">{errorEmail}</p> : null}
                  
                    
                        <input type="tel" placeholder="Phone Number" className="form-input mt-3"  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                   

                       <div className="coolinput2 mt-3">
                        <label className="text2">Birthday:</label>
                        <input  type="date" className="input2" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                       </div>
                        <select name="gender" id="" className="form-input mt-3" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option disabled selected value="">Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                  
    
                    {/* <div className="form-group form">
                        <label className="form-label">Address:</label>
                        <input type="text" className="form-input" value={adress} onChange={(e) => setAdress(e.target.value)} />
                    </div>
    
                    <div className="form-group form">
                        <label className="form-label">Postal Code:</label>
                        <input type="number" className="form-input" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                    </div>
    
                    <div className="form-group form">
                        <label className="form-label">City:</label>
                        <input type="text" className="form-input" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
     */}
                  
                        <input type="password" placeholder="Password" className="form-input mt-3" value={passwordRegister} onChange={(e) => setPasswordRegister(e.target.value)} />
                        {errorPassword ? <p className="error-message">{errorPassword}</p> : null}
            
    
                 
                        <input type="password" placeholder="Confirm Password" className="form-input mt-3" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        {errorConfirmPassword ? <p className="error-message">{errorConfirmPassword}</p> : null}
                    </div>
    
                    <button type='submit'    data-bs-dismiss="modal"
 className="submit-button">Register</button>
    
                   
                </form>
            </div>

            <div className="modal-footer"></div>
          </div>
        </div>
      </div>

    </>

  );
};

export default Login;
