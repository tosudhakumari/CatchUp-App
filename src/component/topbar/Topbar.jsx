import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">CatchUp</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <img src="/assests/search.jpeg" alt="search" className="searchIcon" />
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
            <img
              src="/assests/persn.jpeg"
              alt="person"
              style={{ width: "25px" }}
            />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <img
              src="/assests/chat.jpeg"
              alt="chat"
              style={{ width: "25px" }}
            />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <img
              src="/assests/notification.jpeg"
              alt="notification"
              style={{ width: "25px" }}
            />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assests/person/1.jpeg" alt="imge" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
