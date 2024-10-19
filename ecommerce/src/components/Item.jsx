import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Item = ({ id, name, image, old_price, new_price }) => {
  // Define the base URL for images
  const baseUrl = "https://ecommerce-mern-w5oy.onrender.com/images/";

  // Replace localhost URL with the production URL if necessary
  const imageUrl = image.startsWith("http://localhost:3000/images/")
    ? image.replace("http://localhost:3000/images/", baseUrl)
    : image;

  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div className="relative flexCenter group overflow-hidden transition-all duration-100">
        <Link
          to={`/product/${id}`}
          className="h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 bottom-1/2 !py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700"
        >
          <FaSearch className="hover:rotate-90 hover:scale-125 transition-all duration-200" />
        </Link>
        <img
          onClick={window.scrollTo(0, 0)}
          src={imageUrl} // Use the updated imageUrl
          alt="productImage"
          className="w-full block object-cover group-hover:scale-110 transition-all duration-1000"
        />
      </div>
      <div className="p-4 overflow-hidden">
        <h4 className="my-[6px] medium-16 line-clamp-2 text-gray-30">{name}</h4>
        <div className="flex gap-5">
          <div className="bold-16">${old_price}</div>
          <div className=" text-[#ff7477] bold-16 line-through">
            ${new_price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
