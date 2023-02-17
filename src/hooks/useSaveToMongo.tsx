import axios from 'axios';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';


type CartItem = {
    id: number;
    quantity: number;
  };

const useSaveToMongo = () => {
  const [cartItems] = useLocalStorage<CartItem[]>('cart', []);

  const { mutate: saveToMongo } = useMutation((cartItems: CartItem[]) =>
  axios.post('http://localhost:5000/save-to-mongo', { cartItems })
);

  useEffect(() => {
    saveToMongo(cartItems);
  }, [cartItems, saveToMongo]);
};

export default useSaveToMongo;
