import React,{ useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import MovieUi from "./MovieUi";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import {Button,Modal} from 'react-bootstrap';
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

const MovieSchma = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long')
        .required(),
    director: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long')
            // .required("Last name is required").min(2),
            .required(),
    year: Yup.number()
            .required()
    //         .min(30)
    //         .max(50, "Value needs to be less than 50"),
    // email: Yup.string().required().email(),
    // created: Yup.date().required(),
  });

function MovieForm(props: any){
    let handleClose = props.handleClose;
    return <div>
        <Formik
            initialValues={{
                title: '',
                director: '',
                year: ''
            }}
            validationSchema={MovieSchma}
            onSubmit={(values, actions) => {
            console.log({ values, actions });
            // alert(JSON.stringify(values, null, 2));
            // actions.setSubmitting(false);
            console.log("Handle Close ", handleClose);
            handleClose();
            }}
        >
            {({ 
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            })=>(
                <Form>
                    {/* <label htmlFor="title">Title</label> */}
                    {/* <Field id="title" name="title" placeholder="Title" /> */}
                    <label>Title</label>
                    <input type="text" className="form-control"  
                        id="title" 
                        name="title" 
                        placeholder="Title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}/>
                    {touched.title && errors.title && <div>{errors.title}</div>}
                    <label>Director</label>
                    <input type="text" className="form-control"  
                        id="director" 
                        name="director" 
                        placeholder="Director" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.director}/>
                    {touched.director && errors.director && <div>{errors.director}</div>}
                    <label>Year</label>
                    <input type="text" className="form-control"  
                        id="year" 
                        name="year" 
                        placeholder="Year" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.year}/>
                    {touched.year && errors.year && <div>{errors.year}</div>}
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                </Form>
            )}

       </Formik>
    </div>
}

export default function NewMovieDialog() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          New Movie
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>New Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Woohoo, you're reading this text in a modal! */}
            <MovieForm handleClose={handleClose}/>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }