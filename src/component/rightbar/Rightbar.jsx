import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({ Profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assests/gift.png" alt="birthday" className="birthdayImg" />
          <span className="birthdayText">
            <b>dolly</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="assests/ad.png" alt="adds" className="rightbarAd" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar=()=>{
    return(
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">city</span>
          <span className="rightbarInfoValue">NewYork</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From</span>
          <span className="rightbarInfoValue">India</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="righbarFollowing">
          <img src="assests/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ashish</span>
        </div>
        <div className="righbarFollowing">
          <img src="assests/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">sudha</span>
        </div>
        <div className="righbarFollowing">
          <img src="assests/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">kabbu</span>
        </div>
        <div className="righbarFollowing">
          <img src="assests/person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">anshu</span>
        </div>
        <div className="righbarFollowing">
          <img src="assests/person/7.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">nitin</span>
        </div>
        <div className="righbarFollowing">
          <img src="assests/person/8.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">khushbo</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightWrapper">
        {Profile ? <ProfileRightbar/> :<HomeRightbar/>}
      </div>
    </div>
  );
};

export default Rightbar;
