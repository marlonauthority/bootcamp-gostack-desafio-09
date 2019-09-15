import React from 'react';
import api from '~/services/api';
// import { Container } from './styles';

export default function Dashboard() {
  api.get('/meetups?date=2019-09-14');
  return <h1>Dashboard</h1>;
}
