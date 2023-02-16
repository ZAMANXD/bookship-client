import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, ReactNode, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AuthContext } from "./AuthProvider";

type CartProviderProps = {
  children: ReactNode;
};

type CartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

type CartItem = {
  id: number;
  quantity: number;
};

const CartContext = createContext({} as CartContext);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const{user}=useContext(AuthContext);
  // console.log(user);
  

  async function sendCartItemsToServer(cartItems: CartItem[]) {
    const userEmail = user?.email;
    const response = await fetch("http://localhost:5000/cart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {userEmail,
        cartItems}
        ),
    });
  
    if (!response.ok) {
      throw new Error("Failed to send cart items to server");
    }
  }
  
  // const {data:cartItemsData =[]}= useQuery({

  // })

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            toast.success('Successfully added')
            
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    sendCartItemsToServer(cartItems);
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    sendCartItemsToServer(cartItems);
  };

  const removeFromCart = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };
  // console.log(cartItems);

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
