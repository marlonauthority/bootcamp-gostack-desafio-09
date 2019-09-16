import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  createMeetupSuccess,
  meetupFailure,
  editMeetupSuccess,
  deleteMeetupSuccess,
} from './actions';

export function* createMeetup({ payload }) {
  try {
    const { data } = payload;

    const response = yield call(api.post, '/meetups', data);

    toast.success('Meetup criado com Sucesso!');

    yield put(createMeetupSuccess(response.data));
    history.push('/');
  } catch (err) {
    toast.error('Erro ao criar Meetup');
    yield put(meetupFailure());
  }
}

export function* editMeetup({ payload, id }) {
  try {
    const { data } = payload;

    yield call(api.put, `/meetups/${id}`, data);

    yield put(editMeetupSuccess());
    toast.success('Meetup alterado com sucesso.');
    history.push('/dashboard');
  } catch (error) {
    toast.error(
      'Erro ao editar o Meetup. É possivél que esteja alterando um Meetup que já ocorreu'
    );

    yield put(meetupFailure());
  }
}

export function* deleteMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `/meetups/${id}`);

    yield put(deleteMeetupSuccess());
    toast.success('Meetup deletado com sucesso.');
    history.push('/dashboard');
  } catch (error) {
    toast.error(
      'Ocorreu um erro, se o Meetup já aconteceu ou você não é o dono dele, não é possível cancelar'
    );

    yield put(meetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/EDIT_MEETUP_REQUEST', editMeetup),
  takeLatest('@meetup/DELETE_MEETUP_REQUEST', deleteMeetup),
]);
