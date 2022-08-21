import { Cart } from "../components/cart"
import { UseMovieContext } from "../context/movieContext"

export const Home = () =>{
    const {getData} = UseMovieContext();
    return (
        <div>
            <h2 style={{textAlign:'center',padding:'15px '}}>Movie List</h2>
            <div style={{display:'flex',flexWrap:'wrap',maxWidth:'1300px',margin:'auto'}}>
                {getData.map(el => <Cart movieData={el}/>)}
            </div>
        </div>
    )
}