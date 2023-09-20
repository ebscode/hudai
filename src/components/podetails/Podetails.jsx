import { useLoaderData, useNavigate } from "react-router-dom";


const Podetails = () => {
    const pod=useLoaderData()
    const navigate=useNavigate();
    const gohandle=()=>{
        navigate(-1)
    }
    return (
        <div className="font-medium text-green-700 text-center m-8">
           <h1> {pod.body}</h1>
           <button onClick={gohandle} className="bg-rose-700 text-white p-1 rounded-lg  mt-2">go back</button>

        </div>
    );
};

export default Podetails;