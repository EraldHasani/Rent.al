import { useEffect } from "react";
import { useParams } from "react-router";


const userId = localStorage.getItem('userId');
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [post, setPost] = useState(null);

const userDataString = localStorage.getItem('user'); // Retrieve the string from localStorage
const user = JSON.parse(userDataString);
const {id}=useParams();

const DisplayPost = () => {


const MerrPjes = (e) => {
    e.preventDefault();
  
      axios.patch(`http://localhost:8000/api/post/users/${id}`, {
        firstName,
        lastName,
        userId: userId,

      }, {
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data)
            setFirstName("");
            setLastName("");
        }
        )
        .catch((err) => {
          console.log(err)
        })
    
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/post/${id}`, {
      withCredentials: true,
    })
        .then((res) => {
            setPost(res.data.post);
        })
        .catch((err) => {
            console.log(err);
        });
  axios.get(`http://localhost:8000/api/users/${userId}`, {
          withCredentials: true,
        })
        .then((res) => {
            setFirstName(res.data.user.firstName);
            setLastName(res.data.user.lastName);
        })
        .catch((err) => {
            console.log(err);
        });

}
, []);

return (
    <div>
        <h1>Post</h1>
        {post && (
            <div>
                <h2>{post.destinacioni}</h2>
                <p>{post.pershkrimi}</p>
            </div>
        )}
       <button onClick={MerrPjes}>   Merr Pjes </button>
    </div>
);
}

export default DisplayPost;
      