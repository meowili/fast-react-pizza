import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className=" bg-yellow-400 uppercase flex items-center justify-between px-4 py-3 border-b border-stone-200 sm:px-6">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
