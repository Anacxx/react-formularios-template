import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadastro } from '../../Routes/coordinator'
import { ContainerForm, ContainerLogin, Input } from './styled'
import { useForm } from '../../hooks/useForm'
import { BASE_URL } from '../../constants/BASE_URL'
import { irParaFeed } from '../../Routes/coordinator'
import axios from 'axios'
export default function Login() {
  const {form, onChangeInputs,cleanFields} = useForm({email:'',password:''})

  const navigate = useNavigate()
  
  const enviaLogin = (e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}/users/login`,form)
    .then((res) =>{
      localStorage.setItem('token',res.data.token)
      irParaFeed(navigate)
    })
    .catch((err) =>{
      alert(err.response.data)
    })
    cleanFields()
  }

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor='email'>Email:</label>
        <Input
          name='email'
          id='email'
          value={form.email}
          onChange={onChangeInputs}
          placeholder="nome@email.com"
          required
          type='email'
        />
        <label htmlFor='senha'>Senha:</label>
        <Input
          name='password'
          id='senha'
          value={form.password}
          onChange={onChangeInputs}
          placeholder="Digite sua senha"
          required
          type='password'
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>Ainda não tenho uma conta</button>
    </ContainerLogin>
  )
}
