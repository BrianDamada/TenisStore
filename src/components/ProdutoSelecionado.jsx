/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const ProdutoSelecionado = ({ item }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(item != null); // Torna visível se `item` não é `null`
  }, [item]); // Atualiza `visible` sempre que `item` muda

  const fecharCard = () => {
    setVisible(false);
  };

  return (
    <div
      className={`lateral bg-slate-200 w-[33%] h-[100%] p-10 transition-transform duration-300 ${
        visible ? "translate-x-[0%]" : "translate-x-[100%]"
      }`}
    >
      <button
        onClick={fecharCard}
        className="m-4 text-red-500 font-black text-3xl"
      >
        X
      </button>
      {item && (
        <>
          <img src={item.src} alt={item.alt} />
          <h1 className="py-7 text-4xl font-black" >{item.title}</h1>
          <p>{item.descricao}</p>
        </>
      )}
    </div>
  );
};

export default ProdutoSelecionado;
