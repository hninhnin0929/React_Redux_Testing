import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
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
    items: Array<Movie>
}
const initialState: MovieList = {
    items: [
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
        loadAllMovie:(state, action: PayloadAction<Array<Movie>>)=>{
            console.log("Load All Movies ", action);
            state.items = action.payload;
        },
        addMovie:(state, action: PayloadAction<Movie>)=>{
            console.log("Payload ", action);
            state.items.push(action.payload);
        }
    }
});
export const {addMovie} = movieSlice.actions;
export const selectMovie = (state: RootState) =>  state.movies.items;

export default movieSlice.reducer;