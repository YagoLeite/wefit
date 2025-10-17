"use client";

import { CartItem as CartItemType } from "@/types/cart";
import CartItem from "../cart-item/CartItem";
import { motion, AnimatePresence } from "framer-motion";
import CartRowMobile from "../cart-item/CartRowMobile";

interface CartListMobileProps {
  movies: CartItemType[];
}

export default function CartListMobile({ movies }: CartListMobileProps) {
  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-we-gray text-center">Nenhum item no carrinho</p>
      </div>
    );
  }

  const itemVariants = {
    exit: {
      height: 0,
      opacity: 0,
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <AnimatePresence>
        {movies.map((cartItem) => (
          <motion.div
            key={cartItem.movie.id}
            variants={itemVariants}
            exit="exit"
            className="overflow-hidden"
          >
            <CartRowMobile
              movie={cartItem.movie}
              quantity={cartItem.quantity}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
