import { Link } from "react-router-dom";

interface contentProps {
  id: number;
  img: string;
  title: string;
  desc: string;
}
export default function CardContent(props: contentProps) {
  const { img, title, desc, id } = props;
  return (
    <>
      <div className="">
        <Link to={`/post/${id}`}>
          <div className="card h-96 md:w-96 sm:w-full shadow-xl relative items-center justify-center text-black">
            <img
              src={img}
              className="rounded-xl shadow-xl object-cover h-full w-full"
            />
            <div className="m-2 absolute bottom-0">
              <div className="card-body bg-gray-200 bg-opacity-90 rounded-xl w-full bottom-2">
                <h5 className="card-title">
                  {title}
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h5>
                <p>{desc.length > 30 ? `${desc.substring(0, 30)}...` : desc}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
