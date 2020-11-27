import { BoxSearch, Search } from "@/styles/components/Newsletter";

const Newsletter = () => {
  return (
    <BoxSearch>
      <Search>
        <input type="text" placeholder="Digite seu melhor email" />
      </Search>
      <button type="button">Cadastrar</button>
    </BoxSearch>
  );
}

export default Newsletter;
