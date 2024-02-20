// Dashboard.js

import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '@fortawesome/fontawesome-free/css/all.css';


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
  

  return (
    <>
    <Navbar />



    
    <div style={{ display: 'flex', alignItems: 'flex-start',marginTop:"80px" }}>
  <div style={{ width: '20%', marginRight: '20px' }}>
  <div className="position-relative overflow-auto ">
  <label className='m-3'>City</label>
  <div className='row m-2 d-flex justify-content-evenly'>

    <label  htmlFor="Tiranë">
      <input className='m-2' type="checkbox" id="Tiranë" name="qyteti" value="Tiranë" onChange={filterPosts} checked={qyteti.includes("Tiranë")} />
      Tiranë
    </label>
    <label htmlFor="Durrës">
      <input   className='m-2'type="checkbox" id="Durrës" name="qyteti" value="Durrës" onChange={filterPosts} checked={qyteti.includes("Durrës")} />
      Durrës
    </label>
    <label htmlFor='Vlorë'>
      <input   className='m-2'type="checkbox" id="Vlorë" name="qyteti" value="Vlorë" onChange={filterPosts} checked={qyteti.includes("Vlorë")} />
      Vlorë
    </label>
    <label htmlFor='Shkodër'>
      <input  className='m-2' type="checkbox" id="Shkodër" name="qyteti" value="Shkodër" onChange={filterPosts} checked={qyteti.includes("Shkodër")} />
      Shkodër
    </label>
    <label htmlFor='Korçë'>
      <input  className='m-2' type="checkbox" id="Korçë" name="qyteti" value="Korçë" onChange={filterPosts} checked={qyteti.includes("Korçë")} />
      Korçë
    </label>
    <label htmlFor='Fier'>
      <input  className='m-2' type="checkbox" id="Fier" name="qyteti" value="Fier" onChange={filterPosts} checked={qyteti.includes("Fier")} />
      Fier
    </label>
    <label htmlFor='Elbasan'>
      <input  className='m-2' type="checkbox" id="Elbasan" name="qyteti" value="Elbasan" onChange={filterPosts} checked={qyteti.includes("Elbasan")} />
      Elbasan
    </label>
    <label htmlFor='Berat'>
      <input  className='m-2'type="checkbox" id="Berat" name="qyteti" value="Berat" onChange={filterPosts} checked={qyteti.includes("Berat")} />
      Berat
    </label>
    <label htmlFor='Lushnjë'>
      <input  className='m-2' type="checkbox" id="Lushnjë" name="qyteti" value="Lushnjë" onChange={filterPosts} checked={qyteti.includes("Lushnjë")} />
      Lushnjë
    </label>
    <label htmlFor='Kavajë'>
      <input  className='m-2' type="checkbox" id="Kavajë" name="qyteti" value="Kavajë" onChange={filterPosts} checked={qyteti.includes("Kavajë")} />
      Kavajë
    </label>
    <label htmlFor='Pogradec'>
      <input   className='m-2'type="checkbox" id="Pogradec" name="qyteti" value="Pogradec" onChange={filterPosts} checked={qyteti.includes("Pogradec")} />
      Pogradec
    </label>
    <label htmlFor='Lezhë'>
      <input  className='m-2' type="checkbox" id="Lezhë" name="qyteti" value="Lezhë" onChange={filterPosts} checked={qyteti.includes("Lezhë")} />
      Lezhë
    </label>
    <label htmlFor='Gjirkoastër'>
      <input  className='m-2' type="checkbox" id="Gjirkoastër" name="qyteti" value="Gjirkoastër" onChange={filterPosts} checked={qyteti.includes("Gjirkoastër")} />
      Gjirkoastër
    </label>
    <label htmlFor='Sarande'>
      <input  className='m-2' type="checkbox" id="Sarande" name="qyteti" value="Sarande" onChange={filterPosts} checked={qyteti.includes("Sarande")} />
      Sarande
    </label>
    <label htmlFor='Peshkopi'>
      <input  className='m-2' type="checkbox" id="Peshkopi" name="qyteti" value="Peshkopi" onChange={filterPosts} checked={qyteti.includes("Peshkopi")} />
      Peshkopi
    </label>
   
    <label htmlFor='Krujë'>
      <input   className='m-2'type="checkbox" id="Krujë" name="qyteti" value="Krujë" onChange={filterPosts} checked={qyteti.includes("Krujë")} />
      Krujë
    </label>

      

      

  </div>

  <div>
  <label className='m-3'>Fuel Type</label>
  <div className='row m-2'>
      <label htmlFor="Diesel">
      <input  className='m-2' type="checkbox" id="Diesel" name="fuel" value="Diesel" onChange={filterPosts} checked={fuel.includes("Diesel")} />
      Diesel</label>
      <label htmlFor="Gasoline">
      <input  className='m-2' type="checkbox" id="Gasoline" name="fuel" value="Gasoline" onChange={filterPosts} checked={fuel.includes("Gasoline")} />
      Gasoline</label>
      <label htmlFor="Electricity">
      <input  className='m-2' type="checkbox" id="Electricity" name="fuel" value="Electricity" onChange={filterPosts} checked={fuel.includes("Electricity")} />
      Electricity</label>
      </div>
  </div>

  <div>
  <label className='m-3'>Brand</label>
  <div className='row m-2'>
      
      <label htmlFor="Audi">
        <input  className='m-2' type="checkbox" id="Audi" name="brandi" value="Audi" onChange={filterPosts} checked={brandi.includes("Audi")} />
        Audi
      </label>
  
      <label htmlFor="BMW">
        <input  className='m-2' type="checkbox" id="BMW" name="brandi" value="BMW" onChange={filterPosts} checked={brandi.includes("BMW")} />
        BMW
      </label>
      <label htmlFor='Mercedes-Benz'>
        <input  className='m-2' type="checkbox" id="Mercedes-Benz" name="brandi" value="Mercedes-Benz" onChange={filterPosts} checked={brandi.includes("Mercedes-Benz")} />
        Mercedes-Benz
        
      </label>
      <label htmlFor='Toyota'>
        <input  className='m-2' type="checkbox" id="Toyota" name="brandi" value="Toyota" onChange={filterPosts} checked={brandi.includes("Toyota")} />
        Toyota
      </label>
      <label htmlFor='Volkswagen'>
        <input  className='m-2' type="checkbox" id="Volkswagen" name="brandi" value="Volkswagen" onChange={filterPosts} checked={brandi.includes("Volkswagen")} />
        Volkswagen
      </label>
      <label htmlFor='Fiat'>
        <input   className='m-2'type="checkbox" id="Fiat" name="brandi" value="Fiat" onChange={filterPosts} checked={brandi.includes("Fiat")} />
        Fiat
      </label>
      <label htmlFor='Peugeot'>
        <input   className='m-2'type="checkbox" id="Peugeot" name="brandi" value="Peugeot" onChange={filterPosts} checked={brandi.includes("Peugeot")} />
        Peugeot
      </label>
      <label htmlFor='Tesla'>
        <input   className='m-2'type="checkbox" id="Tesla" name="brandi" value="Tesla" onChange={filterPosts} checked={brandi.includes("Tesla")} />
        Tesla
      </label>
      <label htmlFor='Porsche'>
        <input  className='m-2' type="checkbox" id="Porsche" name="brandi" value="Porsche" onChange={filterPosts} checked={brandi.includes("Porsche")} />
        Opel
      </label>
      <label htmlFor='Lamborghini'>
        <input  className='m-2' type="checkbox" id="Lamborghini" name="brandi" value="Lamborghini" onChange={filterPosts} checked={brandi.includes("Lamborghini")} />
        Lamborghini
      </label>
      <label htmlFor='Ferrari'>
        <input   className='m-2'type="checkbox" id="Ferrari" name="brandi" value="Ferrari" onChange={filterPosts} checked={brandi.includes("Ferrari")} />
        Ferrari
      </label>
      </div>

  </div>



  <div>
  <label className='m-3'>Year Model</label>
  <div className='row m-2'> 
      <label htmlFor="2008">
        <input  className='m-2' type="checkbox" id="2008" name="vitiProdhimit" value="2008" onChange={filterPosts} checked={vitiProdhimit.includes("2008")} />
        2008
       </label>
     <label htmlFor="2009">
        <input  className='m-2' type="checkbox" id="2009" name="vitiProdhimit" value="2009" onChange={filterPosts} checked={vitiProdhimit.includes("2009")}/>
        2009
      </label>
    <label htmlFor="2010">
        <input  className='m-2' type="checkbox" id="2010" name="vitiProdhimit" value="2010" onChange={filterPosts} checked={vitiProdhimit.includes("2010")} />
        2010
      </label>
    <label htmlFor="2011">
        <input  className='m-2' type="checkbox" id="2011" name="vitiProdhimit" value="2011" onChange={filterPosts} checked={vitiProdhimit.includes("2011")} />
        2011
      </label>

    <label htmlFor="2012">
        <input  className='m-2' type="checkbox" id="2012" name="vitiProdhimit" value="2012" onChange={filterPosts}checked={vitiProdhimit.includes("2012")}/>
        2012
      </label>
   <label htmlFor="2013">
        <input  className='m-2' type="checkbox" id="2013" name="vitiProdhimit" value="2013" onChange={filterPosts} checked={vitiProdhimit.includes("20013")} />
        2013
      </label>
    <label htmlFor="2014">
        <input  className='m-2' type="checkbox" id="2014" name="vitiProdhimit" value="2014" onChange={filterPosts} checked={vitiProdhimit.includes("2014")} />
        2014
      </label>
      <label htmlFor="2015">
        <input  className='m-2' type="checkbox" id="2015" name="vitiProdhimit" value="2015" onChange={filterPosts} checked={vitiProdhimit.includes("2015")}/>
        2015
      </label>
      <label htmlFor="2016">
        <input  className='m-2' type="checkbox" id="2016" name="vitiProdhimit" value="2016" onChange={filterPosts} checked={vitiProdhimit.includes("2016")}/>
        2016
      </label>
      <label htmlFor="2017">
        <input  className='m-2' type="checkbox" id="2017" name="vitiProdhimit" value="2017" onChange={filterPosts} checked={vitiProdhimit.includes("2017")}/>
        2017 
      </label>
      <label htmlFor="2018">
        <input   className='m-2'type="checkbox" id="2018" name="vitiProdhimit" value="2018" onChange={filterPosts} checked={vitiProdhimit.includes("2018")} />
        2018
      </label>
      <label htmlFor="2019">
        <input  className='m-2' type="checkbox" id="2019" name="vitiProdhimit" value="2019" onChange={filterPosts} checked={vitiProdhimit.includes("2019")} />
        2019
      </label>
      <label htmlFor="2020">
        <input  className='m-2' type="checkbox" id="2020" name="vitiProdhimit" value="2020" onChange={filterPosts} checked={vitiProdhimit.includes("2020")}/>
        2020
      </label>
      <label htmlFor="2021">
        <input  className='m-2' type="checkbox" id="2021" name="vitiProdhimit" value="2021" onChange={filterPosts} checked={vitiProdhimit.includes("2021")} />
        2021
      </label>
      <label htmlFor="2022">
        <input  className='m-2' type="checkbox" id="2022" name="vitiProdhimit" value="2022" onChange={filterPosts} checked={vitiProdhimit.includes("2022")}/>
        2022
      </label>
      <label htmlFor="2023">
        <input  className='m-2' type="checkbox" id="2023" name="vitiProdhimit" value="2023" onChange={filterPosts} checked={vitiProdhimit.includes("2023")} />
        2023
        </label>
        <label htmlFor="2024">
        <input  className='m-2' type="checkbox" id="2024" name="vitiProdhimit" value="2024" onChange={filterPosts} checked={vitiProdhimit.includes("2024")} />
        2024
        </label>
  </div>


  {/* <div className='row m-2'> 
    {[...Array(2024-2008+1)].map((_, index) => {
        const year = 2008 + index;
        return (
            <label key={year} htmlFor={year}>
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
</div> */}
  </div>
  <button className="ressetButton m-4" onClick={handleReset}>Reset</button>
</div>


                    </div>
  <div style={{ width: '70%' }}>

      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <h1 className="display-4 text-uppercase text-center mb-5">Find Your Car</h1>
            <div className="row">
            {posts.map(post => (

                <div className="col-lg-4 col-md-6 mb-2">
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
                                <h6 className='small'>
                               <span >{post.vitiProdhimit}</span>

                              </h6>

                            </div>
                            <div className="px-2 border-left border-right">
                                <i className="fa fa-cogs text-danger mr-1"></i>
                                <h6 className='small'>
                                <span>{post.gearbox}</span>

                                </h6>
                            </div>
                            <div className="px-2">
                                <i className="fa fa-road text-danger mr-1"></i>
                                <h6 className='small'>
                                <span>{post.kilometrat}KM</span>

                                </h6>
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
