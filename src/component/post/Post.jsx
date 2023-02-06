import "./post.css";
import {Users} from "../../dummyData"
import { useState } from "react";

const Post = ({post}) => {

  
  // console.log(post)
  
  const[like,setLike]= useState(post.like)
  const[isLiked,setIsLiked]= useState(false)
  const{date,photo,desc,comment}=post 
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

 
  // const user = Users.filter((u)=> u.id===post.userId)[0].username
  // console.log(user)

  const likehandler=()=>{
   
    setLike(isLiked ? like - 1 : like +1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={PF + Users.filter((u)=> u.id===post.userId)[0].profilePicture}
              alt="person"
              className="postProfileImage"
            />
            <span className="postUserName">{Users.filter((u)=> u.id===post.userId)[0].username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <img
              src={`${PF}morevert.jpeg`}
              alt="dots"
              style={{ width: "25px" }}
            />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="postImg" src={PF + photo} alt="post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              alt="like"
              style={{ width: "40px" }}
              onClick={likehandler}
            />
            <img
              className="heartIcon"
              src={`${PF}heart.png`}
              alt="heart"
              style={{ width: "40px" }}
            />
            <span className="postLikeCounter" >{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
