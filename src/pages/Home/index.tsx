import Categories from "../components/categories";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="my-6 mx-5">
        <Categories />
      </div>
    </>
  );
}
