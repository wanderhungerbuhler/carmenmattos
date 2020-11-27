import Image from 'next/image';
import Link from 'next/link';

import { Footer, NFooter } from '@/styles/components/Footer';

const NavFooter = () => {
  return (
    <Footer>
      <NFooter>
        <Image
          src="/assets/logo-w.svg"
          width={250}
          height={70}
        />

        <ul>
          <li><Link href="#"><a>Home</a></Link></li>
          <li><Link href="#"><a>Bio</a></Link></li>
          <li><Link href="#"><a>Equipe</a></Link></li>
          <li><Link href="#"><a>Contato</a></Link></li>
        </ul>

        <ul className="nav-redes">
          <li><a href="#" className="icons icon-linkedin">Linkedin</a></li>
          <li><a href="#" className="icons icon-twitter">Twitter</a></li>
          <li><a href="#" className="icons icon-facebook">Facebook</a></li>
          <li><a href="#" className="icons icon-instagram">Instagram</a></li>
        </ul>
      </NFooter>


    </Footer>
  );
}

export default NavFooter;
