import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Item from "../components/Item";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";

const Category = ({ category, banner }) => {
  const { all_products } = useContext(ShopContext);
  const [loading, setLoading] = useState(true); // Manage loading state

  // Simulate loading for demo or wait until products are fetched
  useEffect(() => {
    if (all_products.length > 0) {
      setLoading(false);
    }
  }, [all_products]);

  return (
    <section className="max_padd_container py-12 xl:py-28">
      {loading ? (
      <div
      className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75"
      style={{ zIndex: 1000 }}
    >
      <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
      ) : (
        <div>
          <div>
            <img src={banner} alt="" className="block my-7 mx-auto" />
          </div>
          <div className="flexBetween my-8 mx-2">
            <h5>
              <span className="font-bold">Showing 1-12</span> out of 36 products
            </h5>
{/*             <div className="flexBetween max-sm:p-4 gap-x-4 px-8 py-3 rounded-5xl ring-1 ring-slate-900/15">
              Sort by <MdOutlineKeyboardArrowDown />
            </div> */}
          </div>
          {/* container */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {all_products.map((item) => {
              if (category === item.category) {
                return (
                  <Item
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                );
              }
            })}
          </div>
          <div className="mt-16 text-center">
            <button className="medium-15 border border-[#ff7477] bg-[#ff7477] px-7 py-3 text-white transition-all hover:bg-[#fa6568] rounded-full">
              Load More
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Category;
