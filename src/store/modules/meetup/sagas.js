import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { createMeetupSuccess, createMeetupFailure } from './actions';

export function* create({ payload }) {
  try {
    const { data } = payload;

    const response = yield call(api.post, '/meetups', data);

    toast.success('Meetup criado com Sucesso!');

    yield put(createMeetupSuccess(response.data));
    history.push('/');
  } catch (err) {
    toast.error('Erro ao criar Meetup');
    yield put(createMeetupFailure());
  }
}

export default all([takeLatest('@meetup/CREATE_MEETUP_REQUEST', create)]);
