import { Button } from "@material-tailwind/react";
import bannerImg from "../../../assets/banner2.png";
import spoon from "../../../assets/spoon2.png";
import boal1 from "../../../assets/boal1.png";
import threeItems from "../../../assets/threeItems.png";

const Banner = () => {
  return (
    <div className="lg:pt-16 md:pt-12 py-7 md:pb-10 lg:px-8 md:px-5 px-3 max-w-screen-2xl mx-auto">
      <div className="flex">
        <div className="w-7/12  flex flex-col justify-end">
          <div className="flex md:gap-10 gap-5 ">
            <img className="w-1/2 h-1/2 " src={spoon} alt="" />
            <img className="w-2/5 " src={boal1} alt="" />
          </div>
          <div className="">
            <h1 className="lg:text-6xl md:text-[44px] text-2xl font-fontSans font-semibold text-white">
              Fuel Yourself
            </h1>
            <h1 className="lg:text-6xl md:text-[44px] md:leading-tight text-2xl font-fontSans font-semibold text-white">
              with <span className="text-yellow-500">delicious dishes</span>
            </h1>
            <h1 className="lg:text-6xl md:text-[44px] text-[22px] font-fontSans font-semibold text-white">
              three times every day.
            </h1>
            {/* <h1 className="lg:text-2xl md:text-xl text-sm font-medium  text-white md:block hidden">
              Search for eat and feed
            </h1>{" "} */}
            */
          </div>

          <div className="lg:w-full md:w-full w-full md:block hidden">
            <div className="flex items-center md:gap-2 gap-1 ">
              <div className="lg:w-9/12 md:w-9/12">
                <input
                  type="text"
                  name="text"
                  className="w-full md:py-5 py-[9px] rounded-full md:pl-5 pl-3 text-gray-900 bg-[#181818]"
                  placeholder="Search your meal"
                />
              </div>
              <div className="lg:w-1/5 md:w-1/4">
                <Button className="md:py-[19px] py-[9px] w-full md:rounded-full rounded-full capitalize md:text-lg text-base font-bold bg-[#42B87E]">
                  Find
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-5/12  flex flex-col items-end">
          <img className="w-full " src={bannerImg} alt="" />
          <img className="w-full pt-3" src={threeItems} alt="" />
        </div>
      </div>

      <div className="flex items-center md:gap-2 gap-1 md:hidden w-full ">
        <div className="w-9/12">
          <input
            type="text"
            name="text"
            className="w-full md:py-5 py-[9px] rounded-full lg:pl-5 pl-3 text-gray-900 bg-[#181818]"
            placeholder="Search your meal"
          />
        </div>
        <div className="lg:w-1/5 md:w-1/4">
          <Button className="md:py-[19px] py-[9px] w-full md:rounded-full rounded-full capitalize md:text-lg text-base font-bold bg-[#42B87E]">
            Find
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
