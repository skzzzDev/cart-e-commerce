import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);
  return (
    <div className="w-full max-w-7xl mx-auto mt-28">
      <h1 className="font-medium text-2xl text-center my-4">My Cart</h1>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium">Empty Cart</p>

          <Link
            className="bg-slate-600 my-3 p-1 px-3 text-white rounded"
            to="/"
          >
            Go to Products
          </Link>
        </div>
      )}

      {cart.map((item) => (
        <section
          key={item.id}
          className="flex items-center justify-between border-b-2 border-gray-300"
        >
          <img src={item.cover} alt={item.title} className="w-20" />

          <strong className="text-sm">Valor: {item.price}</strong>

          <div className="flex items-center justify-center gap-3">
            <button 
            onClick={ () => removeItemCart(item)}
            className="bg-fundo-cinza-medio px-2 rounded text-white font-medium flex items-center justify-center">
              -
            </button>
            {item.amount}
            <button   
            onClick={ () => addItemCart(item)}
            className="bg-fundo-cinza-medio px-2 rounded text-white font-medium flex items-center justify-center">
              +
            </button>
          </div>

          <strong className="float-right pl-10">
            Subtotal: {item.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}
          </strong>
        </section>
      ))}

      {cart.length !== 0 && <p className="font-bold mt-4 pl-5">Total: {total}</p>}
    </div>
  );
}
