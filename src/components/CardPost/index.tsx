import Image from 'next/image';

import { Cards } from '@/styles/components/CardsPost';

const CardPost = () => {
  return (
    <Cards>
      <Image
        src="/assets/seminario-internacional.jpeg"
        width={300}
        height={200}
      />
      <h1>Seminário Internacional</h1>
      <p>
        The worse sanitary crisis that affected the world in recent times made social
        justice more critical than ever. Oppressive societies become more oppressive,
        re-emerge extreme ideologies, deep the inequality among the disadvantaged.
      </p>
    </Cards>
  );
}

export default CardPost;
