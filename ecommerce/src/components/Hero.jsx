import { MdOutlineLocalOffer } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-cover  bg-center bg-no-repeat h-screen w-full ">
      <div className="max_padd_container relative top-32 xs:top-52 ">
        <h1 className="h1 capitalize max-w-[37rem] text-white">
          <span className="text-[#6af771]">Sustainable</span> Spring 2024
        </h1>
        <p className="text-white regular-16 mt-3 lg:mt-6 max-w-[33rem] ">
          Spring is in the air, and it's the perfect time to refresh your home
          and lifestyle with eco-friendly solutions. At <span className="text-gray-500">Sustainable.co.za</span> we
          are celebrating the season of renewal with incredible promotions that
          will help you save energy, reduce your carbon footprint, and embrace a
          more sustainable way of living.
        </p>
        {/* <div className="flexStart !items-center gap-x-4 my-10">
          <div className="!regular-24 flexCenter gap-x-3 text-white">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="bold-16 sm:bold-20 text-[#ff7477]">
            176k
            <span className="regular-16 sm:regular-20"> Excellent Reviews</span>
          </div>
        </div> */}
        <div className="max-xs:flex-col lg:flex gap-2 hidden mt-4">
          {/* <NavLink className={"btn_white_rounded flexCenter "}>Shop now</NavLink> */}
          <NavLink
            className={
              "btn_white_rounded flexCenter gap-x-2 hover:bg-[#6af771] hover:border-[#6af771]"
            }
          >
            <MdOutlineLocalOffer className="text-2xl " />
            View Offers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
