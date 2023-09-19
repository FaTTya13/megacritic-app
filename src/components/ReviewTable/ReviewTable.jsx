import React from 'react';
import { Table, Button } from 'react-bootstrap';

function ReviewTable({ reviews, handleEdit, handleDelete }) {
  // const { reviews, handleEdit, handleDelete } = props;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Rating</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map((review) => (
          <tr key={review.id}>
            <td>{review.title}</td>
            <td>{review.rating}</td>
            <td>
              <Button variant="primary" onClick={() => handleEdit(review)}>
                Edit
              </Button>
              {/* <Button variant="warning" onClick={() => handleEdit(review)}>
                Edit
              </Button> */}
              <Button variant="danger" onClick={() => handleDelete(review.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ReviewTable;