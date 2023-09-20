import { Link } from "react-router-dom";


const User = ({u}) => {
    return (
        <div className="border-4  border-rose-600 p-5 rounded-lg  ">
            <p> name : {u.name}</p>
            <p>username : {u.username}</p>
            <p>address {u.address.street}</p>
            <Link to={`/user/${u.id}`}><button className="bg-rose-700 text-white p-1 rounded-lg  mt-2">show details</button></Link>
        </div>
    );
};

export default User;
