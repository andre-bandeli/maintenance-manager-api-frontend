import React from 'react'
import './formularioCadastro.scss'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'



export default function FormularioCadastro() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [mensagemSucesso, setMensagemSucesso] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };


  const handleClick=(e)=> {
    e.preventDefault()
    const lead = {nome, email, mensagem}
    console.log(lead)
    fetch("https://springboot-api-crud-java-react-production.up.railway.app/api/v1/lead/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(lead)
    }).then(()=> {
        setTimeout(() => {
        setMensagemSucesso("Mensagem enviada com sucesso! Entraremos em contato o quanto antes!");
        }, 10);
        setTimeout(() => {
          setMensagemSucesso("");
          }, 5000);
        setNome("")
        setEmail("")
        setMensagem("")
    })
  }

  return (
    <div className='formularioCadastro'>
           
            <div className="containerFormulario">
              <div className="forms">

                <form noValidate autoComplete='off' onSubmit={onSubmit}>

                    <h3>Nome da Empresa</h3>
                    <TextField id="standard-basic" className='standard-basic' label="Insira o nome de sua empresa" variant='outlined' value={nome} 
                    onChange={
                      (e)=>setNome(e.target.value)} 
                    />
                    <h3>Email</h3>
                    <TextField id="standard-basic" className='standard-basic' label="Insira o email de sua empresa" variant='outlined' value={email} 
                    onChange={
                      (e)=>setEmail(e.target.value)} />

                    <h3>Senha</h3>
                    <TextField id="standard-basic" className='standard-basic' label="Digite uma senha" variant='outlined' value={email} 
                    onChange={
                      (e)=>setEmail(e.target.value)} />

                    <h4>Leia o nosso termo e condições de uso <a href=""> clicando aqui</a> </h4>
                    <Button variant='contained' className='btn' onClick={handleClick} type="submit" alt="botão para enviar formulário">
                      Enviar
                    </Button>
                </form>
                
                <div className="mensagemSucesso">
                        {mensagemSucesso !== "" ? <p>{mensagemSucesso}</p> : ""}
                </div>
               

              </div>
            </div>

            
    </div>
  )
}
