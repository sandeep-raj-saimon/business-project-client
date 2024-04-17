import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    console.log(`phone number is ${phoneNumber}`);
    console.log(`password is ${password}`);
    const url = "http://localhost:4000/authentication/login";
    const response = await fetch(url, {
      method: "POST",
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        password: password,
      }),
    });

    if (response.status === 200) {
      navigate("");
    } else {
      alert("login failed");
    }
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={``}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Log In</h1>
            <label>Phone Number</label>
            <br></br>
            <input
              type="text"
              name="phonenumber"
              className="login-box"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br></br>
            <label>Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              className="login-box"
              onChange={(e) => setPassword(e.target.value)}
            />
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

export default Login;
