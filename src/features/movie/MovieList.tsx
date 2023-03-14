import React,{ useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import MovieUi from "./MovieUi";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import NewMovieDialog from "./NewMovieDialog";


import {
    selectMovie
} from './movieSlice';

// function NewMovieDialog() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           New Movie
//         </Button>
  
//         <Modal show={show} onHide={handleClose} animation={false}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  

export default function MovieList(){
    const movies = useAppSelector(selectMovie);
    return (
        <div>
            {/* Movie List {movies.length} */}
            {/* <button type="button" className="btn btn-primary">New Movie</button> */}
            {/* <NewMovieDialog/> */}
            <NewMovieDialog/>
            {movies.map(movie=>
               <MovieUi 
               key={movie.id}
               movie={movie}/>
            )}
        </div>

    )
}