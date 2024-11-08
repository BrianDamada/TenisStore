/* eslint-disable no-unused-vars */
import "./App.css";
import Banner from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import Title from "./components/Title/Title";
import Card from "./components/Card/Card";
import { useState } from "react";
import ProdutoSelecionado from "./components/ProdutoSelecionado";

function App() {
  const produtos = [
    {
      id: 1,
      title: "Vermelho",
      descricao: `O Air Jordan vermelho é uma linha icônica de tênis da marca Nike, conhecida por seu design arrojado e seu impacto cultural, especialmente no mundo dos esportes e do streetwear. O primeiro modelo, Air Jordan 1, foi lançado em 1985 em colaboração com Michael Jordan, uma das maiores estrelas da NBA.`,
      src: "/produtos/1/red.png",
      alt: "alternativo?",
    },

    {
      id: 2,
      title: "Laranja",
      descricao: `O modelo rapidamente se tornou um ícone não apenas pelo desempenho nas quadras, mas também pela polêmica que causou: a NBA havia proibido o tênis por violar o regulamento de uniformes da época, mas Jordan o usou mesmo assim, sendo multado a cada jogo. Esse detalhe aumentou a popularidade do modelo, transformando-o em um símbolo de rebeldia e estilo.`,
      src: "/produtos/1/orange.png",
      alt: "alternativo?",
    },
    {
      id: 3,
      title: "Ciano",
      descricao: `Os Jordans vermelhos têm uma combinação marcante de vermelho, preto e branco, que se tornou uma das mais famosas da linha e remete ao time de Michael Jordan, o Chicago Bulls.`,
      src: "/produtos/1/cian.png",
      alt: "alternativo?",
    },
    {
      id: 4,
      title: "Preto",
      descricao: `A cor vermelha, associada à paixão e energia, reflete a intensidade do jogador e de seu estilo de jogo. Os materiais e o design variam conforme o modelo e a edição`,
      src: "/produtos/2/2.png",
      alt: "alternativo?",
    },
    {
      id: 5,
      title: "Vermelho",
      descricao: `O Air Jordan vermelho é uma linha icônica de tênis da marca Nike, conhecida por seu design arrojado e seu impacto cultural, especialmente no mundo dos esportes e do streetwear. O primeiro modelo, Air Jordan 1, foi lançado em 1985 em colaboração com Michael Jordan, uma das maiores estrelas da NBA.`,
      src: "/produtos/3/red.png",
      alt: "alternativo?",
    },

    {
      id: 6,
      title: "Laranja",
      descricao: `O modelo rapidamente se tornou um ícone não apenas pelo desempenho nas quadras, mas também pela polêmica que causou: a NBA havia proibido o tênis por violar o regulamento de uniformes da época, mas Jordan o usou mesmo assim, sendo multado a cada jogo. Esse detalhe aumentou a popularidade do modelo, transformando-o em um símbolo de rebeldia e estilo.`,
      src: "/produtos/3/orange.png",
      alt: "alternativo?",
    },
    {
      id: 7,
      title: "Ciano",
      descricao: `Os Jordans vermelhos têm uma combinação marcante de vermelho, preto e branco, que se tornou uma das mais famosas da linha e remete ao time de Michael Jordan, o Chicago Bulls.`,
      src: "/produtos/3/cian.png",
      alt: "alternativo?",
    },
    {
      id: 8,
      title: "Preto",
      descricao: `A cor vermelha, associada à paixão e energia, reflete a intensidade do jogador e de seu estilo de jogo. Os materiais e o design variam conforme o modelo e a edição`,
      src: "/produtos/2/2.png",
      alt: "alternativo?",
    },
    
  ];

  const [itemSelecionado, definirItemSelecionado] = useState(null);

  const botaoAoClicar = (item) => {
    definirItemSelecionado(item);
  };

  return (
    <>
      <Header title="Jordan Shoes" desconto="10" />
      <Banner />
      <div>
        <Card produtos={produtos} onclickButton={botaoAoClicar} itemSelecionado={itemSelecionado}/>
      </div>
      <ProdutoSelecionado item={itemSelecionado}/>
    </>
  );
}

export default App;
