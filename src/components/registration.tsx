const Registration = () => {
  const handleLogin = () => {
    console.log("Login button has been clicked");
  };

  return (
    <div className={``}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Registration</h1>
            <label>Email Id</label>
            <br></br>
            <input type="text" name="emailid" className="login-box" />
            <br></br>
            <label>Phone Number</label>
            <br></br>
            <input type="text" name="phonenumber" className="login-box" />
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input
              type="submit"
              value="LOGIN"
              className="login-btn"
              onClick={handleLogin}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
