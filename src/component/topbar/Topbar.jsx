import "./topbar.css";
import {Link} from 'react-router-dom'

const Topbar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to='/' style={{textDecoration:'none'}} >
        <span className="logo" >CatchUp</span>
        </Link>
        </div>
        <div className="topbarCenter">
        <div className="searchbar">
          <img src={`${PF}search.jpeg`} alt="search" className="searchIcon" />
          <input
            placeholder=" search for friends, post or video"
            className="searchInput"
          />
        </div>
        </div>
        <div className="topbarRight">
        <div className="topbarLinks">
          HomePage
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Link to="/login">
            <img
              src={`${PF}persn.jpeg`}
              alt="person"
              style={{ width: "25px" }}
            />
            </Link>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <img
              src={`${PF}chat.jpeg`}
              alt="chat"
              style={{ width: "25px" }}
            />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <img
              src={`${PF}notification.jpeg`}
              alt="notification"
              style={{ width: "25px" }}
            />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="/profile/assests/:username">
        <img src={`${PF}person/1.jpeg`} alt="imge" className="topbarImg" />
        </Link>
     
      </div>
     
    </div>
  );
};

export default Topbar;
