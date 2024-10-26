import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice'; // Import the books slice reducer

// ---------------------------- Configuring store for our application ----------------------------
const store = configureStore({
    reducer: {
        books: booksReducer, // Register the books slice reducer
    },
});

export default store;
