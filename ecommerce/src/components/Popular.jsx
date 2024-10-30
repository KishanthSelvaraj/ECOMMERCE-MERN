import React, { useEffect, useState } from "react";
// import POPULAR from "../assets/popular";
import Item from "./Item";

const Popular = () => {
  const [popular_products, setPopular_products] = useState([]);

  useEffect(()=>{
    fetch("https://ecommerce-mern-w5oy.onrender.com/popularproducts").then((res)=>res.json()).then((data)=>setPopular_products(data))
  },[])
  return (
    <section className="bg-primary">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className="h3 text-center">Popular Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16" />
        {/* container */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {popular_products.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
