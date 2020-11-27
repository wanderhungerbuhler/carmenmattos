import styled from 'styled-components';
import { shade } from 'polished';

export const Content = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;

  header {
    margin-top: 50px;
    text-align: center;
    h1 { color: #6C6C80; }
    p { margin-bottom: 20px; font-size: .8em; color: #6C6C80; }

    ul {
      display: flex;
      justify-content: center;

      li {
        width: 45px;
        height: 45px;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        margin: 0 5px;
        margin-top: 30px;

        &:hover {
          background: ${shade(0.1, '#FFF')};
          transition: all .3s ease-in;
        }

        .icons { width: 25px; height: 25px; text-indent: -99999px; display: block; }
        .icon-linkedin { background: url('/assets/icon-linkedin.svg') no-repeat center center; background-size: 70%; }
        .icon-twitter { background: url('/assets/icon-twitter.svg') no-repeat center center; background-size: 80%; }
        .icon-facebook { background: url('/assets/icon-facebook.svg') no-repeat center center; background-size: 40%; }
        .icon-instagram { background: url('/assets/icon-instagram.svg') no-repeat center center; background-size: 70%; }
      }
    }
  }
`;

export const Posts = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin: 70px 0 70px 0;
`;
