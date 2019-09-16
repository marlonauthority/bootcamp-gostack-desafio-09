import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import DatePicker from './components/DatePicker';
import BannerInput from './components/BannerInput';

import { MdAddCircleOutline } from 'react-icons/md';
import { Container, Content } from './styles';

export default function FormMeetup() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <BannerInput name="banner_id" />

          <Input name="title" placeholder="Título do Meetup" />
          <Input
            name="description"
            multiline
            placeholder="Descrição Completa"
          />

          <DatePicker name="date_hour" placeholder="Data do Meetup" />
          <Input name="location" placeholder="Localização" />

          <section>
            <button type="submit">
              <MdAddCircleOutline size={22} color="#fff" /> Salvar meetup
            </button>
          </section>
        </Form>
      </Content>
    </Container>
  );
}
