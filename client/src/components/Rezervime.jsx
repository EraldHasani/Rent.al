import { useState, useEffect } from "react";
import { useNavigate, useParams ,Link} from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Rezervime = () => {
  const [form, setForm] = useState(null);
const [destinacioni, setDestinacioni] = useState("");
const [pershkrimi, setPershkrimi] = useState("");

const [updated, setUpdated] = useState(false);

  const navigate = useNavigate();
  const placeholderImage = "https://via.placeholder.com/150x150";

  const id = localStorage.getItem('userId');


    const userDataString = localStorage.getItem('user'); // Retrieve the string from localStorage
    const user = JSON.parse(userDataString);


  useEffect(() => {
    axios.get(`http://localhost:8000/api/rezervim/users/${id}`, {
        withCredentials: true})
      .then((res) => {
        setForm(res.data.clinic);

        console.log("Fetched data:", form);
        console.log(res); // log the fetched data object
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);



  const handlePostin = (e,dataRezervimit,cmimiDitor) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/api/post`,{
      destinacioni,
      pershkrimi,
      dataRezervimit,
      cmimiDitor,
      userId: id,
    }, {
      withCredentials: true
      
    })
      .then((res) => {
        console.log(res);
  
      })
      .catch((err) => {
        console.log(err);
      });
  }



 

  return (
    
      <div>
      <Navbar />


  {
    form && form.map((item, index) => {
      return (
        <div className="mt-5" key={index}>
        
          <div className="border p-4">
           <p><Link to={`/form/${item.formId}`} className=" text-center">
              {item.targa || "Placeholder Name"}
            </Link></p> 
            <p  className="text-center">
              Total Price {item.cmimiTotal || null}
            </p>
           
            <p className="text-center">
              Reservation Day {item.dataRezervimit || null}
            </p>
            <p className="text-center">
              Days {item.ditet || null}
            </p>
            <p className="text-center">
              Per Day Price {item.cmimiDitor || null}
            </p>
           
           
          </div>
         
          <button
                  data-bs-toggle="modal"
                  data-bs-target={`#loginModal-${index}`} 
                  className="btn bg-color custom-btn bordered mt-3"
                >
                  Create Reservation Post
                </button>


          <div
        className="modal fade"
        id={`loginModal-${index}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="membershipFormLabel"
        aria-hidden="true"
        
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="membershipFormLabel">
               Create Post 
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
                onSubmit={(e) => handlePostin(e, item.dataRezervimit, item.cmimiDitor)}
              >
                <input type="hidden" name="dataRezervimit" value={item.dataRezervimit}  />
                <input
                  type="text"
                  className="form-control mb-3"
                    placeholder="Destination"
                  value={destinacioni}
                  onChange={(e) => setDestinacioni(e.target.value)}
                />
            <input type="hidden" name="cmimiDitor" value={item.cmimiDitor} />
          

             <textarea className="form-control mb-3" cols="30" rows="3" value={pershkrimi}
                  onChange={(e) => setPershkrimi(e.target.value)} >

                  </textarea>
                

                <button
                  type="submit"
                  className="btn bg-color custom-btn bordered mt-3"
                  id="submit-button"
                  name="submit"
                  data-bs-dismiss="modal"
                >
                  Create
                </button>
              </form>
            </div>

            <div className="modal-footer"></div>
          </div>
        </div>
      </div>

        
        </div>
      )

    })
  }

  </div>

    
  );
};

export default Rezervime;