import React from 'react';

import { MdCameraAlt } from 'react-icons/md';
import { Container } from './styles';

export default function BannerInputDefault() {
  return (
    <Container>
      <p>Selecionar imagem</p>
      <MdCameraAlt size={54} color="#fff" />
    </Container>
  );
}
