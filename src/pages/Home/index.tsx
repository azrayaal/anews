import Categories from "../components/categories";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="my-4">
        <Categories />
      </div>
    </>
  );
}
