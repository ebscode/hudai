import { useLoaderData } from "react-router-dom";
import User from "../user/User";



const Users = () => {
    const users=useLoaderData()

    return (
        <div>
            <p>{users.length}</p>
            <h1>user</h1>
          <div className="grid grid-cols-4 gap-4">
          {
                users.map(u=>
                   <User key={u.id} u={u}></User>,
                   
                )
            }
           
          </div>
        </div>
    );
};

export default Users;