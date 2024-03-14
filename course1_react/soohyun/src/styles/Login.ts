import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 20em;
  padding: 5em 2em 3em 2em;
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
`;


export const Input = styled.input`
  padding: 10px 90px 10px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.bg};
`;

export const Button = styled.button`
  margin-top: 50px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 10px;
`;

export const ID = styled.div`
  color: ${props => props.theme.colors.bg};
`;

export const PW = styled.div`
  color: ${props => props.theme.colors.bg};
  margin-top: 30px;
`;


export const Account = styled.div`

  color: ${props => props.theme.colors.bg};
  margin-top: 50px;
`;