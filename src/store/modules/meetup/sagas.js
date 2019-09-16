import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  createMeetupSuccess,
  meetupFailure,
  editMeetupSuccess,
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

    yield call(api.put, `meetups/${id}`, data);

    yield put(editMeetupSuccess());
    toast.success('Meetup alterado com sucesso.');
    history.push('/dashboard');
  } catch (error) {
    toast.error('Ocorreu um erro ao editar o Meetup.');

    yield put(meetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/EDIT_MEETUP_REQUEST', editMeetup),
]);
