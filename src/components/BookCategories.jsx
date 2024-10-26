import { categories } from "../utils/Books";
import { Link } from "react-router-dom";

const BookCategories = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-6">Book Categories</h2>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 mt-4">
        {categories.map(
          (category) =>
            category !== "All" && (
              <Link
                key={category}
                to={`/browse-books/${category}`}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold">{category}</h3>
              </Link>
            )
        )}
      </section>
    </div>
  );
};

export default BookCategories;
