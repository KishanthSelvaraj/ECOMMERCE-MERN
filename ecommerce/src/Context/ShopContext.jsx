import { createContext, useEffect, useState } from "react";
// import all_products from "../assets/all_products";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
 const [all_products, setAll_products] = useState([]);

useEffect(()=>{
  fetch("https://ecommerce-mern-w5oy.onrender.com/allproducts").then((res)=>res.json()).then((data)=>setAll_products(data))
  if (localStorage.getItem("auth-token")) {
    fetch("https://ecommerce-mern-w5oy.onrender.com/getcart", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "auth-token": `${localStorage.getItem("auth-token")}`,
        "Content-Type": "application/json",
      },
      body: "",
    }).then((res)=>res.json()).then((data)=>setCartItems(data))
  }
},[])

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // console.log(cartItems);
    if (localStorage.getItem("auth-token")) {
      fetch("https://ecommerce-mern-w5oy.onrender.com/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"itemId": itemId }),
      }).then((res)=>res.json()).then((data)=>console.log(data))
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("https://ecommerce-mern-w5oy.onrender.com/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body:JSON.stringify({"itemId": itemId }),
      }).then((res)=>res.json()).then((data)=>console.log(data))
    }
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        // If itemInfo is null or undefined, it simply skips adding to totalAmount
        totalAmount += itemInfo ? itemInfo.new_price * cartItems[item] : 0;
      }
    }
    return totalAmount;
  };
  
  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const contextValue = {
    getTotalCartItem,
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
