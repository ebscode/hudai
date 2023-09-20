import { useNavigate, useRouteError } from "react-router-dom";


const Errorpage = () => {
const navigate=useNavigate()

const gobari=()=>{
navigate('/')

}

    const error=useRouteError()

    return (
        <div className="items-center text-center ">
            <p>Oops!!!!</p>
            <p className="font-bold text-5xl">{error.statusText || error.message}</p>
      
            <button onClick={gobari} className="bg-rose-700 text-white p-1 rounded-lg  mt-2">go home</button>
        </div>
    );
};

export default Errorpage;