import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={Logo} alt="Meetapp" />

      <form>
        <input type="email" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/register">Criar conta grátis</Link>
    </>
  );
}
