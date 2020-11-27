import styled from 'styled-components';
import { shade } from 'polished';

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFF;
  border-radius: 7px;
  box-shadow: 0 0 10px ${shade(0.15, '#FFF')};
  padding: 15px;

  max-width: 350px;
  width: 100%;

  img { border-radius: 7px;}

  h1 { font-size: 1.3em; color: #c9b1b1; margin-top: 10px; }
  p { font-size: .8em; color: #6C6C80; }


`;
