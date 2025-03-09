import Image from "next";
import "./pages.css";



export default function Home() {
  //const[username, setUsername] = ("");
  //const[password, setPassword] = ("");

  //const handleSubmit = () => {
    

    //console.log("Envio");
  //}
  return (

    
    <div className="container">
      <form>
        <h1>Bem-vindo</h1>
        <h2>Email</h2>
        <div>
          <input type="email" placeholder="Digite seu email"/>
        </div>
        <h2>Senha</h2>
        <div>
          <input type="password" placeholder="Digite sua senha"/>
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox"/>
            Lembrar-me
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>
      </form>
    </div>
  );
}
