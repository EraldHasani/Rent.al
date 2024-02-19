import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab, Box } from '@mui/material';
import './style/Register.css';



const Register = () => {

    const { register,registerClient } = useAuth();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState();
    const [errorPassword, setErrorPassword] = useState();
    const [errorConfirmPassword, setErrorConfirmPassword] = useState();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [adress, setAdress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');



    const [errorFirstName, setErrorFirstName] = useState();
    const [errorLastName, setErrorLastName] = useState();
    
    const [value, setValue] = useState('1');
    const [roleClient, setRoleClient] = useState('client');

    const [errorNipt, setErrorNipt] = useState();
    const[firstNameDentist, setFirstNameDentist] = useState('')
    const[lastNameDentist, setLastNameDentist] = useState('')
    const[emailDentist, setEmailDentist] = useState('')
    const[passwordDentist, setPasswordDentist] = useState('')
    const[confirmPasswordDentist, setConfirmPasswordDentist] = useState('')
  
    const [roleDentist, setRoleDentist] = useState('dentist');
    const [nipt, setNipt] = useState('');
    const [isValidNipt, setIsValidNipt] = useState(true);




    const navigate = useNavigate()

    const changeForm = (event, newValue) => {
        setValue(newValue);
    };


    const handleRegisterClient = async (e) => {
        e.preventDefault();

        try {
            // Call the register function from the AuthContext
            await registerClient(firstName, lastName, email,roleClient,phoneNumber,birthday,gender,adress,postalCode,city, password,confirmPassword, );
            navigate('/dashboard')
            // Redirect or perform any other actions after successful registration
        } catch (error) {
            setErrorEmail(error.response.data.errors.email.message)
              setErrorPassword(error.response.data.errors.password.message)
                setErrorConfirmPassword(error.response.data.errors.confirmPassword.message)
                    setErrorFirstName(error.response.data.errors.firstName.message)
                        setErrorLastName(error.response.data.errors.lastName.message)

        }
    };
    // const handleRegisterDentist = async (e) => {
    //     e.preventDefault();

    //     try {
    //         // Call the register function from the AuthContext
    //         await register(firstNameDentist, lastNameDentist, emailDentist, passwordDentist, confirmPasswordDentist, roleDentist, nipt);
    //         navigate('/dashboard')
    //         // Redirect or perform any other actions after successful registration
    //     } catch (error) {
    //         console.log(error)
    //        setErrorEmail(error.response.data.errors.email.message)
    //           setErrorPassword(error.response.data.errors.password.message)
    //             setErrorConfirmPassword(error.response.data.errors.confirmPassword.message)
    //                 setErrorFirstName(error.response.data.errors.firstName.message)
    //                     setErrorLastName(error.response.data.errors.lastName.message)
    //                     setErrorNipt(error.response.data.errors.nipt.message)
    //     }
    // };

    return (

        
        <div className="registration-container">

        <TabContext className="tab-context" value={value}>
            <Box className="tab-box">
                <TabList onChange={changeForm}>
                    <Tab className="tab-item" />
                </TabList>
            </Box>
    
            <TabPanel className='tab-panel' value="1">
                <form className="registration-form" onSubmit={handleRegisterClient}>
                    <h1 className="form-title">Register</h1>
    
                    <div className="form-group form">
                        <label className="form-label">First Name:</label>
                        <input type="text" className="form-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        {errorFirstName ? <p className="error-message">{errorFirstName}</p> : null}
                    </div>
    
                    <div className="form-group form">
                        <label className="form-label">Last Name:</label>
                        <input type="text" className="form-input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        {errorLastName ? <p className="error-message">{errorLastName}</p> : null}
                    </div>
    
                    <div className="form-group form">
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errorEmail ? <p className="error-message">{errorEmail}</p> : null}
                    </div>
    
                    <div className="form-group form">
                        <label className="form-label">Phone Number:</label>
                        <input type="number" className="form-input" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
    
                    <div className="form-group form">
                        <label className="form-label">Birthday:</label>
                        <input type="date" className="form-input" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                    </div>
    
                    <div className="form-group form">
                        <label className="form-label">Gender:</label>
                        <select name="gender" id="" className="form-input" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="Select">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
    
                    <div className="form-group form">
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
    
                    <div className="form-group form">
                        <label className="form-label">Password:</label>
                        <input type="password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {errorPassword ? <p className="error-message">{errorPassword}</p> : null}
                    </div>
    
                    <div className="form-group form">
                        <label className="form-label">Confirm Password:</label>
                        <input type="password" className="form-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        {errorConfirmPassword ? <p className="error-message">{errorConfirmPassword}</p> : null}
                    </div>
    
                    <button type='submit' className="submit-button">Register</button>
    
                    <div className="form-link">
                        <p>Already have an account? <br /> <a className='register-a' href="/login">Login</a></p>
                    </div>
                </form>
            </TabPanel>
        </TabContext>
    </div>
    );
};
export default Register;
      
                {/* <TabPanel className="register-container"   value="2">
                    <form className='register-form2' onSubmit={handleRegisterDentist}>
                        <h1>Register</h1>
                        <div>
                            <label style={{textAlign:"left"}}>First Name:</label>
                            <input type="text" value={firstNameDentist} onChange={(e) => setFirstNameDentist(e.target.value)} />
                        </div>
                        {
                            errorFirstName ?
                                <p className='text-center text-danger'>{errorFirstName}</p>
                                : null
                        }
                        <div style={{textAlign:"left"}}>
                            <label>Last Name:</label>
                            <input type="text" value={lastNameDentist} onChange={(e) => setLastNameDentist(e.target.value)} />
                        </div>
                        {
                            errorLastName ?
                                <p className='text-center text-danger'>{errorLastName}</p>
                                : null
                        }

                        <div style={{textAlign:"left"}}>
                            <label>Email:</label>
                            <input type="email" value={emailDentist} onChange={(e) => setEmailDentist(e.target.value)} />
                        </div>
                        {
                            errorEmail ?
                                <p className='text-center text-danger'>{errorEmail}</p>
                                : null
                        }


                        <div style={{textAlign:"left"}}>
                            <label>Password:</label>
                            <input type="password" value={passwordDentist} onChange={(e) => setPasswordDentist(e.target.value)} />
                        </div>
                        {
                            errorPassword ?
                                <p className='text-center text-danger'>{errorPassword}</p>
                                : null
                        }

                        <div style={{textAlign:"left"}}>
                            <label>NIPT:</label>
                            <input type="text" value={nipt} onChange={(e) => setNipt(e.target.value)} />
                        </div>
                                 {
                            errorNipt ?
                                <p className='text-center text-danger'>{errorNipt}</p>
                                : null
                                 }
                        <div style={{textAlign:"left"}}>
                            <label>Confirm Password:</label>
                            <input type="password" value={confirmPasswordDentist} onChange={(e) => setConfirmPasswordDentist(e.target.value)} />
                        </div>
                        {
                            errorConfirmPassword ?
                                <p className='text-center text-danger'>{errorConfirmPassword}</p>
                                : null
                        }

                        <button className="btn btn-success  m-2" type='submit'>Register</button>
                        <div>
                            <p>Already have an account? <br /> <a href="/login">Login</a></p>
                        </div>
                    </form>
                </TabPanel> */}

            

