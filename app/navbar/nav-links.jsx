import Link from "next/link";

export default function Navlinks() {
  return (
    <div className="h-full">
      <ul className="h-full list-none flex items-center content-center">
        <li className="h-full flex items-center content-center">
          <Link
            href="#"
            className=" flex items-center content-center h-4/5 rounded-md px-4 text-base font-semibold focus:outline-none hover:underline focus:ring focus:ring-blue-300"
          >
            Home
          </Link>
        </li>
        <li className="h-full flex items-center content-center">
          <Link
            href="#"
            className=" flex items-center content-center h-4/5 rounded-md px-4 text-base  focus:outline-none hover:underline focus:ring focus:ring-blue-300"
          >
            About
          </Link>
        </li>
        <li className="h-full flex items-center content-center">
          <Link
            href="#"
            className=" flex items-center content-center h-4/5 rounded-md px-4 text-base  focus:outline-none hover:underline focus:ring focus:ring-blue-300"
          >
            Portfolio
          </Link>
        </li>
        <li className="h-full flex items-center content-center">
          <Link
            href="#"
            className=" flex items-center content-center h-4/5 rounded-md px-4 text-base  focus:outline-none hover:underline focus:ring focus:ring-blue-300"
          >
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
}
