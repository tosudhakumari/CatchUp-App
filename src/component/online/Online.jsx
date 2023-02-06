import "./online.css";

const Online = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarImgContainer">
          <img
            src={PF + user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName">{user.username}</span>
      </li>
    </div>
  );
};

export default Online;
