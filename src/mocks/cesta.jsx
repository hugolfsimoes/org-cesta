import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import abobora from '../../assets/frutas/Abóbora.png';
import batata from '../../assets/frutas/Batata.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import pepino from '../../assets/frutas/Pepino.png';


const cesta = {
  topo: {
    titulo: 'Detalhe da Cesta'
  },
  detalhes: {
    nome: 'Cesta de Verduras',
    logoFazenda: logo,
    nomeFazenda: 'Jenny Jack Farm',
    descricao: 'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.',
    preco: 'R$ 40,00',
    botao: 'Comprar'
  },
  itens: {
    titulo: 'Itens da cesta',
    lista: [
      {
        nome: "Tomate",
        frutaImg: tomate
      },
      {
        nome: "Brócolis",
        frutaImg: brocolis
      },
      {
        nome: "Batata",
        frutaImg: batata
      },
      {
        nome: "Pepino",
        frutaImg: pepino
      },
      {
        nome: "Abobora",
        frutaImg: abobora
      },
    ]
  }
};

export default cesta;