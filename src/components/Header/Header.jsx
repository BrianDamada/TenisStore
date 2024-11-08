import Discount from "../Discount";

Discount;

/* eslint-disable react/prop-types */

export const Header = ({ title, desconto }) => {
  return (
    <header>
      <Discount desconto={desconto} />
      <div className="p-5 bg-slate-100 flex w-full items-center justify-center">
        <h1 className="text-slate-900 text-3xl font-bold">{title}</h1>
      </div>
    </header>
  );
};
