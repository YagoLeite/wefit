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
        <p className="text-gray-500 text-center">Nenhum item no carrinho</p>
      </div>
    );
  }

  const itemVariants = {
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        // ease: [0.4, 0, 1, 1],
      },
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <AnimatePresence mode="popLayout">
        {movies.map((cartItem) => (
          <motion.div
            key={cartItem.movie.id}
            variants={itemVariants}
            exit="exit"
            layout
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
