import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/Logo.svg";
export default function Siteicon() {
  return (
    <div className="w-36 h-12 my-1 relative ">
      <Link href="#">
        <Image src={Logo} alt="site icon" width="144px" height="48px" />
      </Link>
    </div>
  );
}
