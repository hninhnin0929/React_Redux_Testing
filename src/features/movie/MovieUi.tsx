import { Movie } from "./movieSlice";
import styles from './Movie.module.css';

export default function MovieUi(props: any){  
    
    let movie: Movie = props.movie;
    console.log("movie ", movie);
    return(<div className={styles.movie}>
        {/* Name {movie.title} */}
        <div className={styles.movieTitle}>{movie.title}</div>
        <div>{movie.year}</div>
        <div>Director : {movie.director.name}</div>
    </div>)
}