import Menu from "@/components/Menu";
import Newsletter from "@/components/Newsletter";
import CardPost from "@/components/CardPost";
import Footer from "@/components/Footer";

import { Content, Posts } from '@/styles/pages/Home';

export default function Home() {
  return (
    <>
      <Menu />

      <Content>
        <header>
          <h1>Fique por dentro das novidades!</h1>
          <p>
            Cadastre seu melhor e-mail e receba às melhores notícias
            de forma exclusiva.
          </p>
          <Newsletter />
          <ul>
            <li><a href="#" className="icons icon-linkedin">Linkedin</a></li>
            <li><a href="#" className="icons icon-twitter">Twitter</a></li>
            <li><a href="#" className="icons icon-facebook">Facebook</a></li>
            <li><a href="#" className="icons icon-instagram">Instagram</a></li>
          </ul>
        </header>
        <Posts>
          <CardPost />
          <CardPost />
          <CardPost />
        </Posts>
      </Content>

      <Footer />
    </>
  )
}
