import { CartItem as CartItemType } from "@/types/cart";
import Image from "next/image";
import NumberInputController from "./NumberInputControler/NumberInputControler";

interface CartItemProps {
  movie: CartItemType["movie"];
  quantity: CartItemType["quantity"];
}

export default function CartItem({ movie, quantity }: CartItemProps) {
  return (
    <div className="flex items-center  border-0 max-h-[114px]">
      <div className="flex items-center gap-2 w-full max-w-[280px]">
        <Image src={movie.image} alt={movie.title} width={91} height={114} />
        <div className="flex flex-col gap-2 h-full justify-center">
          <h3 className="text-surface text-[14px] font-[700] ml-4">
            {movie.title}
          </h3>
          <p className="text-surface text-[16px] font-[700] ml-4">
            R$ {movie.price.toFixed(2).replace(".", ",")}
          </p>
        </div>
      </div>
      <div className="w-full max-w-[348px]">
        <NumberInputController
          initialValue={quantity}
          onChange={(value) => {
            console.log(value);
          }}
        />
      </div>
    </div>
  );
}
