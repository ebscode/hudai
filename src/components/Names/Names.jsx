import { useLoaderData } from "react-router-dom";


const Names = () => {
    const jj=useLoaderData()
    return (
        <div className="bg-slate-400 w-1/4 p-4 rounded-xl ml-11 mt-11 text-white font-medium">
            <p> name : {jj.name}</p>
            <p>email : {jj.email}</p>
        </div>
    );
};

export default Names;