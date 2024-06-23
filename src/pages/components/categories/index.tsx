import { Link } from "react-router-dom";
import Food from "../../../assets/img/food/07.jpg";
export default function Categories() {
  return (
    // <div className="carousel carousel-center rounded-box space-x-4 p-4">
    <div
      className="carousel carousel-center rounded-box space-x-4 p-4"
      style={{ maxWidth: "100%", overflowX: "auto" }}
    >
      <div className="carousel-item">
        <Link to="/categories">
          <div className="max-w-sm overflow-hidden shadow-lg relative rounded-xl h-10 w-60">
            <img className="w-full " src={Food} alt="Sunset in the mountains" />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-bold text-xl text-white text-shadow-md ">
                #Food
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="carousel-item">
        <Link to="/categories">
          <div className="max-w-sm overflow-hidden shadow-lg relative rounded-xl h-10 w-60">
            <img className="w-full " src={Food} alt="Sunset in the mountains" />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-bold text-xl text-white text-shadow-md ">
                #Food
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="carousel-item">
        <Link to="/categories">
          <div className="max-w-sm overflow-hidden shadow-lg relative rounded-xl h-10 w-60">
            <img className="w-full " src={Food} alt="Sunset in the mountains" />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-bold text-xl text-white text-shadow-md ">
                #Food
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="carousel-item">
        <Link to="/categories">
          <div className="max-w-sm overflow-hidden shadow-lg relative rounded-xl h-10 w-60">
            <img className="w-full " src={Food} alt="Sunset in the mountains" />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-bold text-xl text-white text-shadow-md ">
                #Food
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="carousel-item">
        <Link to="/categories">
          <div className="max-w-sm overflow-hidden shadow-lg relative rounded-xl h-10 w-60">
            <img className="w-full " src={Food} alt="Sunset in the mountains" />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-bold text-xl text-white text-shadow-md ">
                #Food
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="carousel-item">
        <Link to="/categories">
          <div className="max-w-sm overflow-hidden shadow-lg relative rounded-xl h-10 w-60">
            <img className="w-full " src={Food} alt="Sunset in the mountains" />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-bold text-xl text-white text-shadow-md ">
                #Food
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
