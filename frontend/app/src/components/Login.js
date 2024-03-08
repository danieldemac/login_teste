import { useState } from "react";
import axios from 'axios';
import Table from './Table';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);

    const tableData = [
      { nome: 'João Silva', idade: 30, cpf: '123.456.789-01' },
      { nome: 'Maria Santos', idade: 25, cpf: '987.654.321-09' },
      { nome: 'Pedro Oliveira', idade: 35, cpf: '456.789.123-45' },
      { nome: 'Mizael Boy', idade: 20, cpf: '650.856.447-75' },
      { nome: 'Ana Carvalho', idade: 28, cpf: '147.258.369-02' },
      { nome: 'Carlos Pereira', idade: 40, cpf: '369.258.147-03' },
      { nome: 'Fernanda Ribeiro', idade: 22, cpf: '753.951.852-04' },
      { nome: 'Lucas Almeida', idade: 33, cpf: '456.789.123-05' },
      { nome: 'Juliana Costa', idade: 27, cpf: '987.654.321-06' },
      { nome: 'Gabriel Gomes', idade: 31, cpf: '123.456.789-07' },
      { nome: 'Amanda Martins', idade: 24, cpf: '650.856.447-08' },
      { nome: 'Rafael Barbosa', idade: 29, cpf: '456.789.123-09' },
      { nome: 'Isabela Araújo', idade: 36, cpf: '987.654.321-10' },
      { nome: 'Diego Nascimento', idade: 26, cpf: '123.456.789-11' },
      { nome: 'Laura Lima', idade: 32, cpf: '650.856.447-12' },
      { nome: 'Gustavo Sousa', idade: 23, cpf: '987.654.321-13' },
      { nome: 'Carolina Freitas', idade: 38, cpf: '123.456.789-14' },
      { nome: 'Vinicius Mendes', idade: 21, cpf: '650.856.447-15' },
    ];

    

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
        <div>
        {user === null ? (
        <div className='login-form-wrap'>
          <div>
            <img className="avatar_dtm" src="logo.png" alt="logo_dtm" />
             
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
          </div>
        ) : (
          <div className="tela-inicial">
            <p className='bem_vindo'>Bem vindo(a), {user.name}.</p>   
            <Table data={tableData} /> {/* Passe os dados da tabela diretamente */}
            {showSidebar && (
              <div className="sidebar">
                <p className="tittle_sidebar">Lista de Pesquisa</p>
                <p className="legenda_button"> Clique aqui para deslogar e voltar para tela de login:
                <button 
                  type='button' 
                  className='btn-logout'
                  onClick={(e) => handleLogout(e)}>
                    Sair
                </button></p>
                {/* Adicione o componente de tabela aqui */}
                
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
  
  export default Login;