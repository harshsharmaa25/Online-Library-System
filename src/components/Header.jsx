import NavigationLinks from "./NavigationLinks";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex items-center justify-between shadow-lg ">
      <Link to={`/`}>
        <h1 className="text-4xl font-bold hover:text-yellow-300 transition-colors duration-200">
          Library
        </h1>
      </Link>
      <NavigationLinks />
    </header>
  );
};

export default Header;
