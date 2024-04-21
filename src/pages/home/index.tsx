import { BsCartPlus } from "react-icons/bs";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const { addItemCart } = useContext(CartContext)
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");

      setProducts(response.data);
    }

    getProducts();
  }, []);

  function handleAddCart(product: ProductProps) {
    toast.success("Produto adicionado com sucesso!", {
      style: {
        borderRadius: 10,
        backgroundColor: "#424549",
        color: "#fff"
      }
    });
    addItemCart(product);
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto mt-28">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          New Products!
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <section key={product.id} className="w-full ">
              <Link to={`/product/${product.id}`}>
                <img
                  className="w-full rounded-lg max-h-70 mb-2"
                  src={product.cover}
                  alt={product.title}
                />

              <p className="font-medium mt-1 mb-2">{product.title}</p>
              </Link>

              <div className="flex gap-3 items-center">
                <strong className="text-zin-700/90">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>

                <button className="bg-fundo-cinza-claro p-1 rounded" onClick={ () => handleAddCart(product) }>
                  <BsCartPlus size={20} color="#fff" />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
