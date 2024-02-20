import { useState, useEffect } from "react";
import { useNavigate, useParams ,Link} from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TbManualGearbox } from "react-icons/tb";


const Favorites = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const[logedUser, setLogedUser] = useState(null);
  const [updated, setUpdated] = useState(false);

  const navigate = useNavigate();
  const placeholderImage = "https://via.placeholder.com/150x150";

  const userId = localStorage.getItem('userId');  


    const userDataString = localStorage.getItem('user'); // Retrieve the string from localStorage
    const user = JSON.parse(userDataString);

  useEffect(() => {
    axios.get(`http://localhost:8000/favorites/${userId}`, {
        withCredentials: true})
      .then((res) => {
        setForm(res.data);

        console.log("Fetched data:", form);
        console.log(res); // log the fetched data object
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);


 
  

  return (
    
      <div>
      <Navbar />
      <h1 className="border-bottom" style={{margin:"100px"}}>Favourites</h1>

      <div className="grid" style={{  margin:"130px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))", gap: "20px" }}>


      {
  form && form.map((item, index) => {
    return (
      <div key={index} className="card m-3 d-flex  flex-row" style={{ width: "20rem", }}>
        <img 
          src={item.image || placeholderImage}
          className="card-img-top"
          alt={item.brandi || "Car Image"}
          style={{ width:"50%", height:"100%" }}
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            <Link to={`/form/${item._id}`}>
              {item.brandi || "Placeholder Name"}
            </Link>
          </h5>
          <div className="card-text text-center">
            <p>  {item.modeli} </p>
             <p><TbManualGearbox />{item.gearbox }</p>
          </div>
        </div>
             
      </div>
    );
  })
  
}




</div>

  </div>

    
  );
};

export default Favorites;
