import Weather from "../../../assets/img/weather/01.jpg";
import stark from "../../../assets/stark.png";

export default function Post() {
  return (
    <>
      <div className="max-w-sm overflow-hidden shadow-lg rounded-xl bg-white text-black">
        <img className="w-full" src={Weather} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-6 ">
          <span className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-full p-6">
            <div className="flex">
              <img
                src={stark}
                alt="profile"
                className="w-10 h-10 rounded-md my-auto shadow-md mr-4"
              />
              <div className="text">
                <div>Azrayaal</div>
                <div>June 24, 2024</div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
