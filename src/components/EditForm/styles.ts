import styled from 'styled-components';
import { Breakpoints } from '../../styles/main';
import { Field, Form } from 'formik';

export const FormContainer = styled.div`
  background-color: #e0e0e0;
  padding: 10px 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  margin-top: 40px;
  box-shadow: 4px 4px 4px 0px darkgrey;

  @media (max-width: ${Breakpoints.mobile}) {
    max-width: 350px;
    margin-top: 20px;
  }
`;

export const Formulary = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
`;

export const Label = styled.label`
  margin-left: 2px;
  text-align: left;
`;

export const Input = styled(Field)`
  padding: 8px;
  margin-bottom: 4px;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-size: 16px;
`;

export const ButtonGroup = styled.div`
  justify-content: center;
  display: inline-flex;
  gap: 20px;

  button {
    width: 100%;
  }
`;
