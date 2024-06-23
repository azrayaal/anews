import CategoryData from "./categoryData";
import dataCategory from "../../../assets/data_dummy/data-categories";
export default function Categories() {
  return (
    <div
      className="carousel carousel-center rounded-box space-x-4 p-4"
      style={{ maxWidth: "100%", overflowX: "auto" }}
    >
      {dataCategory.map((category) => (
        <CategoryData
          id={category.id}
          categoryName={category.name}
          categoryImg={category.img}
        />
      ))}
    </div>
  );
}
