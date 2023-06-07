import React, { useState } from 'react'
import { ContainerForm, ContainerSignup, Input } from './styled'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import { useNavigate } from 'react-router-dom'
export default function Signup() {
    const {form, onChangeInputs,cleanFields} = useForm({nomeUsuario:"",email:"",senha:"",confirmaSenha:""})
    const navigate = useNavigate()
    const enviarCadastro = (e) => {
        e.preventDefault()
        if (form.senha === form.confirmaSenha){
            const dadosUsuario = {
                username: form.nomeUsuario,
                email: form.email,
                password: form.password
            }
            axios.post(`${BASE_URL}/users/signup`,dadosUsuario)
                .then((res) =>{
                    console.log(res)
                    localStorage.setItem('token',res.data.token)
                    alert('ok')
                    alert('Token:'+res.data.token)
                })
                .catch((error) =>{
                    alert('deu errado')
                    alert(error.response)
                })
        }else{
            console.log("Senhas diferentes....")

        }
        cleanFields()
     }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor='nome'>Nome de usuario:</label>
                <Input
                    name='nomeUsuario'
                    id='nome'
                    value={form.nomeUsuario}
                    onChange={onChangeInputs}
                    placeholder="username"
                />
                <label htmlFor='email'>Email:</label>
                <Input
                    name='email'
                    id='email'
                    value={form.email}
                    onChange={onChangeInputs}
                    placeholder="nome@email.com"
                />
                <label htmlFor='senha'>Senha:</label>
                <Input
                    name='senha'
                    id='senha'
                    value={form.senha}
                    onChange={onChangeInputs}
                    placeholder="Crie sua senha"
                />
                <label htmlFor='confirma-senha'>Confirmação de senha:</label>
                <Input
                    name='confirmaSenha'
                    id='confirma-senha'
                    value={form.confirmaSenha}
                    onChange={onChangeInputs}
                    placeholder="Confirme a senha"
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
