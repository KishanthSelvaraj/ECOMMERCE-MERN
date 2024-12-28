import React, { useContext, useState } from "react";
import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  
  const baseUrl = "https://ecommerce-mern-w5oy.onrender.com";
  const productImageUrl = product.image.replace("http://localhost:3000", baseUrl);

  const productImages = [product_rt_1, product_rt_2, product_rt_3, product_rt_4];
  const [selectedImage, setSelectedImage] = useState(productImageUrl);

  return (
    <section className="flex flex-col gap-14 xl:flex-row xl:flex-1 px-6 py-10 bg-white">
      {/* Left Side - Product Images */}
      <div className="flex gap-x-6">
        <div className="flex flex-col gap-2 w-24">
          {productImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`product-thumbnail-${index}`}
              className="h-[130px] w-[100px] object-cover cursor-pointer hover:border border-gray-300"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <div className="flex items-start">
          {/* Main Image with Fixed Size */}
          <img
            src={selectedImage}
            alt="main product"
            className="w-[500px] h-[550px] object-cover" // Fixed width and height
          />
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="flex-col flex gap-4 xl:flex-[1.6] text-gray-800">
        <h2 className="text-3xl font-semibold">{product.name}</h2>
        <div className="flex gap-2 text-[#ff7477] text-xl items-center">
          {[...Array(4)].map((_, i) => (
            <MdStar key={i} />
          ))}
          <p className="text-gray-700 font-medium">(111)</p>
        </div>
        <div className="text-xl">
          <span className="line-through text-gray-500">R {product.old_price}</span>
          <span className="ml-2 text-[#ff7477]">R {product.new_price}</span>
          <span className="block text-sm text-gray-500">incl. VAT</span>
        </div>
        <div className="text-lg font-medium text-gray-700">R {Math.floor(product.new_price * 0.87)} excl. VAT</div>

        {/* Payment Options */}
        <div className="my-4 space-y-3">
          <div className="flex items-center">
            <img src="https://mobicred.co.za/images/logo-mobicred-grey.png" alt="Mobicred" className="h-6 mr-4" />
            <span className="font-medium">Buy it now on credit:</span>
            <span className="ml-2 font-semibold text-[#ff7477]">R 1,512 per month</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src="https://widgets.payflex.co.za/assets/partpay_new.png" alt="Payflex" className="h-6" />
            <span className="text-gray-600">or split into</span>
            <span className="font-semibold">4x interest-free payments</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-y-3 mb-4">
          <button
            onClick={() => addToCart(product.id)}
            className="bg-gray-800 text-white py-3 uppercase tracking-wider rounded"
          >
            Add to cart
          </button>
          <button className="bg-black text-white py-3 uppercase tracking-wider rounded">
            Buy it now
          </button>
        </div>

        {/* Category and Tags */}
        <p className="text-gray-700 text-sm">
          <span className="font-medium">Category:</span> Solar Water Heating Kits
        </p>
        <p className="text-gray-700 text-sm">
          <span className="font-medium">Tags:</span> Renewable, Energy Efficient
        </p>

        {/* Additional Info */}
        <p className="text-gray-500 text-xs mt-6">Tax included. Shipping calculated at checkout.</p>
      </div>
    </section>
  );
};

export default ProductDisplay;
