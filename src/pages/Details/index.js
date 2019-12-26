import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { parseISO } from 'date-fns';

import history from '~/services/history';

import { deleteMeetupRequest } from '~/store/modules/meetup/actions';

import { MdDeleteForever, MdEdit, MdEvent, MdPlace } from 'react-icons/md';

import {
  Container,
  ButtonEdit,
  ButtonCancel,
  Content,
  Time,
  Place,
} from './styles';

import Loading from '~/components/Loading';

export default function Details({ location }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { meetup } = location;

  if (!meetup) {
    return <Redirect to="/dashboard" />;
  }

  function handleEdit(meetup) {
    setLoading(true);
    const { id, date, title, description, formattedDate } = meetup;
    const parsedMeetup = {
      id,
      date: parseISO(date),
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

  function handleDelete(id) {
    setLoading(true);
    dispatch(deleteMeetupRequest(id));
  }

  return (
    <Container>
      <header>
        <h2>{meetup.title}</h2>
        <div>
          <ButtonEdit type="button" onClick={() => handleEdit(meetup)}>
            <MdEdit size={22} color="#fff" /> {loading ? <Loading /> : 'Editar'}
          </ButtonEdit>
          <ButtonCancel type="button" onClick={() => handleDelete(meetup.id)}>
            <MdDeleteForever size={22} color="#fff" />{' '}
            {loading ? <Loading /> : 'Cancelar'}
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
Details.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
