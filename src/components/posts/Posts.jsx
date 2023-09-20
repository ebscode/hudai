import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";


const Posts = () => {
    const post=useLoaderData()
    return (
        <div className="grid grid-cols-4 gap-4 ">
            {
                post.map(po=> <Post key={po.id} po={po}></Post>)
            }
        </div>
    );
};

export default Posts;