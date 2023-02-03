import "./login.css";

const Login = () => {
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
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <button className="loginButton" >Log In</button>
                <span className="loginForgot">ForgotPassword</span>
                <button className="loginRegButton">Create a New Button</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
