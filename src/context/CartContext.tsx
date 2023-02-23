import { useQuery } from "@tanstack/react-query"
import { createContext, useContext, ReactNode, useState } from "react"
import { toast } from "react-hot-toast"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { AuthContext } from "./AuthProvider"

type CartProviderProps = {
    children: ReactNode
}

type CartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

type CartItem = {
    id: number
    quantity: number
}

const CartContext = createContext({} as CartContext)

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    // const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart", [])
    const {user}=useContext(AuthContext);
    const userEmail = user?.email;

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error fetching cart data</div>;
      }

    const cartQuantity = data?.items?.reduce((quantity: number, item: CartItem) => item.quantity + quantity,0)

    const getItemQuantity = (id: number) => {
        return cartItems.find((item: CartItem) => item.id === id)?.quantity || 0;
    }
    

    const increaseCartQuantity = (id: number) => {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                return [...currentItems, { id, quantity: 1 }]
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                    //   toast.success('Successfully added')
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        // add item to server
                        // fetch('http://localhost:5000/add-to-cart', {
                        //     method: 'POST',
                        //     headers: {
                        //         'content-type': 'application/json',
                        //     },
                        //     body: JSON.stringify({
                        //                 id,
                        //                 quantity: getItemQuantity(id),
                        //                 userEmail
                        //             })
                        // })
                        //     .then(res => res.json())
                        //     .then(data => {
                        //         console.log(data)
                        //         if (data.acknowledged) {
                        //             toast.success('Successfully added')
                        //         }
                        //     })
                        //     .catch(e => console.error(e))
                        return item
                    }
                })
            }
        })
        console.log(getItemQuantity(id));
        const cartData ={
            id,
            quantity: getItemQuantity(id),
            userEmail
        }
        // add item to server
        fetch('http://localhost:5000/add-to-cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(cartData)
        })
        .then(res => {
            if (res.ok) {
                toast.success('Successfully added')
            } else {
                throw new Error('Failed to add item to cart')
            }
        })
        .catch(e => console.error(e))
        // fetch('http://localhost:5000/add-to-cart', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         id,
        //         quantity: getItemQuantity(id),
        //         userEmail
        //     })
        // })
        // .then(response => {
        //     // Handle response from server here
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }
        // })
        // .then(data => {
        //     // Refetch data from server after updating cart
        //     refetch();
        // })
        // .catch(error => {
        //     // Handle error here
        //     console.error('Error sending data to server:', error);
        // }); 
    }

    const decreaseCartQuantity = (id: number) => {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                    //   toast.success('Successfully removed')
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
        const cartData ={
            id,
            quantity: getItemQuantity(id),
            userEmail
        }
        // subtract item from server
        fetch('http://localhost:5000/subtract-from-cart', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(cartData)
        })
        .then(res => {
            if (res.ok) {
                toast.success('Successfully removed')
            } else {
                throw new Error('Failed to add item to cart')
            }
        })
        .catch(e => console.error(e))
        // fetch('http://localhost:5000/subtract-from-cart', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         id,
        //         quantity: getItemQuantity(id),
        //         userEmail
        //     })
        // })
        // .then(response => {
        //     // Handle response from server here
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //       }
        // })
        // .then(data => {
        //     // Refetch data from server after updating cart
        //     refetch();
        // })
        // .catch(error => {
        //     // Handle error here
        //     console.error('Error sending data to server:', error);
        // });
    }

    const removeFromCart = (id: number) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
        // remove item from server
        // fetch(`http://localhost:5000/remove-from-cart/${id}/${userEmail}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         userEmail
        //     })
        // })
        // .then(response => {
        //     // Handle response from server here
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //       }
        // })
        // .then(data => {
        //     // Refetch data from server after updating cart
        //     refetch();
        // })
        // .catch(error => {
        //     // Handle error here
        //     console.error('Error sending data to server:', error);
        // });
    }
    
    return (
        <CartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity, cartItems }}>
            {children}
        </CartContext.Provider>
    )
}
