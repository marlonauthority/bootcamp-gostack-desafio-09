import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={Logo} alt="Meetapp" />
          </Link>
        </nav>

        <Profile>
          <div>
            <strong>Marlon Authority</strong>
            <Link to="/profile">Meu Perfil</Link>
          </div>
          <button type="button">Sair</button>
        </Profile>
      </Content>
    </Container>
  );
}
