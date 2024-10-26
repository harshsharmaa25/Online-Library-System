import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/Books";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BrowseBooks = () => {
  // ---------------------------- Use of slice method below is to avoid mutating the original state directly. ----------------------------

  const books = useSelector((state) => state.books.list.slice().reverse());
  const categoryFromParams = useParams().category;
  const [booksByCategory, setBooksByCategory] = useState([]);
  const [search, setSearch] = useState("");

  // ---------------------------- Filter books based on the selected category in the dynamic routing. ----------------------------

  useEffect(() => {
    if (categoryFromParams && categoryFromParams !== "All") {
      const filtered = books.filter(
        (book) =>
          book.category.toLowerCase() === categoryFromParams.toLowerCase()
      );
      setBooksByCategory(filtered);
    } else {
      setBooksByCategory(books);
    }
  }, [categoryFromParams]);

  // ---------------------------- Filter books based on search query ----------------------------
  const filteredBooks = booksByCategory.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div
  className="bg-cover bg-no-repeat bg-center flex items-center justify-center h-64"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGJvb2t8ZW58MHx8fHwxNjI5MzMwMTEy&ixlib=rb-1.2.1&q=80&w=1080')",
  }}
>

<section className="text-center relative z-10">
    <h1 className="text-6xl font-bold text-yellow-300 drop-shadow-lg">Browse Books</h1>
    <p className="text-center text-white mt-4 md:text-2xl drop-shadow-lg">
      Explore our extensive collection of books across various genres.
    </p>
  </section>
</div>

      <section className="flex flex-col items-center justify-between md:flex-row my-6">
        {/* Category filter by dynamic routing */}
        <ul className="w-full flex space-x-6 flex-wrap mb-6 md:my-8 md:w-full">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/browse-books/${category}`}
              className={`text-blue-400 text-lg
               hover:text-blue-800 hover:underline ${
                 category === categoryFromParams
                   ? "text-blue-900 underline"
                   : ""
               }`}
            >
              {category}
            </Link>
          ))}
        </ul>
        <section className="w-full flex items-center space-x-8 md:h-2/4">
          <div className="outline-none px-4 py-2 border border-gray-300 text-lg ml-auto block w-full md:w-4/5">
            <span className="text-gray-400 mr-4">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              placeholder="Search Books By Title & Author.."
              className="outline-none w-4/5"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </section>
      </section>

      {/* ------ Display filtered books or 'not found' message */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md rounded overflow-hidden transform hover:scale-105 transition-transform"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
    {book.title}
  </h3>
  <p className="text-gray-700 italic">{book.author}</p>
  <p className="text-gray-500 text-sm">{book.category}</p>
  <Link
    to={`/book-details/${book.id}`}
    className="mt-4 block w-fit bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gradient-to-l hover:shadow-lg transition-all duration-300"
  >
    View Details
  </Link>
</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500 text-lg mt-10">
          Search for book "{search}" not found...!!
        </p>
      )}
    </div>
  );
};

export default BrowseBooks;
