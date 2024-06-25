import { Link } from "react-router-dom";
import dataCarouselContent from "../../assets/data_dummy/data-carousel-content";
import Categories from "../components/categories";
import Navbar from "../components/navbar";
import CardContent from "../components/post";
import Post from "../components/post/post";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <div className="my-4">
          <Categories />
        </div>
        <div
          className="carousel carousel-center space-x-4 p-4 hidden sm:flex"
          style={{ maxWidth: "100%", overflowX: "auto" }}
        >
          {dataCarouselContent.map((content) => (
            <CardContent
              id={content.id}
              img={content.img}
              title={content.title}
              desc={content.desc}
            />
          ))}
        </div>
        {/* Popular post */}
        <div className="my-4 p-4 Popular-post">
          <div className="my-4">
            <div className="flex pb-4">
              <div className="p-2 w-1 bg-red-500" />
              <h1 className="text-black pl-3">Popular Posts</h1>
              <div className=" rounded-md bg-white ml-auto">
                <Link to="/post">
                  <p className="text-gray-500 my-1 mx-2 text-xs">Show all ▶️</p>
                </Link>
              </div>
            </div>
          </div>
          <Post />
        </div>
        {/* New Post  */}
        <div className="my-4 p-4 new-post">
          <div className="my-4">
            <div className="flex pb-4">
              <div className="p-2 w-1 bg-red-500" />
              <h1 className="text-black pl-3">New Posts</h1>
              <div className=" rounded-md bg-white ml-auto">
                <Link to="/post">
                  <p className="text-gray-500 my-1 mx-2 text-xs">Show all ▶️</p>
                </Link>
              </div>
            </div>
          </div>
          <Post />
        </div>
        {/* Trendy Post */}
        <div className="my-4 p-4 Trendy-post">
          <div className="my-4">
            <div className="flex pb-4">
              <div className="p-2 w-1 bg-red-500" />
              <h1 className="text-black pl-3">Trendy Posts</h1>
              <div className=" rounded-md bg-white ml-auto">
                <Link to="/post">
                  <p className="text-gray-500 my-1 mx-2 text-xs">Show all ▶️</p>
                </Link>
              </div>
            </div>
          </div>
          <Post />
        </div>
      </div>
    </>
  );
}
