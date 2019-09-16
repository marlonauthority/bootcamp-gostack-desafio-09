import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 20px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 940px;

      border-radius: 4px;
      background: rgba(0, 0, 0, 0.1);
    }

    input {
      display: none;
    }
  }
`;
