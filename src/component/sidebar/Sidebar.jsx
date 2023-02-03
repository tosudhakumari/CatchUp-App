import "./sidebar.css";
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sideBarListItem">
            <img
              className="sidebarIcon"
              src="assests/rssfeed.jpeg"
              alt="rssfeed"
              style={{ width: "15px" }}
            />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <img
              className="sidebarIcon"
              src="assests/chat.jpeg"
              alt="rssfeed"
              style={{ width: "15px" }}
            />
            <span className="sidebarListItemText">chat</span>
          </li>
          <li className="sideBarListItem">
            <img
              className="sidebarIcon"
              src="assests/bookmark.jpeg"
              alt="rssfeed"
              style={{ width: "15px" }}
            />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sideBarListItem">
            <img
              className="sidebarIcon"
              src="assests/videos.jpeg"
              alt="rssfeed"
              style={{ width: "15px" }}
            />
            <span className="sidebarListItemText">videos</span>
          </li>
          <li className="sideBarListItem">
            <img
              className="sidebarIcon"
              src="assests/group.jpeg"
              alt="rssfeed"
              style={{ width: "15px" }}
            />
            <span className="sidebarListItemText">group</span>
          </li>
          <li className="sideBarListItem">
            <img
              className="sidebarIcon"
              src="assests/rssfeed.jpeg"
              alt="rssfeed"
              style={{ width: "15px" }}
            />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sideBarListItem">
            <img
              className="sidebarIcon"
              src="assests/rssfeed.jpeg"
              alt="rssfeed"
              style={{ width: "15px" }}
            />
            <span className="sidebarListItemText">school</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
         {Users.map((u)=> 
         <CloseFriend user={u} key={u.id}/>
         )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
