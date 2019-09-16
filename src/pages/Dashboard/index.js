import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Link } from 'react-router-dom';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetups');

      const data = response.data.map(meetup => {
        return {
          ...meetup,
          formattedDate: format(
            parseISO(meetup.date_hour),
            "dd 'de' MMMM', às ' HH:mm'",
            {
              locale: pt,
            }
          ),
        };
      });
      setMeetups(data);
    }
    loadMeetups();
  }, []);

  function handleCreateNewMeetup() {
    history.push('/meetups/create')
  }

  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <button type="button" onClick={handleCreateNewMeetup}>
          <MdAddCircleOutline size={20} color="#fff" /> Novo meetup
        </button>
      </header>

      <ul>
        {meetups.length ? (
          meetups.map(meetup => (
            <Meetup key={meetup.id} past={meetup.past}>
              <Link
                to={{
                  pathname: '/details',
                  meetup,
                }}
              >
                <strong>{meetup.title}</strong>
                <div>
                  <span>24 de Junho, às 20h</span>
                  <MdChevronRight size={24} color="#fff" />
                </div>
              </Link>
            </Meetup>
          ))
        ) : (
          <Meetup>
            <Link to="/dashboard">
              <strong>Não existem Meetups</strong>
              <div>
                <span></span>
                <MdChevronRight size={24} color="#fff" />
              </div>
            </Link>
          </Meetup>
        )}
      </ul>
    </Container>
  );
}
