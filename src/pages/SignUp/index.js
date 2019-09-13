import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import Logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    //
  }
  return (
    <>
      <img src={Logo} alt="Meetapp" />

      <Form onSubmit={handleSubmit}>
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
