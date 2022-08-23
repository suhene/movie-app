import { useState } from "react";
import { Cart } from "../components/cart"
import { Order } from "../components/order";
import { UseMovieContext } from "../context/movieContext"

export const Home = () =>{
    const {getData} = UseMovieContext();
    const [chooseMovie,setMovie] = useState('ChoosingMovie');
    return (
        <div>
            {chooseMovie === "ChoosingMovie" && <><h2 style={{textAlign:'center',padding:'15px '}}>Movie List</h2>
            <div style={{display:'flex',flexWrap:'wrap',maxWidth:'1300px',margin:'auto'}}>
                {getData.map(el => <Cart movieData={el} setInfo = {setMovie}/>)}
            </div></>}
            {chooseMovie === "ChoosingInfo" && <div style={{maxWidth:'1300px',margin:'auto'}}>
                <Order/>
            </div>}
        </div>
    )
}