import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #22202c, #402845);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      color: #fff;
      padding: 14px;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }
    button {
      background: #f94d6a;
      height: 50px;
      margin: 15px 0;
      border: 0;
      border-radius: 4px;

      transition: background 0.3s;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }
  }
  a {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    opacity: 0.6;
    margin-top: 5px;

    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`;
