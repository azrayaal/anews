import Categories from "../components/categories";
import Navbar from "../components/navbar";
import dataCategory from "../../assets/data_dummy/data-categories";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="my-4">
        {dataCategory.map((category) => (
          <Categories
            id={category.id}
            categoryName={category.name}
            categoryImg={category.img}
          />
        ))}
      </div>
    </>
  );
}
