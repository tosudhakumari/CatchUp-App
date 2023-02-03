import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfilePicture"
            src="assests/person/1.jpeg"
            alt="person"
          />
          <input placeholder="what is in your mind" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <img
                src="assests/media.jpeg"
                alt="media"
                className="shareIcon"
                style={{ width: "25px" }}
              />
              <span className="shareOptionText">Photos and videos</span>
            </div>
            <div className="shareOption">
              <img
                src="assests/tag.jpeg"
                alt="media"
                className="shareIcon"
                style={{ width: "25px" }}
              />
              <span className="shareOptionText">tag</span>
            </div>
            <div className="shareOption">
              <img
                src="assests/location.jpeg"
                alt="media"
                className="shareIcon"
                style={{ width: "25px" }}
              />
              <span className="shareOptionText">location</span>
            </div>
            <div className="shareOption">
              <img
                src="assests/feeling.jpeg"
                alt="media"
                className="shareIcon"
                style={{ width: "25px" }}
              />
              <span className="shareOptionText">feeling</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
