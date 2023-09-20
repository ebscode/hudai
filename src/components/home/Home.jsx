import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useNavigation } from "react-router-dom";


const Home = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>

          <h1>always visible</h1>
          {
             navigation.state === "loading"
             ? <p>loading....</p> : <Outlet></Outlet>
          }
            
        </div>
    );
};

export default Home;