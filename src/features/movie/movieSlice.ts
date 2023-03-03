import { createSlice } from "@reduxjs/toolkit"
import exp from "constants"
import { RootState } from "../../app/store"

export interface Director{
    name: string,
    phoneNo: string
}
export interface Movie{
    id: string,
    title: string,
    director: Director,
    year: number
}
export interface MovieList{
    movies: Array<Movie>
}
const initialState: MovieList = {
    movies: [
        {
            id: "1",
            title: "Matrix",
            year: 1995,
            director: {
                name: "Jame Cameron",
                phoneNo: "0911991"
            }
        },
        {
            id: "2",
            title: "Interstellar",
            year: 2014,
            director: {
                name: "Christopher Nolan",
                phoneNo: "0911992"
            }
        }
    ]
}
export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {

    }
});
export const selectMovie = (state: RootState) =>  state.movies.movies;

export default movieSlice.reducer;