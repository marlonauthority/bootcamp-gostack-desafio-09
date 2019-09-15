import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
`;

export const Content = styled.div`
  height: 94px;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 30px;

    strong {
      display: block;
      color: #ffff;
      font-size: 14px;
      font-weight: bold;
    }
    a {
      display: block;
      font-size: 14px;
      color: #999;
      margin-top: 4px;
      font-weight: normal;

      transition: color 0.3s;

      &:hover {
        color: ${lighten(0.1, '#999')};
      }
    }
  }
  button {
    background: #d44059;
    border: 0;
    border-radius: 4px;
    color: #fff;
    height: 42px;
    width: 71px;
    font-weight: bold;
    font-size: 16px;

    transition: background 0.3s;

    &:hover {
      background: ${darken(0.04, '#d44059')};
    }
  }
`;
