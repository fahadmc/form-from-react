
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <div>
      <div className="left">
        <ul className="ul">
          <Link className="link"  to={"/Home"}>
            <li className="li">Profile</li>
          </Link>
          <Link className="link" to={"/Home/message"}>
            <li className="li">Message</li>
          </Link>
          <Link className="link" to={"/Home/settings"}>
            <li className="li">Settings</li>
          </Link>
          <Link className="link" to={"/Home/blog"}>
            <li className="li">Blog</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Left;
