/* eslint-disable react/prop-types */
const Card = ({ produtos, onclickButton, itemSelecionado }) => {
  return (
    <div className="m-auto my-20 w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center">
      {produtos.map((item) => (
        <div className="flex flex-col bg-slate-200 p-3 rounded-xl" key={item.id}>
          <img src={item.src} alt={item.alt} />
          <h1 className="text-3xl p-2 py-5 font-bold">{item.title}</h1>
          <button
            className={`p-3 rounded-md text-slate-50 font-semibold duration-500 ${
              itemSelecionado?.id === item.id ? "bg-sky-500" : "bg-slate-600"
            }`}
            onClick={() => onclickButton(item)}
          >
            clique aqui
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;