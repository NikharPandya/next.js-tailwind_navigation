import Navicons from "./nav-icons";
import Navlinks from "./nav-links";
import Siteicon from "./site-icon";

export default function Navbar() {
  return (
    <header className="container mx-auto h-14 bg-slate-400 sticky top-5 rounded drop-shadow-2xl	">
      <div className="w-full h-full flex justify-between">
        <Siteicon />
        <Navlinks />
        <Navicons />
      </div>
    </header>
  );
}
