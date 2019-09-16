import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 300px;
  width: 940px;

  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);

  color: rgba(255, 255, 255, 0.3);

  margin-bottom: 10px;

  p {
    font-size: 20px;
    font-size: 20px;
    font-weight: bold;
  }
  svg {
    margin-top: 10px;
    opacity: 0.3;
  }
`;
