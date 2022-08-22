import { UseMovieContext } from "../context/movieContext"

export const Order = () =>{
    const {chosenMovie} = UseMovieContext();
    console.log(chosenMovie);
    return (
        <div>
            {/* <p>{chosenMovie}</p> */}
        </div>
    )
}