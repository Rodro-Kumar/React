import "./App.css";

function App() {
  return (
    <>
      <div className="mainbox">
        <div className="left-part">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us plase login with your personal info</p>
          <button className="signIn">SIGN IN</button>
        </div>

        <div className="right-part">
          <h3>Create Account</h3>
          <div className="icon">
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <p>or use your email for registration</p>
            <div className="input-feild">
              <input type="text" placeholder="Name" className="Nameinput" />
              <input type="text" placeholder="Email" className="Nameinput" />
              <input type="text" placeholder="Password" className="Nameinput" />
            </div>
            <button className="signUp">SIGN UP</button>
          </div>
        </div>
        <div className="sign-in">
          <h3>Sign In to Your Account</h3>
          <p>oe use your email account</p>
          <div className="sign-input">
            <input type="text" placeholder="Email" className="signInput" />
            <input type="text" placeholder="Password" className="signInput" />
            <div className="forgot">
              <a href="#">forgot password?</a>
            </div>
            <button className="signIn">SIGN IN</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
