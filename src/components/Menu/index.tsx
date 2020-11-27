import Link from 'next/link';
import Image from 'next/image';

import { NavMenu } from '@/styles/components/Menu';

const Menu = () => {
  return (
    <NavMenu>
      <Image
        src="/assets/logo.svg"
        width={250}
        height={70}
      />

      <ul>
        <li><Link href="#"><a>Home</a></Link></li>
        <li><Link href="#"><a>Bio</a></Link></li>
        <li><Link href="#"><a>Pesquisas</a></Link></li>
        <li><Link href="#"><a>Publicações</a></Link></li>
        <li><Link href="#"><a>Cursos e Seminários</a></Link></li>
        <li><Link href="#"><a>Equipe</a></Link></li>
        <li><Link href="#"><a>Internacional</a></Link></li>
      </ul>
    </NavMenu>
  );
}

export default Menu;
