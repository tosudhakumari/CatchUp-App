import "./share.css";

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfilePicture"
            src={`${PF}person/1.jpeg`}
            alt="person"
          />
          <input placeholder="what is in your mind" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <img
                src={`${PF}media.jpeg`}
                alt="media"
                className="shareIcon"
                style={{ width: "25px" }}
              />
              <span className="shareOptionText">Photos and videos</span>
            </div>
            <div className="shareOption">
              <img
                src={`${PF}tag.jpeg`}
                alt="media"
                className="shareIcon"
                style={{ width: "25px" }}
              />
              <span className="shareOptionText">tag</span>
            </div>
            <div className="shareOption">
              <img
                src={`${PF}location.jpeg`}
                alt="media"
                className="shareIcon"
                style={{ width: "25px" }}
              />
              <span className="shareOptionText">location</span>
            </div>
            <div className="shareOption">
              <img
                src={`${PF}feeling.jpeg`}
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
