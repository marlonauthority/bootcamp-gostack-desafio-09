import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  function handleSubmit(data) {
    //
  }
  return (
    <>
      <img src={Logo} alt="Meetapp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Entrar</button>
      </Form>
      <Link to="/register">Criar conta grátis</Link>
    </>
  );
}
