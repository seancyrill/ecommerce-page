import { ReactNode, createContext, useContext, useState } from "react"

type CartItem = {
    id: number,
    quantity: number
}

type ShoppingCartContextType = {
    cartItem: CartItem[],
    setCartItem: React.Dispatch<React.SetStateAction<CartItem[]>>,
    addToCart: (id: number, quantity: number) => void 
    deleteItem: (id: number) => void 
    showCart: boolean
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}


const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

type ShoppingCartProviderType = {
    children: ReactNode
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderType) {
    const [cartItem, setCartItem] = useState<CartItem[]>([])
    const [showCart, setShowCart] = useState(false)

    function addToCart(id: number, quantity: number) {
        const newItem = {id: id, quantity: quantity}

        if (!cartItem.some(item => newItem.id === item.id)) {
            return setCartItem([...cartItem, newItem])
            
        } else {
            return setCartItem(cartItem.map(item => item.id === id 
                ? {...item, quantity: item.quantity + quantity} 
                : item 
            ))
        }
    }

    function deleteItem(id: number) {
        setCartItem(cartItem.filter(item => item.id !== id))
    }

    return (
        <ShoppingCartContext.Provider 
            value={{
                cartItem,
                setCartItem,
                addToCart,
                deleteItem,
                showCart,
                setShowCart
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}
export default ShoppingCartContext