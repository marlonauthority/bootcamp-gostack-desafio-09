import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

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
      padding: 14px 20px;
      font-size: 18px;
      font-weight: normal;

      & {
        margin: 0 0 10px;
      }

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      color: #f94d6a;
      align-self: center;
      border-top: 1px dashed ${darken(0.4, '#f94d6a')};
      padding: 10px;
    }

    hr {
      margin: 20px 0;
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
    }

    div {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;

      button {
        background: #f94d6a;
        width: 162px;
        height: 42px;

        border: 0;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;

        transition: background 0.3s;

        &:hover {
          background: ${darken(0.03, '#F94D6A')};
        }
        svg {
          margin-right: 10px;
        }
      }
    }
  }
`;
