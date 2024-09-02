
import React, { useState } from 'react';
import MovieList from './Components/MovieList'; 
import Filter from './Components/Filter'; 
import { getMovies, addMovie as addMovieToDb } from './db';
import './App.css';

const App = () => {
    const [movies, setMovies] = useState(getMovies()); 
    const [filteredMovies, setFilteredMovies] = useState(getMovies()); 

    
    const addMovie = (newMovie) => {
        const updatedMovies = addMovieToDb(newMovie);
        setMovies(updatedMovies);
        setFilteredMovies(updatedMovies);
    };

    const filterMovies = ({ title, rating }) => {
        const lowercasedTitle = title.toLowerCase();
        const filtered = movies.filter(movie =>
            (lowercasedTitle ? movie.title.toLowerCase().includes(lowercasedTitle) : true) &&
            (rating ? movie.rating >= parseFloat(rating) : true)
        );
        setFilteredMovies(filtered);
    };

    
    const handleAddMovie = () => {
        const newMovie = {
            title: 'New Movie',
            description: 'Description of new movie',
            posterURL: 'https://example.com/new-movie.jpg',
            rating: 7.5
        };
        addMovie(newMovie);
    };

    return (
        <div className="app">
            <h1>My Movie App</h1>
            <button onClick={handleAddMovie}>Add New Movie</button>
            <Filter onFilter={filterMovies} />
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default App;
