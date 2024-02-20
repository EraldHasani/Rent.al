import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '@fortawesome/fontawesome-free/css/all.css';
import { TbManualGearbox } from "react-icons/tb";

const DisplayOne = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const navigate = useNavigate();
  const placeholderImage = "https://via.placeholder.com/150x150";
  const[logedUser, setLogedUser] = useState(null);
  const userId = localStorage.getItem('userId');
  const [updated, setUpdated] = useState(false);
  const [ditet, setDitet] = useState("");
  const [DataMarrjes, setDataMarrjes] = useState("");


    const userDataString = localStorage.getItem('user'); // Retrieve the string from localStorage
    const user = JSON.parse(userDataString);

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

    axios.get(`http://localhost:8000/forms/${id}`, {
        withCredentials: true})
      .then((res) => {
        setForm(res.data);
        console.log("Fetched data:", form);
        console.log(res); // log the fetched data object
        setUpdated(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updated]);

  const AddFavorite = () => {
    axios.post(`http://localhost:8000/favorites/${id}/${userId}`,{
     

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

  const RemoveFavorite = () => {

    axios.post(`http://localhost:8000/deleteFavorite/${id}/${userId}`,{
     
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

const handleReservation = (e) => {
  e.preventDefault();
  let cmimiTotal=ditet*form.price;



  axios.post(`http://localhost:8000/rezervim`,{
    ditet,
    dataRezervimit:DataMarrjes,
    targa: form.targa,
    cmimiTotal: cmimiTotal,
    cmimiDitor: form.price,
    userId: userId,
    formId: id,

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
  axios.post(`http://localhost:8000/eLire/${id}`,{
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
  axios.post(`http://localhost:8000/eZene/${id}`,{
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
    <div style={{marginTop:"50px"}}>
      <Navbar />
      <div>


      <div className="bg-custom-brown p-4 align-items-center d-flex justify-content-evenly">
     {
      form && form.eLire ? (
        <button
                  data-bs-toggle="modal"
                  data-bs-target="#RentModal"
                  className="btn bg-color custom-btn bordered mt-3"
                >
                  Rent
                </button>
      ) : null

     } 

                <div
        className="modal fade"
        id="RentModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="membershipFormLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="membershipFormLabel">
              Rent
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
                onSubmit={handleReservation}
              >
                <input
                  type="number"
                  className="form-control mb-3"
                    placeholder="Number of Days"
                  value={ditet}
                  onChange={(e) => setDitet(e.target.value)}
                />

                <input
                  type="date"
                  className="form-control mb-3"
                  placeholder="Reservation Day"
                  value={DataMarrjes}
                  onChange={(e) => setDataMarrjes(e.target.value)}
                />

                <button
                  type="submit"
                  className="btn bg-color custom-btn bordered mt-3"
                  id="submit-button"
                  name="submit"
                  data-bs-dismiss="modal"
                >
                  Book
                </button>
              </form>
            </div>

            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
  <div>
{
    logedUser &&form &&  logedUser._id=== form.userId && !form.eLire ? (
        <button  className="btn bg-color custom-btn bordered mt-3"  onClick={handleELire}>Make Available</button>
    ) : null
}

      {
   logedUser  &&form && logedUser._id=== form.userId && form.eLire ? (
        <button  className="btn bg-color custom-btn bordered mt-3" onClick={handleEZene}>Make Occupied</button>
    ) : null
}

  </div>
 
      <div>
      {
        logedUser && logedUser.favorites.includes(id) ? 
        <button  className="btn bg-color custom-btn bordered mt-3" onClick={RemoveFavorite}>Remove Favorite</button> : 
        
        <button  className="btn bg-color custom-btn bordered mt-3" onClick={AddFavorite}>Add Favorite</button>

      }
      </div>
      </div>
     
        <div>
          {form && (
            <img
              src={form.image || placeholderImage}
              alt={form.brandi || "Car Image"}
              style={{ width: "65%", height:"450px", borderRadius: "8px", marginLeft:"17%" }}
            />
          )}
          <div >
            <h2 className=" text-center">
              {form ? form.brandi : "Placeholder Name"}
            </h2>
            <p className="text-center">
               {form ? form.modeli : null}
            </p>
          </div>
          <div className="d-flex justify-content-around">
         <p> <i class="fa-solid fa-calendar-days fa-4xs m-2">  </i>
         {form ? form.vitiProdhimit : null}
          </p> 

            <p> <i className="fa fa-road text mr-1 m-2"></i>
              {form ? form.kilometrat : null} KM</p>

            <p>
          <TbManualGearbox /> {form ? form.gearbox : null} </p>

            <p><i class="fa-solid fa-gas-pump m-2"></i>

              {form ? form.fuel : null} </p>
          </div>

          
          <div className=" p-5 m-3" >
            <h1 className="border-bottom m-2">Specifications</h1>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column me-4">
             
              <div>
                  <label>Number Plate</label>
                  <p className="fw-bold">
                    {form ? form.targa : "Placeholder qyteti"}
                  </p>

                </div>
             
                <div>

                  <label>Per Day</label>
                  <p className="fw-bold">
              
                    {form ? form.price : "Placeholder Model"} €
                  </p>
                </div>
               
                <div>
                  <label>Color</label>
                  <p className="fw-bold">
                    {form ? form.mainColor : "Placeholder Model"}
                  </p>
                </div>
                <div>
                  <label>Interior Color</label>
                  <p className="fw-bold">
                    {form ? form.interiorColor : "Placeholder qyteti"}
                  </p>
                </div>
                
                <div>
                  <label>Number of Seats</label>
                  <p className="fw-bold">
                    {form ? form.numberOfSeats : "Placeholder Model"}
                  </p>
                </div>
              </div>

              <div className="d-flex flex-column me-4">
                <div>
                  <label>Power HP</label>
                  <p className="fw-bold">
                    {form ? form.powerInHp : "Placeholder Model"} /hp
                  </p>
                </div>
                <div>
                  <label>Engine displacement</label>
                  <p className="fw-bold">
                    {form ? form.cylinderVolumeInLiters : "Placeholder Model"}
                  </p>
                </div>
                <div>
                  <label>Weight</label>
                  <p className="fw-bold">
                    {form ? form.netWeightInKg : "Placeholder Model"} kg
                  </p>
                </div>
                <div>
                  <label>Emission Standard</label>
                  <p className="fw-bold">
                    {form ? form.co2EmissionsIgKm : "Placeholder Model"}
                  </p>
                </div>
               
                <div>
                  <label>Car Weight</label>
                  <p className="fw-bold">
                    {form ? form.netWeightInKg : "Placeholder Model"}
                  </p>
                </div>
              </div>

              <div className="d-flex flex-column">
                <div>
                  <label>Number of Doors</label>
                  <p className="fw-bold">
                    {form ? form.numberOfDoors : "Placeholder Model"}
                  </p>
                </div>
                <div>
                  <label>City Location</label>
                  <p className="fw-bold">
                    {" "}
                    {form ? form.qyteti : "Placeholder qyteti"}
                  </p>
                </div>
               
              
                <div>
                  <label>Chassis Nr.</label>
                  <p className="fw-bold">
                    {form ? form.shasia : "Placeholder Model"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-none">
           <div className="card-body ">
           <h5 className="card-title mb-4">Description</h5>
           <p className="card-text">{form ? form.description : null} </p>                                           
           </div>  
           </div>

        



          <div className=" p-5 m-4">
  <h1>Options</h1>
  {form && Object.keys(form).length > 0 && (
    <div className="row row-cols-1 g-2">


    <h3 className="border-bottom">Exterior</h3>
      {form.exterior &&
        Object.keys(form.exterior).map((item) => (
          <div key={item} className="col-md-4">
            {form.exterior[item] && (
              <div className="m-3">
                <label>{item}</label>
              </div>
            )}
          </div>
        ))}
      
   
      <h3 className="border-bottom ">Driver Assistance</h3>

      {form.driverAssistance &&
        Object.keys(form.driverAssistance).map((item) => (
          <div key={item} className="col-md-4">
            {form.driverAssistance[item] && (
              <div className="m-3">
                <label>{item}</label>
              </div>
            )}
          </div>
        ))}
       
  
     <h3 className="border-bottom ">Interior</h3>

      {form.interior &&
        Object.keys(form.interior).map((item) => (
          <div key={item} className="col-md-4">
            {form.interior[item] && (
              <div className="m-3">
                <label>{item}</label>
              </div>
            )}
          </div>
        ))}

      <h3 className="border-bottom ">Entertainment</h3>

      {form.mediaEntertainment &&
        Object.keys(form.mediaEntertainment).map((item) => (
          <div key={item} className="col-md-4">
            {form.mediaEntertainment[item] && (
              <div className="m-3">
                <label>{item}</label>
              </div>
            )}
          </div>
        ))}

      <h3 className="border-bottom">Comfort</h3>

      {form.comfort &&
        Object.keys(form.comfort).map((item) => (
          <div key={item} className="col-md-4">
            {form.comfort[item] && (
              <div className="m-3">
                <label>{item}</label>
              </div>
            )}
          </div>
        ))}


      <h3 className="border-bottom ">Security</h3>

      {form.security &&
        Object.keys(form.security).map((item) => (
          <div key={item} className="col-md-4">
            {form.security[item] && (
              <div className="m-3">
                <label>{item}</label>
              </div>
            )}
          </div>
        ))}

    <h3 className="border-bottom ">Engine Drive</h3>

      {form.engineDrive &&
        Object.keys(form.engineDrive).map((item) => (
          <div key={item} className="col-md-4">
            {form.engineDrive[item] && (
              <div className="m-3">
                <label>{item}</label>
              </div>
            )}
          </div>
        ))}

       

      
    </div>
  )}
</div>


          <div className="d-flex justify-content-around">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline-success mt-4"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DisplayOne;
