import styled from '@emotion/styled';

interface TitleProps {
  label: string;
}

const Label = styled.h1`
  margin-bottom: 32px;
`;

export const Title = ({ label = 'hello' }: TitleProps) => {
  return <Label>{label}</Label>;
};
