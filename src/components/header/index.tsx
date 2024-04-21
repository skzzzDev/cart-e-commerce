import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { cartAmount } = useContext(CartContext);

  return (
    <header className="w-full px-1 bg-fundo-cinza-escuro fixed top-0 z-10">
      <nav className="w-full max-w-7xl h-24 flex items-center justify-between px-5 mx-auto">
        <Link to="/">
          <img alt="logo" src={Logo} className="w-20" />
        </Link>

        <Link className="relative" to="/cart">
          <FiShoppingCart size={24} color="#fff" />

          {cartAmount > 0 && (
            <span className="absolute -top-3 -right-3 px-2.5 bg-fundo-cinza-claro text-white w-6 h-6 flex items-center justify-center text-xs rounded-full font-bold">
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
