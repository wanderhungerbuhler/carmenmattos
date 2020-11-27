import styled from 'styled-components';
import { shade } from 'polished';

export const BoxSearch = styled.form`
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  border-radius: 7px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  background: #FFF;
  box-shadow: 0 0 50px ${shade(0.15, '#FFF')};

  button { height: 56px; background: #c9b1b1; border: 0; border-radius: 7px;
    color: #FFF; }
`;

export const Search = styled.div`
  width: 100%;
  background: #F0F0F5;
  height: 56px;
  border: 0;
  border-radius: 7px;
  padding: 0 10px;

  display: flex;

  input {
    width: 400px;
    border: 0;
    color: #6C6C80;
    background: transparent;
  }
`;
