import styled from 'styled-components';
import { darken } from 'polished';
import Loading from '~/components/Loading';

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

    button {
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
    }
  }

  ul {
    margin-top: 50px;
  }
`;

export const Meetup = styled.li`
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 4px;
  opacity: ${props => (props.past ? 0.6 : 1)};

  & + li {
    margin-top: 10px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    strong {
      color: #fff;
      font-size: 18px;
      font-weight: bold;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      span {
        font-size: 16px;
        font-weight: normal;
        color: rgba(255, 255, 255, 0.5);
      }
      svg {
        margin-left: 30px;
      }
    }
  }
`;
