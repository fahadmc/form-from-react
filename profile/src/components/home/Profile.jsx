
import p from "../../assets/WhatsApp Image 2024-10-07 at 08.29.10_a88456d7.jpg";
const Right = () => {
  return (
    <div>
        <div className="profile">
          <div className="r-u">
            <img src={p} className="img" />
            <h2 className="p-h">Profile</h2>
            <div className="john">
              <h2>John Doe</h2>
              <p>john.doe@example.com</p>
            </div>
          </div>
        </div>
        <div>
          <h1>Bio</h1>
          <p>
            A software developer with a passion for learning new technologies
            and improving coding akills
          </p>
          <button className="btn">Edit Profile</button>
        </div>
      </div>

  );
};

export default Right;
