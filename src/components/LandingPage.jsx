import React from "react";
import BookCategories from "./BookCategories";

const LandingPage = () => {
  return (
    <div className="h-2/3">
      <section className="text-center my-8 ">
        <h2 className="text-4xl font-semibold ">Welcome to Library</h2>
        <p className="text-gray-600 mt-4">
          Discover a world of books across various genres. Explore, read, and
          enjoy!
        </p>
      </section>
      <BookCategories />
    </div>
  );
};

export default LandingPage;
