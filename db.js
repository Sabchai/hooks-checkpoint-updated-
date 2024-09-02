

export const initialMovies = [
    {
        id: 1,
        title: "Project Silence",
        description: "Una emocionante película de acción y misterio.",
        posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdPzUGfeBXozoO-t7Ys0SN8zcaPouJoyfcA&s",
        rating: 10
    },
    {
        id: 2,
        title: "The Medallion",
        description: "Una película de aventuras con mucha acción.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Medallionposter.jpg",
        rating: 10
    },
    {
        id: 3,
        title: "Catwoman",
        description: "Una película de superhéroes basada en el personaje de DC Comics.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Catwoman_poster.jpg/220px-Catwoman_poster.jpg",
        rating: 8
    },
    {
        id: 4,
        title: "Kidnap",
        description: "Un thriller sobre una madre que busca a su hijo secuestrado.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BMTcyNDgyODEzOV5BMl5BanBnXkFtZTgwMTI4MTA2MjI@._V1_.jpg",
        rating: 9.5
    },
    {
        id: 5,
        title: "The Call",
        description: "Un thriller psicológico que involucra una llamada de emergencia.",
        posterURL: "https://m.media-amazon.com/images/I/71wFWUNbfDL._AC_UF894,1000_QL80_.jpg",
        rating: 8.5
    },
    {
        id: 6,
        title: "Face/Off",
        description: "Un thriller de acción con intercambios de identidad.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BYzFjNzIxMmEtMzY5NS00YTgzLTkwYWEtN2FjMmY0NmNkZWY3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        rating: 10
    },
    {
        id: 7,
        title: "The Blind Side",
        description: "Una inspiradora historia basada en hechos reales.",
        posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBvn4TZ2ReUR-4YKFztFyfgNl0aW61JSWnQ&s",
        rating: 9
    }
];

// Función para obtener las películas
export const getMovies = () => [...initialMovies];

// Función para agregar una película
export const addMovie = (newMovie) => {
    initialMovies.push(newMovie);
    return [...initialMovies];
};
