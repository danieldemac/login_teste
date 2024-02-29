import { useState } from "react";
import axios from 'axios';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);



    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password);
        
      try{
        const response = await axios.post('http://localhost:3000/login',
            JSON.stringify({email, password}),
            {
                headers: {'Content-Type': 'application/json'}
            }

        );
        console.log(response.data);
        setUser(response.data);
      }catch(error){
        if(!error?.response){
          setError('Erro ao acessar o servidor');
        } else if (error.response.status == 401){
            setError("Usuário ou senha inválidos");
        }
      }
    }

    const handleLogout = async (e) => {

      e.preventDefault();
      setUser(null);
      setError('');
        
    };


    return (
      <div className='login-form-wrap'>
        {user == null ? (
          <div>
      <img className="avatar_base" src="datametrica.jpg" alt="avatar_base" />
      <h2>Painel Pesquisadores</h2>
      <form className='login-form'>
          <input 
          type='email' 
          name='email' 
          placeholder='Email' 
          required
          onChange={(e) => setEmail(e.target.value)}
          />
          <input 
          type='password' 
          name='password' 
          placeholder='Senha' 
          required
          onChange={(e) => setPassword(e.target.value)}
          />
          <button 
          type='submit' 
          className='btn-login'
          onClick={(e) => handleLogin(e)}>
            Login</button>
      </form>
      <p className="errocancelar">{error}</p>
      </div>
      ):(
        <div>
          <img className="avatar" src="avatar.png" alt="avatar" />
          <p className='bem_vindo'>Você logou no painel pesquisadores, {user.name}.</p>
          <p className="bem_vindo">Bem vindo!</p>
          <button 
          type='button' 
          className='btn-login'
          onClick={(e) => handleLogout(e)}>
            Sair</button>
        </div>
      )
      }
    </div>
    );
  
  }
  export default Login;