import React, { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Link } from 'react-router-dom';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup } from './styles';

import Loading from '~/components/Loading';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetups/owner');

      const data = response.data.map(meetup => {
        return {
          ...meetup,
          formattedDate: format(
            parseISO(meetup.date),
            "dd 'de' MMMM', às ' HH:mm'",
            {
              locale: pt,
            }
          ),
        };
      });
      setLoading(false);
      setMeetups(data);
    }
    loadMeetups();
  }, []);

  function handleCreateNewMeetup() {
    history.push('/meetupsForm');
  }

  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <button type="button" onClick={handleCreateNewMeetup}>
          <MdAddCircleOutline size={20} color="#fff" /> Novo meetup
        </button>
      </header>

      {loading ? (
        <Loading />
      ) : (
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
                    <span>{meetup.formattedDate}</span>
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
      )}
    </Container>
  );
}
