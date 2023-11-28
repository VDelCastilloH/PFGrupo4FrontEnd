import { Link } from "react-router-dom";
import ConsoleLogos from "../ConsoleLogos/ConsoleLogos";
import { AddToCartIcon, RemoveFromCartIcon } from "../../icono/icono";
import { useContext } from "react";
import { CartContext } from "../../context/contextCart";

const Card = ({ game }) => {
  const { id, Platforms, name, image, price } = game;
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const isProductInCart = cart.some((item) => item.id === game.id);

  return (
    <div className="w-[220px] h-[400px] bg-[#1F0A4D] text-white flex flex-col">
      <img className="w-full h-[250px] object-cover" src={image} alt={name} />
      <ConsoleLogos Platforms={Platforms} />
      <div className="text-left p-2 flex-1">
        <Link to={`/detail/${id}`}>
          <h3 className="text-sm font-bold">{name}</h3>
        </Link>
        <h4 className="text-2xl font-extrabold">{price}</h4>
        <button
          style={{ backgroundColor: isProductInCart ? "red" : "#09f" }}
          onClick={() => {
            isProductInCart ? removeFromCart(game) : addToCart(game);
          }}
        >
          {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </button>
      </div>
    </div>
  );
};

export default Card;