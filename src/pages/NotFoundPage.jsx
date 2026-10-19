import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="not-found-container flex flex-col gap-y-5 pt-5 pb-15 box-border">
      <span className="text-gray-200/70 tracking-[3.5px] uppercase">404</span>
      <span className="text-white font-bold text-5xl capitalize tracking-tighter">
        Page Not Found
      </span>
      <Link to="/">
        <button className="bg-white py-3 px-5 box-border rounded-full hover:bg-gray-100/90 cursor-pointer transition duration-500 ease-out flex items-center justify-center gap-x-2">
          <FaArrowLeft />
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
