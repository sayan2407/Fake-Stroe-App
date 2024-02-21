import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [ cartProducts, setCartProducts ] = useState([]);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  
    return (
      <AppContext.Provider
        value={{
            categories,
            setCategories,
            products,
            setProducts,
            categoryProducts,
            setCategoryProducts,
            cartProducts,
            setCartProducts,
            isSideBarOpen,
            setIsSideBarOpen,
            signInOpen,
            setSignInOpen
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };

  export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
  };

