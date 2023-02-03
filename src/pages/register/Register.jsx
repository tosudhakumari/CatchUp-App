import "./Register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">CatchUp</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on CatchUp.
          </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
            <input placeholder="UserName" className="loginInput" />
                <input placeholder="Email" className="loginInput" />

                <input placeholder="Password" className="loginInput" />
                <input placeholder="Password again" className="loginInput" />
                <button className="loginButton" >Sing Up</button>
                
                <button className="loginRegButton">Log into your Account</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
