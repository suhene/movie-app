import './cart.css'
import { Avatar } from "./avatar"
import { Order } from './order';
import { useState } from 'react';
import { UseMovieContext } from '../context/movieContext';
// import { UseChosenMovieContext } from '../context/movieContext';

export const Cart = ({ movieData,setInfo }) => {
    const {setChosenMovie, chosenMovie} = UseMovieContext();
   
    return (
        <div className="cart-main">
            <div className="cart">
                <Avatar movieData={movieData} />
                <h3>{movieData.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4 style={{ fontWeight: '500' }}>{movieData.date}</h4>
                    <button onClick={()=>{setInfo("ChoosingInfo"); setChosenMovie(movieData)}}>View More</button>
                </div>
            </div>
        </div>
    )
}