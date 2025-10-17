"use client";

import { CartItem as CartItemType } from "@/types/cart";
import CartItem from "../cart-item/CartItem";
import { motion, AnimatePresence } from "framer-motion";

interface CartListProps {
  movies: CartItemType[];
}

export default function CartList({ movies }: CartListProps) {
  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-we-gray text-center">Nenhum item no carrinho</p>
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
            <CartItem movie={cartItem.movie} quantity={cartItem.quantity} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
