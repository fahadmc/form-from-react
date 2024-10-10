

import "./Home.css";
import Left from "../Home/Left"
import Nave from '../Home/Nave'

// import Left from "../Home/";/
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";


const Home = () => {
  const user=useContext(UserContext)
  console.log(user);
  
  return (
    <div>
      <Nave />
      <div className="main">
        <Left />
        <div className="right" >
          <Outlet/>
         
            
          
        </div>
      </div>
    </div>
  );
};

export default Home;
