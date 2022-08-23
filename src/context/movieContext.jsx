import { createContext, useContext, useState } from "react";
import movieData from '../json/movies.json'
const MovieContext = createContext();
export const MovieProvider = (props) => {
    const { children } = props;
    const [getData, setMovieData] = useState(movieData);
    const [chosenMovie, setChosenMovie] = useState(null);
    return (
        <MovieContext.Provider value={{ getData, setMovieData, chosenMovie, setChosenMovie}}>
            {children}
        </MovieContext.Provider>
    )
}

export const UseMovieContext = () => useContext(MovieContext);
// export const UseChosenMovieContext = () => useContext(ChosenContext);