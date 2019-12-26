import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { toast } from 'react-toastify';

import DatePicker from './components/DatePicker';
import BannerInput from './components/BannerInput';

import Loading from '~/components/Loading';

import { MdAddCircleOutline } from 'react-icons/md';
import { Container, Content } from './styles';

import {
  createMeetupRequest,
  editMeetupRequest,
} from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
  banner_id: Yup.number().required(() => toast.error('Imagem obrigatória!')),
  title: Yup.string().required('Título obrigatório'),
  description: Yup.string().required('Descrição obrigatória.'),
  date: Yup.date().required('Data e hora são obrigatórios'),
  location: Yup.string().required('Localização obrigatório'),
});

export default function FormMeetup({ location }) {
  const [loading, setLoading] = useState(false);
  const { parsedMeetup } = location;
  const dispatch = useDispatch();

  async function handleSubmit(data) {
    setLoading(true);
    if (parsedMeetup) {
      const dataId = parsedMeetup.id;
      dispatch(editMeetupRequest(data, dataId));
    } else {
      dispatch(createMeetupRequest(data));
    }
  }
  return (
    <Container>
      <Content>
        <Form
          schema={schema}
          initialData={parsedMeetup || null}
          onSubmit={handleSubmit}
        >
          <BannerInput name="banner_id" />

          <Input name="title" placeholder="Título do Meetup" />
          <Input
            name="description"
            multiline
            placeholder="Descrição Completa"
          />

          <DatePicker name="date" placeholder="Data do Meetup" />
          <Input name="location" placeholder="Localização" />

          <section>
            <button type="submit">
              <MdAddCircleOutline size={22} color="#fff" />{' '}
              {loading ? <Loading /> : 'Salvar meetup'}
            </button>
          </section>
        </Form>
      </Content>
    </Container>
  );
}
FormMeetup.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
