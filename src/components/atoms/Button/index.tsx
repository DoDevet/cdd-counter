import styled from '@emotion/styled';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}
const Container = styled.button`
  background-color: #ff5722;
  padding: 8px 16px;
  cursor: pointer;
  color: white;
  border: 0;
  border-radius: 8px;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
export const Button = ({ label, onClick }: ButtonProps) => {
  return <Container onClick={onClick}>{label}</Container>;
};
