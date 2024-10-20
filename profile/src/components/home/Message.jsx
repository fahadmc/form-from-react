// import { useContext } from "react"
// import { UserContext } from "../../App"

import img1 from"../../assets/D-PR00001025.jpg"
import img2 from"../../assets/D-PR00001022.jpg"
import img3 from "../../assets/D-PR00000956.jpg"
import img4 from "../../assets/D-PR00000730.jpg"
import img5 from "../../assets/D-K146.jpg"
import img6 from "../../assets/D-K540.jpg"

const Message = () => {
  // const user =useContext(UserContext)
  
  return (
    <div className="mparent"> 
      <div className="m1"> <img className="img1" src={img1}/><h3 className="mh1">2 chichen krisper burger</h3><button className="mb1"> ₹ 248.57/-</button></div>
      <div className="m2"> <img className="img2" src={img2} /><h3 className="mh2">2 veg krisper burger</h3><button className="mb2">₹ 179.05/-</button></div>
      <div className="m3"> <img  className="img3"src={img3}/><h3 className="mh3">Indian Tandoori Zinger Burger -with Cheese</h3><button className="mb3">₹ 233.57/-</button></div>
      <div className="m4"> <img  className="img4"src={img4} /><h3 className="mh4">Buddy Meal</h3><button className="mb4">₹ 528.57/- </button></div>
      <div className="m5"> <img  className="img5"src={img5}/><h3 className="mh5">Indian Paneer Zinger Burger</h3><button className="mb5">₹ 400.5/-</button></div>
      <div className="m6"> <img  className="img6"src={img6} /><h3 className="mh6">Mexican Zinger Pro Burger
      </h3><button className="mb6">Rs. 399.05/-</button></div>
    </div>
  )
}

export default Message