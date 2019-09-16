import React from 'react';
import { Redirect } from 'react-router-dom';
import { parseISO } from 'date-fns';

import history from '~/services/history';

import { MdDeleteForever, MdEdit, MdEvent, MdPlace } from 'react-icons/md';

import {
  Container,
  ButtonEdit,
  ButtonCancel,
  Content,
  Time,
  Place,
} from './styles';

export default function Details({ location }) {
  const { meetup } = location;
  console.tron.log(meetup);

  if (!meetup) {
    return <Redirect to="/dashboard" />;
  }

  function handleEdit(meetup) {
    const { id, date_hour, title, description, formattedDate } = meetup;
    const parsedMeetup = {
      id,
      date_hour: parseISO(date_hour),
      title,
      description,
      location: meetup.location,
      banner: meetup.banner,
      formattedDate,
    };
    history.push({
      pathname: '/meetupsForm',
      parsedMeetup,
    });
  }

  return (
    <Container>
      <header>
        <h2>{meetup.title}</h2>
        <div>
          <ButtonEdit type="button" onClick={() => handleEdit(meetup)}>
            <MdEdit size={22} color="#fff" /> Editar
          </ButtonEdit>
          <ButtonCancel type="button">
            <MdDeleteForever size={22} color="#fff" /> Cancelar
          </ButtonCancel>
        </div>
      </header>
      <Content>
        <img src={meetup.banner.url} alt={meetup.title} />
        <p>{meetup.description}</p>
        <div>
          <Time>
            <MdEvent size={20} color="#fff" /> {meetup.formattedDate}
          </Time>
          <Place>
            <MdPlace size={20} color="#fff" /> {meetup.location}
          </Place>
        </div>
      </Content>
    </Container>
  );
}
