import Weather from "../../../assets/img/weather/01.jpg";
import stark from "../../../assets/stark.png";
import { FaRegBookmark } from "react-icons/fa6";

export default function Post() {
  return (
    <>
      <div className="max-w-sm overflow-hidden shadow-lg rounded-xl bg-white text-black">
        <div className="p-2">
          <img className="w-full rounded-xl" src={Weather} alt="img" />
        </div>
        <div className="px-6 pt-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base overflow-hidden overflow-ellipsis whitespace-nowrap w-30">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          {/* <p className="text-gray-700 text-base">
            {desc.length > 30 ? `${desc.substring(0, 30)}...` : desc}
          </p> */}
        </div>
        <div className="p-2">
          <span className="inline-block bg-gray-200 rounded-md px-3 py-3 text-sm font-semibold text-gray-700 mr-2 w-full p-6">
            <div className="flex">
              <img
                src={stark}
                alt="profile"
                className="w-10 h-10 rounded-md my-auto shadow-md mr-4"
              />
              <div className="text w-full">
                <p className="font-bold pb-1">Azrayaal</p>
                <p className="font-thin text-gray-500 text-xs">June 24, 2024</p>
              </div>
              <FaRegBookmark className="m-auto text-lg" />
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
