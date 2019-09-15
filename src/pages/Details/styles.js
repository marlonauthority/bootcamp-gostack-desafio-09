import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 52px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const ButtonEdit = styled.button`
  margin-right: 15px;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  background: #4dbaf9;
  color: #fff;
  padding: 12px 20px 11px;
  display: flex;
  align-items: center;

  transition: background 0.3s;

  &:hover {
    background: ${darken(0.06, '#4DBAF9')};
  }

  svg {
    margin-right: 10px;
  }
`;
export const ButtonCancel = styled.button`
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  background: #f94d6a;
  color: #fff;
  padding: 12px 20px 11px;
  display: flex;
  align-items: center;

  transition: background 0.3s;

  &:hover {
    background: ${darken(0.04, '#f94d6a')};
  }

  svg {
    margin-right: 10px;
  }
`;

export const Content = styled.div`
  margin: 50px auto;

  img {
    background: #ccc;
    width: 940px;
    height: 300px;
  }

  p {
    margin-top: 25px;
    font-size: 18px;
    font-weight: normal;
    color: #fff;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;

    opacity: 0.8;
  }
`;

export const Time = styled.div`
  font-size: 16px;
  font-weight: normal;
  svg {
    margin-right: 10px;
  }
`;

export const Place = styled.div`
  margin-left: 30px;
  font-size: 16px;
  font-weight: normal;

  svg {
    margin-right: 10px;
  }
`;
