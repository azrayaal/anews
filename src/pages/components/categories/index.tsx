import { Link } from "react-router-dom";
interface categoryProps {
  categoryImg: string;
  categoryName: string;
  id: number;
}
export default function Categories(props: categoryProps) {
  const { categoryImg, categoryName, id } = props;
  return (
    <div
      className="carousel carousel-center rounded-box space-x-4 p-4"
      style={{ maxWidth: "100%", overflowX: "auto" }}
    >
      <div className="carousel-item">
        <Link to={`/categories/${id}`}>
          <div className="max-w-sm overflow-hidden shadow-lg relative rounded-xl h-10 w-60">
            <img
              className="w-full filter blur-sm "
              src={categoryImg}
              alt="Sunset in the mountains"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-bold text-xl text-white text-shadow-md ">
                {categoryName}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
