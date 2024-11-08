/* eslint-disable react/prop-types */
const Discount = ({desconto}) => {
  return (
    <div className="bg-sky-500 text-slate-200 p-2 flex justify-center">
      <h3>peça agora e receba {desconto}<sup>00</sup> de desconto</h3>
    </div>
  )
}

export default Discount
