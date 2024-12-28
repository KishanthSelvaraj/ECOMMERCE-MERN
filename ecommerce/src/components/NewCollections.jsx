import React, { useEffect, useState } from "react";
import Item from "./Item";

const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    fetch("https://ecommerce-mern-w5oy.onrender.com/newcollections")
      .then((res) => res.json())
      .then((data) => {
        setNew_collection(data);
        setLoading(false); // Hide loader once data is fetched
      });
  }, []);

  return (
    <section className="bg-primary">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className="h3 text-center">Latest Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16" />
        {loading ? (
          // Loader
          <div
            className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75"
            style={{ zIndex: 1000 }}
          >
            <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          // Container
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {new_collection.map((item) => (
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
        )}
      </div>
    </section>
  );
};

export default NewCollections;
