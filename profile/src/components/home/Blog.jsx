
import cmg1 from"../../asset2/D-K350.jpg"
import cmg2 from "../../asset2/D-K485.jpg";
import cmg3 from "../../asset2/D-K486.jpg"
import cmg4 from "../../asset2/D-K487.jpg"
import cmg5 from "../../asset2/D-K488.jpg"
import cmg6 from "../../asset2/sting-energy-drink-red.jpg"
import { Link } from "react-router-dom"

const Blog = () => {
  return (
    <div className=" cmain">
      <Link to={"/Home/Lc1"}>
      <img className="cmg1" src={cmg1} /><h3 className="ch1">Pepsi 475ml PET</h3><button className="cb1">₹57.00</button>
      </Link>
      <Link to={"/Home/Lc2"}>

      <img className="cmg2" src={cmg2} /><h3 className="ch2">Pepsi Can 300 ml</h3><button className="cb2">₹30.00</button>
      </Link>
      <Link to={"/Home/Lc3"}>
      <img className="cmg3" src={cmg3} /><h3 className="ch3">Pepsi Black Can 300 ml</h3><button className="cb3">₹30.00</button>
      </Link>
      <Link to={"/Home/Lc4"}>
      <img className="cmg4" src={cmg4} /><h3 className="ch4">7UP Can 300 ml</h3><button className="cb4">₹30.00</button>
      </Link>
      <Link to={"/Home/Lc5"}>
      <img className="cmg5" src={cmg5} /><h3 className="ch5">Sting-Energy</h3><button className="cb5">₹20.00</button>\
      </Link>
      <Link to={"/Home/Lc6"}>
      <img className="cmg6" src={cmg6} /><h3 className="ch6">Mirinda Can 300 ml</h3><button className="cb6">₹30.00</button>
      </Link>


    </div>
  )
}

export default Blog