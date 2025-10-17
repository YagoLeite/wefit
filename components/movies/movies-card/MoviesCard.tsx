import Image from "next/image";
import { Movie } from "@/types/movie";
import Button from "@/components/buttons/Button";

interface MoviesCardProps {
  movie: Movie;
}

export default function MoviesCard({ movie }: MoviesCardProps) {
  console.log(movie);
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
      <Button variant="success">
        <span className="flex gap-1">
          <Image
            src="/svgs/ShoppingCartIcon.svg"
            alt="Carregando..."
            width={13}
            height={13}
            priority
          />
          <p className="text-[12px] font-[400] ">0</p>
        </span>
        <p className="text-[12px] font-[700]">ADICIONAR AO CARRINHO</p>
      </Button>
    </div>
  );
}
