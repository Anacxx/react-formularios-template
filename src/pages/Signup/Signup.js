import React, { useState } from 'react'
import { ContainerForm, ContainerSignup, Input } from './styled'
import { useForm } from '../../hooks/useForm'
export default function Signup() {
    const {form, onChangeInputs,cleanFields} = useForm({nomeUsuario:"",email:"",senha:"",confirmaSenha:""})
    
    const enviarCadastro = (e) => {
        e.preventDefault()
        console.log(form)
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
