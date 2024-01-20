// Axios
import api from "../../Services/api";

// Css
import "./Login.css";

// Images
import logoImage from "../../Assets/Images/login.png";

// Hooks
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await api.post("account/loginUser", data);

      localStorage.setItem("email", email);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("expiration", response.data.expiration);

      console.log(api);

      navigate("/alunos");
    } catch (error) {
      alert("O login falhou " + error);
    }
  };

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImage} alt="Login" id="img1" />
        <form onSubmit={login}>
          <h1>Cadastro de alunos</h1>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" type="submit">
            Login
          </button>

          <Link
            className="footer"
            to="https://github.com/Pedro-L-Lopes"
            target="_blank"
          >
            Criar Conta / Ajuda
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
