import styled from 'styled-components';
import { shade } from 'polished';

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  border-bottom: .1rem solid #F0F0F5;
  padding: 10px 0;

  ul {
    width: 100%;
    display: block;
    margin-left: 20px;

    li {
      list-style: none;
      display: inline-block;
      padding: 5px 10px;

      &:hover {
        border-radius: 3px;
        background: ${shade(0.10, '#FFF')};
        transition: all .2s ease-in;
      }

      a { text-decoration: none; color: #6C6C80; font-weight: 500; font-size: .9em;}
    }
  }


`;
