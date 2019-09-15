import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Mínimo de 6 caracteres')
      .required('O nome é obrigatório'),
    email: Yup.string()
      .email()
      .required('O email é obrigatório'),
    oldPassword: Yup.string(),
    password: Yup.string().when('oldPassword', (oldPassword, field) =>
      oldPassword ? field.required('Nova senha obrigatória') : field
    ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password')],
      'As senhas não são iguais'
    ),
  });

  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="E-mail" />
        <hr />
        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <div>
          <button type="submit">
            <MdAddCircleOutline size={20} color="#fff" /> Salvar perfil
          </button>
        </div>
      </Form>
    </Container>
  );
}
