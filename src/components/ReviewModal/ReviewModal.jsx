import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function ReviewModal({ show, handleClose, handleSubmit, reviewToEdit }) {
   // Define the state for the form fields
   const [title, setTitle] = useState('');
   const [rating, setRating] = useState(1);
   const [comment, setComment] = useState('');
 
   // Update the form fields when the reviewToEdit prop changes
   useEffect(() => {
     if (reviewToEdit) {
       setTitle(reviewToEdit.title);
       setRating(reviewToEdit.rating);
       setComment(reviewToEdit.comment);
     } else {
       setTitle('');
       setRating(1);
       setComment('');
     }
   }, [reviewToEdit]);
 
   // Define the handler for submitting the form
   const handleFormSubmit = (event) => {
     event.preventDefault();
     const review = {
       title: title,
       rating: rating,
       comment: comment,
     };
     if (reviewToEdit) {
       review.id = reviewToEdit.id;
     }
     handleSubmit(review);
     setTitle('');
     setRating(1);
     setComment('');
   };

  // Render the modal
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{reviewToEdit ? 'Edit' : 'Create'} Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            {/* <Form.Control
              type="number"
              min="1"
              max="5"
              placeholder='rate from 1 to 5'
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            /> */}
             <Form.Control as="select" value={rating} onChange={(event) => setRating(parseInt(event.target.value))}>
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className='mb-2'>
            <Form.Label>Comments</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </Form.Group>
          <Button className='me-2' variant="primary" type="submit">
            {reviewToEdit ? 'Save Changes' : 'Create Review'}
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ReviewModal;