"use client";

import Image from "next/image";
import { memo } from "react";
import { Movie } from "@/types/movie";
import Button from "@/components/buttons/Button";
import { useCart } from "@/contexts/CartContext";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

interface MoviesCardProps {
  movie: Movie;
}

const MoviesCard = memo(function MoviesCard({ movie }: MoviesCardProps) {
  const { addItem, isInCart, getItemQuantity } = useCart();
  const inCart = isInCart(movie.id);
  const quantity = getItemQuantity(movie.id);

  const handleAddToCart = () => {
    addItem(movie);
  };

  //   console.log("MOVIES CARD RENDERED");

  return (
    <div className="w-full max-w-[339px] h-[324px] bg-white rounded-[4px] p-4 flex flex-col gap-2">
      {/* Container da imagem, nome e preço */}
      <div className="flex flex-col items-center gap-2">
        {/* Imagem */}
        <Image
          src={movie?.image || ""}
          alt={movie?.title}
          width={147}
          height={188}
          className="object-cover"
        />

        {/* Nome do filme */}
        <h3 className="text-[12px] font-[700] text-gray-900 text-center">
          {movie.title}
        </h3>

        {/* Preço */}
        <p className="text-[16px] font-[700] text-gray-900">
          R$ {movie.price.toFixed(2).replace(".", ",")}
        </p>
      </div>

      {/* Botão */}
      <Button
        variant={inCart ? "success" : "default"}
        onClick={handleAddToCart}
        className="min-h-[40px]"
      >
        <span className="flex gap-1">
          <Image
            src="/svgs/ShoppingCartIcon.svg"
            alt="Carrinho"
            width={13}
            height={13}
            priority
          />
          <AnimatedCounter
            value={quantity || 0}
            className="text-[12px] font-[400]"
          />
        </span>
        <p className="text-[12px] font-[700]">ADICIONAR AO CARRINHO</p>
      </Button>
    </div>
  );
});

export default MoviesCard;
