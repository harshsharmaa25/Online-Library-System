import { categories } from "../utils/Books";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../schema";
import { useDispatch } from "react-redux";
import { addNewBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      author: "",
      category: "",
      cover: "",
      description: "",
      rating: "",
      popular: false,
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    try {
      dispatch(addNewBook(formData));
      navigate("/browse-books"); // Redirect after adding a new book
    } catch (error) {
      console.error("Failed to add new book: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center my-12 bg-gradient-to-r from-blue-100 to-blue-300 p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">Add New Book</h2>
      <p className="text-center text-gray-700 mb-8">
        Fill out the form below to add a new book to our collection.
      </p>
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-semibold mb-2" htmlFor="title">
              Title
            </label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Enter book title"
                  className="border border-blue-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              )}
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-semibold mb-2" htmlFor="author">
              Author
            </label>
            <Controller
              name="author"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Enter author name"
                  className="border border-blue-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              )}
            />
            {errors.author && <p className="text-red-500">{errors.author.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-semibold mb-2" htmlFor="genre">
              Genre
            </label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  id="genre"
                  className="border border-blue-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                >
                  <option value="">Select Genre</option>
                  {categories.map((category, index) => (
                    category !== "All" && (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    )
                  ))}
                </select>
              )}
            />
            {errors.category && <p className="text-red-500">{errors.category.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-semibold mb-2" htmlFor="cover">
              Book Cover URL
            </label>
            <Controller
              name="cover"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Enter cover image URL"
                  className="border border-blue-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              )}
            />
            {errors.cover && <p className="text-red-500">{errors.cover.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-semibold mb-2" htmlFor="description">
              Description
            </label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Enter book description"
                  className="border border-blue-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  rows="4"
                ></textarea>
              )}
            />
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-semibold mb-2" htmlFor="rating">
              Rating
            </label>
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  placeholder="Rate from 1 to 5"
                  className="border border-blue-300 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              )}
            />
            {errors.rating && <p className="text-red-500">{errors.rating.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-semibold mb-2">
              Popularity
            </label>
            <Controller
              name="popular"
              control={control}
              render={({ field }) => (
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    {...field}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Mark as popular</span>
                </label>
              )}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300 transform hover:scale-105"
              type="submit"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
