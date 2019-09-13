import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={Logo} alt="Meetapp" />

      <form>
        <input placeholder="Nome completo" />
        <input type="email" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Criar conta</button>
      </form>
      <Link to="/">Já tenho login</Link>
    </>
  );
}
