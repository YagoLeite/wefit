"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { CartItem, CartContextType } from "@/types/cart";
import { Movie } from "@/types/movie";

type CartAction =
  | { type: "ADD_ITEM"; payload: Movie }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.movie.id === action.payload.id
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.movie.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { movie: action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM": {
      return {
        items: state.items.filter((item) => item.movie.id !== action.payload),
      };
    }

    case "CLEAR_CART":
      return { items: [] };

    case "LOAD_CART":
      return { items: action.payload };

    default:
      return state;
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Carregar do localStorage na inicialização
  useEffect(() => {
    const savedCart = localStorage.getItem("wefit-cart");
    if (savedCart) {
      try {
        const cartItems: CartItem[] = JSON.parse(savedCart);
        console.log("Loaded cart items:", cartItems);
        dispatch({ type: "LOAD_CART", payload: cartItems });
      } catch (error) {
        console.error("Erro ao carregar carrinho:", error);
      }
    } else {
      console.log("No saved cart found");
    }
  }, []);

  // Função para salvar no localStorage
  const saveToLocalStorage = (items: CartItem[]) => {
    console.log("Saving to localStorage:", items);
    localStorage.setItem("wefit-cart", JSON.stringify(items));
  };

  // Memoizar valores computados para evitar re-renders desnecessários
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.movie.price * item.quantity,
    0
  );

  const value: CartContextType = {
    items: state.items,
    totalItems,
    totalPrice,
    addItem: (movie: Movie) => {
      const existingItem = state.items.find(
        (item) => item.movie.id === movie.id
      );
      let newItems;

      if (existingItem) {
        newItems = state.items.map((item) =>
          item.movie.id === movie.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { movie, quantity: 1 }];
      }

      dispatch({ type: "ADD_ITEM", payload: movie });
      saveToLocalStorage(newItems);
    },
    removeItem: (movieId: string) => {
      const newItems = state.items.filter((item) => item.movie.id !== movieId);
      dispatch({ type: "REMOVE_ITEM", payload: movieId });
      saveToLocalStorage(newItems);
    },
    clearCart: () => {
      dispatch({ type: "CLEAR_CART" });
      saveToLocalStorage([]);
    },
    isInCart: (movieId: string) =>
      state.items.some((item) => item.movie.id === movieId),
    getItemQuantity: (movieId: string) => {
      const item = state.items.find((item) => item.movie.id === movieId);
      return item ? item.quantity : 0;
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
}
