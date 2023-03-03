import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import MovieUi from "./MovieUi";

import {
    selectMovie
} from './movieSlice';

export default function MovieList(){
    const movies = useAppSelector(selectMovie);
    return (
        <div>
            {/* Movie List {movies.length} */}
            {movies.map(movie=>
               <MovieUi 
               key={movie.id}
               movie={movie}/>
            )}
        </div>

    )
}