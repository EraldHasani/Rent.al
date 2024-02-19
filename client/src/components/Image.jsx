// import {useState} from "react";
// import axios from "axios";


// function Image() {
//     const [image, setImage] = useState("")

//     const submitImage = async (e) => {
//         e.preventDefault()
//         const formData = new FormData();
//         formData.append("image",image );

   
       

//     const result= await axios.post("http://localhost:8000/upload-images", 
//     formData,
//     {
//         headers: {  'Content-Type': 'multipart/form-data'},
//     }
//     );
//  };

//  const onInputChange = (e) => {
//     console.log(e.target.files[0]);
//     setImage(e.target.files[0])
// };


//     console.log(result.data)



//     return (
//         <div>
//             <form onSubmit={submitImage}>
//                 <input type="file" name="image" onChange={onInputChange} />
//                 <button type="submit">Submit</button>
//             </form>

//         </div>
//     )
// }
// export default Image;