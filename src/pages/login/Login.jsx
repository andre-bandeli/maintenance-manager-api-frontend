import {React, useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import {useLocalState} from './useLocalState'
import Footer from '../components/footer/Footer'
import './login.scss'

export default function Usuario() {

  const [jwt, setJwt] = useLocalState("", "jwt")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  console.log(username)
  function sendLoginRequest() {

    const reqBody = {
      username: username,
      password:password,
    };

    fetch("api/auth/login", {
        headers: {
           "Content-Type": "application/json", 
    },
    method: "post",
    body: JSON.stringify(reqBody),
  })
  .then((response) => {
    if (response.status === 200)
    return Promise.all([response.json(), response.headers])
    else
    return Promise.reject("Login invalido");
  })
  .then(([body, headers]) => {
    setJwt(headers.get("authorization"));
  }).catch((message) => {
    alert(message);
  });
  }

  return (
    <div>
      <Navbar/>
        <div className='login'>


            <div className="container-text">
                <h1>Faça login para acessar a área de clientes.</h1>
                <h2>Caso não tenha uma conta, contate o time de suporte de sua empresa e solicite um novo usuário.</h2>
            </div>
            <div className="container-forms">
              <div className="title">
                <h1>Login</h1>
              </div>

              <div className="forms">
                <div className="username">
                  <label htmlFor="username">Username</label> 
                  <br />
                  <input type="username" id='username' value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="password">
                  <label htmlFor="password">Senha</label>
                  <br />
                  <input type="password" id='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                
                <button id="submit" type='button' onClick={() => sendLoginRequest()}>
                    Login
                </button>
            
              </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
