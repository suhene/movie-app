import { createContext, useContext, useState } from "react";
import movieData from '../json/movies.json'
const MovieContext = createContext();

export const MovieProvider = (props) =>{
    const {children} = props;
    const [getData,setMovieData] = useState(movieData);
    return (<MovieContext.Provider value={{getData,setMovieData}}>
        {children}
    </MovieContext.Provider>)
}

export const UseMovieContext = () => useContext(MovieContext);