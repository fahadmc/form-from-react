
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <div>
      <div className="left">
        <ul className="ul">
          <Link className="link"  to={"/Home"}>
            <li className="li1">Profile</li>
           
          </Link>
          <Link className="link" to={"/Home/message"}>
            <li className="li2">Burger's</li></Link>

            <Link className="link" to={"/Home/Lb1"}>
            <li className="lb1">2 chichen krisper burger</li>
            </Link>

          
          
            <Link className="link" to={"/Home/Lb2"}>
            <li className="lb1">2 Veg krisper burger</li>
            </Link>

            <Link className="link" to={"/Home/Lb3"}>
            <li className="lb1">Indian Tandoori Zinger</li>
            </Link>

            <Link className="link" to={"/Home/Lb4"}>
            <li className="lb1">Buddy Meal</li>
            </Link>

            <Link className="link" to={"/Home/Lb5"}>
            <li className="lb1">Indian Paneer Zinger</li>
            </Link>

            <Link className="link" to={"/Home/Lb6"}>
            <li className="lb1">Mexican Zinger Pro Burger</li>
            </Link>



          <Link className="link" to={"/Home/settings"}>
            <li className="li3">Pizza's</li>

          <Link className="link" to={"/Home/Lp1"}>
            <li className="lp1">Chicken Pepperoni</li></Link>

          <Link className="link" to={"/Home/Lp2"}>
            <li className="lp1">Chicken Supreme</li></Link>

          <Link className="link" to={"/Home/Lp3"}>
            <li className="lp1">Country Feast</li></Link>

          <Link className="link" to={"/Home/Lp4"}>
            <li className="lp1">Malai-chicken-tikka</li></Link>

          <Link className="link" to={"/Home/Lp5"}>
            <li className="lp1">Momo-mia-non-veg</li></Link>

          <Link className="link" to={"/Home/Lp6"}>
            <li className="lp1">veggie-supreme-cheese-maxx</li></Link>

          </Link>


          <Link className="link" to={"/Home/blog"}>
            <li className="li4">Cool Drinks </li>

            <Link className="link" to={"/Home/Lc1"}>
            <li className="lc1">Pepsi 475ml PET</li></Link>

            <Link className="link" to={"/Home/Lc2"}>
            <li className="lc1">Pepsi Can 300 ml</li></Link>

            <Link className="link" to={"/Home/Lc3"}>
            <li className="lc1">Pepsi Black Can 300 ml</li></Link>

            <Link className="link" to={"/Home/Lc4"}>
            <li className="lc1">7UP Can 300 ml</li></Link>

            <Link className="link" to={"/Home/Lc5"}>
            <li className="lc1">Sting-Energy</li></Link>

            <Link className="link" to={"/Home/Lc6"}>
            <li className="lc1">Mirinda Can 300 ml</li></Link>

           
          </Link>

        </ul>
      </div>
    </div>
  );
};

export default Left;
