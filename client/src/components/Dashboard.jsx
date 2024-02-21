// Dashboard.js

import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '@fortawesome/fontawesome-free/css/all.css';
import './style/Dashboard.css';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const {id}  = useParams();
  const[qyteti, setQyteti] = useState("");
  const[brandi, setBrandi] = useState("");
  const[vitiProdhimit, setVitiProdhimit] = useState("");
  const[fuel, setFuel] = useState("");
  const[reset, setReset] = useState(false);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios
      .get(`http://localhost:8000/forms`, {
        withCredentials: true,
        })
      .then(response => {
        // Set the fetched posts to the state
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [reset]); 


  const filterPosts = (e) => {
    const { name, value, checked } = e.target;
  
    if (name === 'qyteti') {
      const selectedCity = value;
      if (checked) {
        // If the checkbox is checked, add the city to the filter
        setQyteti([...qyteti, selectedCity]);
      } else {
        // If the checkbox is unchecked, remove the city from the filter
        setQyteti(qyteti.filter(city => city !== selectedCity));
      }
    } else if (name === 'brandi') {
      const selectedBrand = value;
      if (checked) {
        // If the checkbox is checked, add the brand to the filter
        setBrandi([...brandi, selectedBrand]);
      } else {
        // If the checkbox is unchecked, remove the brand from the filter
        setBrandi(brandi.filter(brand => brand !== selectedBrand));
      }
    } else if (name === 'fuel') {
      const selectedFuel = value;
      if (checked) {
        setFuel([...fuel, selectedFuel]);
      } else {
        // If the checkbox is unchecked, remove the brand from the filter
        setFuel(fuel.filter(fuel => fuel !== selectedFuel));
      }
    }
    
    
    else if (name === 'vitiProdhimit') {
     const selectedViti = value;
      if (checked) {
        setVitiProdhimit([...vitiProdhimit, selectedViti]);
      } else {
        // If the checkbox is unchecked, remove the brand from the filter
        setVitiProdhimit(vitiProdhimit.filter(viti => viti !== selectedViti));
      }
    }


  }
  
  useEffect(() => {
    let url = 'http://localhost:8000/filtered-forms';
    const queryParams = [];
    if (qyteti.length > 0) {
      queryParams.push(`qyteti=${qyteti.join(',')}`);
    }
    if (brandi.length > 0) {
      queryParams.push(`brandi=${brandi.join(',')}`);
    } 
    if (vitiProdhimit.length > 0) {
      queryParams.push(`vitiProdhimit=${vitiProdhimit.join(',')}`);
    }
    if (fuel.length > 0) {
      queryParams.push(`fuel=${fuel.join(',')}`);
    }
    // if (gearbox) {
    //   queryParams.push(`gearbox=${gearbox}`);
    // }
    // if (price) {
    //   queryParams.push(`price=${price}`);
    // }
    // if (kilometrat) {
    //   queryParams.push(`kilometrat=${kilometrat}`);
    // }
    // if (mainColor) {
    //   queryParams.push(`mainColor=${mainColor}`);
    // }
    // if (bodyType) {
    //   queryParams.push(`bodyType=${bodyType}`);
    // }


    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    axios
      .get(url, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [qyteti, brandi, vitiProdhimit, fuel]);
  
  
  const handleReset = () => {
    setQyteti("");
    setBrandi("");
    setVitiProdhimit("");
    setFuel("");
    setReset(true);
  }
  const openFilters = () => {
    const filter = document.querySelector('#filtersOpen');
    const mainContent = document.querySelector('#mainContentHere');
    filter.classList.remove('w-0');
    filter.classList.add('w-20');
    mainContent.classList.remove('w-100');
    mainContent.classList.add('w-80');
  }

  const closeFilters = () => {
    const filter = document.querySelector('#filtersOpen');
    const mainContent = document.querySelector('#mainContentHere');
    filter.classList.remove('w-20');
    filter.classList.add('w-0');
    mainContent.classList.remove('w-80');
    mainContent.classList.add('w-100');
  }

  return (
    <>
    <Navbar />



    
    <div className="cd-main-content" style={{  display: 'flex', alignItems: 'flex-start',marginTop:"20px" , }}>
		



      {/* //filter/ */}
      <a onClick={openFilters} class="cd-filter-trigger mt-5 filterText">Filters</a>


      <div id='filtersOpen' className="cd-filter w-0 mt-2">
        <div className="d-flex align-items-center" style={{marginTop: "4rem"}}>
        <p className="" onClick={handleReset} style={{marginLeft: "160px", marginRight: "10px", fontStyle:"italic", cursor: "pointer"}}>Reset</p>
        <p  onClick={closeFilters} className='btn bg-color'>Close</p>


        </div>
      <div className="position-relative overflow-auto ">
    
      <div className=" row d-flex justify-content-evenly filtersDiv filterBigDiv" style={{marginTop:"75px",marginLeft:"5px" }}>
      <details className='row'> 

      <summary className='filterSummary'>
        <span className='m-2'>City</span>
        </summary>
    <div  className='row m-2'>
        <label   htmlFor="Tiranë" style={{ display: 'flex', alignItems: 'center' }}>
          <input className='m-2' type="checkbox" id="Tiranë" name="qyteti" value="Tiranë" onChange={filterPosts} checked={qyteti.includes("Tiranë")} />
          Tiranë
        </label>
        <label htmlFor="Durrës" style={{ display: 'flex', alignItems: 'center' }} >
          <input   className='m-2'type="checkbox" id="Durrës" name="qyteti" value="Durrës" onChange={filterPosts} checked={qyteti.includes("Durrës")} />
          Durrës
        </label>
        <label htmlFor='Vlorë' style={{ display: 'flex', alignItems: 'center' }} >
          <input   className='m-2'type="checkbox" id="Vlorë" name="qyteti" value="Vlorë" onChange={filterPosts} checked={qyteti.includes("Vlorë")} />
          Vlorë
        </label>
        <label htmlFor='Shkodër' style={{ display: 'flex', alignItems: 'center' }} >
          <input  className='m-2' type="checkbox" id="Shkodër" name="qyteti" value="Shkodër" onChange={filterPosts} checked={qyteti.includes("Shkodër")} />
          Shkodër
        </label>
        <label htmlFor='Korçë ' style={{ display: 'flex', alignItems: 'center' }} >
          <input  className='m-2' type="checkbox" id="Korçë" name="qyteti" value="Korçë" onChange={filterPosts} checked={qyteti.includes("Korçë")} />
          Korçë
        </label>
        <label htmlFor='Fier' style={{ display: 'flex', alignItems: 'center' }} >
          <input  className='m-2' type="checkbox" id="Fier" name="qyteti" value="Fier" onChange={filterPosts} checked={qyteti.includes("Fier")} />
          Fier
        </label>
        <label htmlFor='Elbasan' style={{ display: 'flex', alignItems: 'center' }} >
          <input  className='m-2' type="checkbox" id="Elbasan" name="qyteti" value="Elbasan" onChange={filterPosts} checked={qyteti.includes("Elbasan")} />
          Elbasan
        </label>
        <label htmlFor='Berat' style={{ display: 'flex', alignItems: 'center' }} >
          <input  className='m-2'type="checkbox" id="Berat" name="qyteti" value="Berat" onChange={filterPosts} checked={qyteti.includes("Berat")} />
          Berat
        </label>
        <label htmlFor='Lushnjë' style={{ display: 'flex', alignItems: 'center' }} >
          <input  className='m-2' type="checkbox" id="Lushnjë" name="qyteti" value="Lushnjë" onChange={filterPosts} checked={qyteti.includes("Lushnjë")} />
          Lushnjë
        </label>
        <label htmlFor='Kavajë' style={{ display: 'flex', alignItems: 'center' }} >
          <input  className='m-2' type="checkbox" id="Kavajë" name="qyteti" value="Kavajë" onChange={filterPosts} checked={qyteti.includes("Kavajë")} />
          Kavajë
        </label>
        <label htmlFor='Pogradec' style={{ display: 'flex', alignItems: 'center' }} >
          <input   className='m-2'type="checkbox" id="Pogradec" name="qyteti" value="Pogradec" onChange={filterPosts} checked={qyteti.includes("Pogradec")} />
          Pogradec
        </label>
        <label htmlFor='Lezhë' style={{ display: 'flex', alignItems: 'center' }} >
          <input  className='m-2' type="checkbox" id="Lezhë" name="qyteti" value="Lezhë" onChange={filterPosts} checked={qyteti.includes("Lezhë")} />
          Lezhë
        </label>
        <label htmlFor='Gjirkoastër'style={{ display: 'flex', alignItems: 'center' }} >
          <input  className='m-2' type="checkbox" id="Gjirkoastër" name="qyteti" value="Gjirkoastër" onChange={filterPosts} checked={qyteti.includes("Gjirkoastër")} />
          Gjirkoastër
        </label>
        <label htmlFor='Sarande'style={{ display: 'flex', alignItems: 'center' }} >
          <input  className='m-2' type="checkbox" id="Sarande" name="qyteti" value="Sarande" onChange={filterPosts} checked={qyteti.includes("Sarande")} />
          Sarande
        </label>
        <label htmlFor='Peshkopi'style={{ display: 'flex', alignItems: 'center' }} >
          <input  className='m-2' type="checkbox" id="Peshkopi" name="qyteti" value="Peshkopi" onChange={filterPosts} checked={qyteti.includes("Peshkopi")} />
          Peshkopi
        </label>
      
        <label htmlFor='Krujë'style={{ display: 'flex', alignItems: 'center' }} >
          <input   className='m-2'type="checkbox" id="Krujë" name="qyteti" value="Krujë" onChange={filterPosts} checked={qyteti.includes("Krujë")} />
          Krujë
        </label>
        </div>
        </details>
      </div>

      <div className=" row d-flex justify-content-evenly filterBigDiv" style={{marginTop:"50px",marginLeft:"5px" }}>
        <details className='row'>
        <summary className='filterSummary' >
          <span className='m-2'>Brand</span>

          </summary>
      <div className='row m-2'>
          
          <label htmlFor="Audi" style={{ display: 'flex', alignItems: 'center' }} >
            <input  className='m-2' type="checkbox" id="Audi" name="brandi" value="Audi" onChange={filterPosts} checked={brandi.includes("Audi")} />
            Audi
          </label>
      
          <label htmlFor="BMW" style={{ display: 'flex', alignItems: 'center' }} >
            <input  className='m-2' type="checkbox" id="BMW" name="brandi" value="BMW" onChange={filterPosts} checked={brandi.includes("BMW")} />
            BMW
          </label>
          <label htmlFor='Mercedes-Benz' style={{ display: 'flex', alignItems: 'center' }} >
            <input  className='m-2' type="checkbox" id="Mercedes-Benz" name="brandi" value="Mercedes-Benz" onChange={filterPosts} checked={brandi.includes("Mercedes-Benz")} />
            Mercedes-Benz
            
          </label>
          <label htmlFor='Toyota' style={{ display: 'flex', alignItems: 'center' }} >
            <input  className='m-2' type="checkbox" id="Toyota" name="brandi" value="Toyota" onChange={filterPosts} checked={brandi.includes("Toyota")} />
            Toyota
          </label>
          <label htmlFor='Volkswagen' style={{ display: 'flex', alignItems: 'center' }} >
            <input  className='m-2' type="checkbox" id="Volkswagen" name="brandi" value="Volkswagen" onChange={filterPosts} checked={brandi.includes("Volkswagen")} />
            Volkswagen
          </label>
          <label htmlFor='Fiat' style={{ display: 'flex', alignItems: 'center' }} >
            <input   className='m-2'type="checkbox" id="Fiat" name="brandi" value="Fiat" onChange={filterPosts} checked={brandi.includes("Fiat")} />
            Fiat
          </label> 
          <label htmlFor='Peugeot' style={{ display: 'flex', alignItems: 'center' }} >
            <input   className='m-2'type="checkbox" id="Peugeot" name="brandi" value="Peugeot" onChange={filterPosts} checked={brandi.includes("Peugeot")} />
            Peugeot
          </label>
          <label htmlFor='Tesla' style={{ display: 'flex', alignItems: 'center' }} >
            <input   className='m-2'type="checkbox" id="Tesla" name="brandi" value="Tesla" onChange={filterPosts} checked={brandi.includes("Tesla")} />
            Tesla
          </label>
          <label htmlFor='Porsche' style={{ display: 'flex', alignItems: 'center' }} >
            <input  className='m-2' type="checkbox" id="Porsche" name="brandi" value="Porsche" onChange={filterPosts} checked={brandi.includes("Porsche")} />
            Opel
          </label>
          <label htmlFor='Lamborghini' style={{ display: 'flex', alignItems: 'center' }} >
            <input  className='m-2' type="checkbox" id="Lamborghini" name="brandi" value="Lamborghini" onChange={filterPosts} checked={brandi.includes("Lamborghini")} />
            Lamborghini
          </label>
          <label htmlFor='Ferrari' style={{ display: 'flex', alignItems: 'center' }} >
            <input   className='m-2'type="checkbox" id="Ferrari" name="brandi" value="Ferrari" onChange={filterPosts} checked={brandi.includes("Ferrari")} />
            Ferrari
          </label>
          </div>
          </details>

      </div>



      <div className="row d-flex justify-content-evenly filterBigDiv" style={{ marginTop: "50px", marginLeft: "4px" }}>
        <details className='row'>
        <summary className='filterSummary'>
      <span className='m-2' htmlFor='fuelToogle'>Fuel Type</span>
    </summary >

            <div className='row m-2'>
                <label htmlFor="Diesel" style={{ display: 'flex', alignItems: 'center' }} >
                    <input className='cyberpunk-checkbox m-2'  type="checkbox" id="Diesel" name="fuel" value="Diesel" onChange={filterPosts} checked={fuel.includes("Diesel")} />
                    Diesel
                </label>
                <label htmlFor="Gasoline" style={{ display: 'flex', alignItems: 'center' }}>
                    <input className='cyberpunk-checkbox m-2' type="checkbox" id="Gasoline" name="fuel" value="Gasoline" onChange={filterPosts} checked={fuel.includes("Gasoline")} />
                    Gasoline
                </label>
                <label htmlFor="Electricity" style={{ display: 'flex', alignItems: 'center' }}>
                    <input className='cyberpunk-checkbox m-2' type="checkbox" id="Electricity" name="fuel" value="Electricity" onChange={filterPosts} checked={fuel.includes("Electricity")} />
                    Electricity
                </label>
                <label htmlFor="Gas" style={{ display: 'flex', alignItems: 'center' }}>
                    <input className='cyberpunk-checkbox m-2' type="checkbox" id="Gas" name="fuel" value="Gas" onChange={filterPosts} checked={fuel.includes("Gas")} />
                    Gas
                </label>
                <label htmlFor="ElectricityPetrol" style={{ display: 'flex', alignItems: 'center' }}>
                    <input className='cyberpunk-checkbox m-2' type="checkbox" id="ElectricityPetrol" name="fuel" value="ElectricityPetrol" onChange={filterPosts} checked={fuel.includes("ElectricityPetrol")} />
                    Hybrid
                </label>
            </div>
        </details>
    </div>



      <div className=" row d-flex justify-content-evenly filterBigDiv" style={{marginTop:"50px",marginLeft:"4px" }}>
        <details className='row'>
        <summary  className='filterSummary'>
          <span className='m-2'>Year Model</span>
          </summary>
      <div className='row m-2'> 
      <label className=''></label>
        {[...Array(2024-2008+1)].map((_, index) => {
            const year = 2024 - index;
            return (
                <label key={year} htmlFor={year} style={{ display: 'flex', alignItems: 'center' }} >
                    <input  
                        className='m-2' 
                        type="checkbox" 
                        id={year} 
                        name="vitiProdhimit" 
                        value={year} 
                        onChange={filterPosts} 
                        checked={vitiProdhimit.includes(year.toString())}
                    />
                    {year}
                </label>
            );
        })}
      </div>
      </details>


      </div>


    </div>


      </div>







                    {/* Dashboard */}
  <div id='mainContentHere' className='w-100'>


      <div className="container-fluid ">
        <div className="container pt-5 pb-3">
            <h1 className="display-4 text-uppercase text-center mb-5">Find Your Car</h1>
            <div className="cd-gallery  row">
            {posts.map(post => (

                <div className="cd-gallery col-lg-4 col-md-6 mb-2">
                    <div className="rent-item mb-4 d-flex flex-column justify-content-between align-items-center" style={{height:"450px"}}>
                        <img className="img-fluid mb-4" width="300px" height="300px"  src={post.image} alt="Car" style={{width:"80%", height:"50%"}}/>
                        <h4 className="text-uppercase mb-4"> 
                        <Link to={`/form/${post._id}`}>
                                {post.brandi}
                                  </Link>
                                  </h4>
                        <div className="d-flex justify-content-center mb-4">
                            <div className="px-2">
                                <i className="fa fa-car text-danger mr-1"> 
                                </i>
                                <h4 className='small'>
                               <span >{post.vitiProdhimit}</span>

                              </h4>

                            </div>
                            <div className="px-2 border-left border-right">
                                <i className="fa fa-cogs text-danger mr-1"></i>
                                <h4 className='small'>
                                <span>{post.gearbox}</span>

                                </h4>
                            </div>
                            <div className="px-2">
                                <i className="fa fa-road text-danger mr-1"></i>
                                <h4 className='small'>
                                <span>{post.kilometrat}KM</span>

                                </h4>
                            </div>
                        </div>
                        <a   className="btn bg-color custom-btn bordered mt-3" href="">{post.price} €/ Day</a>
                    </div>
                </div>

            ))}
            </div>
        </div>
    </div>  


      


  </div>
</div>

    <div>
    <Footer />
    </div>
    
    
    </>
  
  );
};

export default Dashboard;
