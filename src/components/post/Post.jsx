import { Link, useNavigate } from "react-router-dom";



 
const Post = ({po}) => {
    
    const navigate= useNavigate();


    const handleClick=()=>{

        navigate(`/post/${po.id}`)
        
        
        }


    return (
        <div className="border-4 border-rose-600 p-6 rounded-lg flex flex-col">
            <div className="flex-grow">
            <h1>userId : {po.userId}</h1>
            <h2>title : {po.title}</h2>
            </div>

<Link to={`/post/${po.id}`} >ss</Link>

<button onClick={handleClick} className="bg-rose-700 text-white p-1 rounded-lg  mt-2">post details</button>
         
        </div>
    );
};

export default Post;