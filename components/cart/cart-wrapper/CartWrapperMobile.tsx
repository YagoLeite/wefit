import { AnimatePresence, motion } from "framer-motion";
import CartList from "../cart-list/CartListMobile";
import CartTotal from "../cart-total/CartTotal";
import { CartItem } from "@/types/cart";

export default function CartWrapperMobile({ items }: { items: CartItem[] }) {
  const itemVariants = {
    exit: {
      opacity: 0,
      scaleY: 0,
    },
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  };
  return (
    <motion.div
      className="flex w-full h-fit flex-col gap-4 bg-[white] rounded-[4px] p-4 md:px-6 gap-[21px] md:gap-[24px] min-[761px]:hidden"
      layout
    >
      <CartList movies={items} />

      <AnimatePresence mode="popLayout">
        {items.length > 0 && (
          <motion.div key="footer" variants={itemVariants} exit="exit" layout>
            <div className="w-full border-t border-[#999999] mb-4" />
            <CartTotal />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
