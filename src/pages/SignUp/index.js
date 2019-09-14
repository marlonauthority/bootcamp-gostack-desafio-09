import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail obrigatório'),
  password: Yup.string()
    .min(6, 'Minimo de 6 caracteres')
    .required('Senha obrigatória'),
});

export default function SignUp() {
  function handleSubmit(data) {
    //
  }
  return (
    <>
      <img src={Logo} alt="Meetapp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar conta</button>
      </Form>
      <Link to="/">Já tenho login</Link>
    </>
  );
}
