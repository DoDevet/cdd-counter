import styled from '@emotion/styled';
import { Title } from 'components/atoms/Title';
import { Counter } from 'components/organisms/Counter';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const CounterApp = () => {
  return (
    <Container>
      <Title label="Counter App" />
      <Counter />
    </Container>
  );
};
