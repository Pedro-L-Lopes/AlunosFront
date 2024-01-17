import "./Login.css";
import logoImage from "../../Assets/Images/login.png";

const Login = () => {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImage} alt="Login" id="img1" />
        <form>
          <h1>Cadastro de alunos</h1>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
