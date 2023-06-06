import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadastro } from '../../Routes/coordinator'
import { ContainerForm, ContainerLogin, Input } from './styled'
import { useForm } from '../../hooks/useForm'
export default function Login() {
  const {form, onChangeInputs,cleanFields} = useForm({email:'',password:''})

  const navigate = useNavigate()
  
  const enviaLogin = (e) => {
    e.preventDefault()
    console.log(form)
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
