import styled from '@emotion/styled';

interface CountProps {
  value: number;
}

const Number = styled.p`
  margin: 0px 16px;
  font-size: 1.2rem;
`;

export const Count = ({ value }: CountProps) => {
  return <Number>{value}</Number>;
};
