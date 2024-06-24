import dataCarouselContent from "../../assets/data_dummy/data-carousel-content";
import Categories from "../components/categories";
import Navbar from "../components/navbar";
import CardContent from "../components/post";
import Post from "../components/post/post";

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

        <div className="my-4 p-4">
          <div className="my-4">
            <div className="flex">
              <div className="p-2 w-1 bg-red-500" />
              <h1 className="text-black pl-3">Popular Posts</h1>
            </div>
          </div>
          <Post />
        </div>
      </div>
    </>
  );
}
