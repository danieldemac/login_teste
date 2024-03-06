import { useState } from "react";
import axios from 'axios';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);

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
        setShowSidebar(true); 
      }catch(error){
        if(!error?.response){
          setError('Erro ao acessar o servidor');
        } else if (error.response.status === 401){
            setError("Usuário ou senha inválidos");
        }
      }
    }

    const handleLogout = async (e) => {
      e.preventDefault();
      setUser(null);
      setError('');
      setShowSidebar(false); 
    };

    return (
      <div className='login-form-wrap'>
        {user === null ? (
          <div>
            <img className="avatar_dtm" src="datametrica.jpg" alt="logo_dtm" />
            <h2>Painel Pesquisadores</h2>
            <img className="avatar_base" src="avatar.png" alt="avatar_base" />
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
                  ENTRAR
                </button>
            </form>
            <p className="errocancelar">{error}</p>
          </div>
        ) : (
          <div>
            <img className="avatar" src="avatar.png" alt="avatar" />
            <p className='bem_vindo'>Bem vindo(a), {user.name}.</p>     
            <p className="legenda_button"> Clique aqui para sair:</p>
            <button 
            type='button' 
            className='btn-login'
            onClick={(e) => handleLogout(e)}>
              Sair
            </button>
            {showSidebar && (
              <div className="sidebar">
                <p className="tittle_sidebar">Painel Pesquisadores</p><i class="fa fa-cog" aria-hidden="true"></i>
                {}                
              </div>
            )}
          </div>
        )}
      </div>
    );
}

export default Login;