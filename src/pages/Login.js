import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      if (error.response) {
        if (error.response.status === 401) {
          setErrorMessage("Try again !");
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          value={email}
        />
        <br />
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          value={password}
        />
        <br />
        <span style={{ color: "red" }}>{errorMessage}</span>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
