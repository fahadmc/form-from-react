
import { Link } from "react-router-dom";
import "./Home.css";

const Left = () => {
  return (
    <div>
      <div className="left">
        <ul className="ul">
          <Link className="link"  to={"/Home"}>
            <li className="li1">Profile</li>
          </Link>
          <Link className="link" to={"/Home/message"}>
            <li className="li2">Message</li>
          </Link>
          <Link className="link" to={"/Home/settings"}>
            <li className="li3">Settings</li>
          </Link>
          <Link className="link" to={"/Home/blog"}>
            <li className="li4">Blog</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Left;
