import styled from 'styled-components';
import { shade } from 'polished';

export const Footer = styled.footer`
  background: #c9b1b1;
  padding: 20px;
`;

export const NFooter = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
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
        background: ${shade(.07, '#c9b1b1')};
        transition: all .2s ease-in;
      }

      a { text-decoration: none; color: #FFF; font-weight: 500; font-size: .8em;}
    }
  }

  ul.nav-redes {
      width: auto;
      display: flex;
      justify-content: flex-end;

      li {
        width: 30px;
        height: 30px;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        margin: 0 5px;

        &:hover {
          background: ${shade(.07, '#c9b1b1')};
          transition: all .3s ease-in;
        }

        .icons { width: 25px; height: 25px; text-indent: -99999px; display: block; }
        .icon-linkedin {  background: url('/assets/icon-linkedin.svg') no-repeat center center; background-size: 100%; }
        .icon-twitter { background: url('/assets/icon-twitter.svg') no-repeat center center; background-size: 100%; }
        .icon-facebook { background: url('/assets/icon-facebook.svg') no-repeat center center; background-size: 65%; }
        .icon-instagram { background: url('/assets/icon-instagram.svg') no-repeat center center; background-size: 100%; }
      }
    }
  }

`;
