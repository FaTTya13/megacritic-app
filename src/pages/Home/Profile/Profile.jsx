import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ReviewModal from '../../../components/ReviewModal/ReviewModal';
import ReviewTable from '../../../components/ReviewTable/ReviewTable';


function Profile() {
    // Define the state for your reviews and user information
    const [reviews, setReviews] = useState([]);
    // const [userInfo, setUserInfo] = useState({});

    // Define the state for the modal
    const [showModal, setShowModal] = useState(false);
    const [reviewToEdit, setReviewToEdit] = useState(null);

    // Define the handler for creating a review
    const handleCreate = (review) => {
        review.id = Date.now().toString();
        setReviews([...reviews, review]);
        setShowModal(false);
    };

    // Define the handler for editing a review
    const handleEdit = (review) => {
        const index = reviews.findIndex((r) => r.id === review.id);
        if (index >= 0) {
            const updatedReviews = [...reviews];
            updatedReviews[index] = review;
            setReviews(updatedReviews);
            setShowModal(false);
        }
    };

    const handleDelete = (id) => {
        setReviews(reviews.filter((review) => review.id !== id));
    };

    const handleOpen = (review) => {
        setReviewToEdit(review);
        setShowModal(true);
    };

    // Define the handler for fetching the user information and reviews

    // const fetchData = async () => {
    //     try {
    //         const userResponse = await fetch('/api/user');
    //         const user = await userResponse.json();
    //         setUserInfo(user);

    //         const reviewsResponse = await fetch('/api/reviews');
    //         const reviews = await reviewsResponse.json();
    //         setReviews(reviews);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // Fetch the user information and reviews on page load
    // useEffect(() => {
    //     fetchData();
    // }, []);

    // Render the profile page
    return (
        <div>
            <h1>Profile Page</h1>
            <Button onClick={() => setShowModal(true)}>Create Review</Button>
            <ReviewTable
                reviews={reviews}
                handleDelete={handleDelete}
                handleEdit={handleOpen}
            />
            <ReviewModal
                show={showModal}
                handleClose={() => {
                    setShowModal(false);
                    setReviewToEdit(null);
                }}
                handleSubmit={reviewToEdit ? handleEdit : handleCreate}
                reviewToEdit={reviewToEdit}
            />
        </div>
    );
}

export default Profile;