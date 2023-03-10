import "./Profile.css";
import Topbar from "../../component/topbar/Topbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Rightbar from "../../component/rightbar/Rightbar";
import Feed from "../../component/feed/Feed";
const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={`${PF}post/2.jpeg`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={`${PF}person/2.jpeg`}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profilename">sudha</h4>
              <span className="profileInfoDesc">hello to the world</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
