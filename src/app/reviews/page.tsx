"use client";
import { useState } from 'react';
import './reviews.css';

interface Review {
  name: string;
  location: string;
  review: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: 'Samantha Clark',
      location: 'Karachi, Pakistan',
      review: 'I’ve been using 𝙔𝙤𝙪𝙧 𝙈𝙚𝙘𝙝𝙖𝙣𝙞𝙘𝙨 for all my car repairs. Their team is super efficient and knows exactly what they’re doing. I’ve never been let down!',
    },
    {
      name: 'Ali Raza',
      location: 'Karachi, Pakistan',
      review: 'The service here is fantastic. I got my car\'s engine repaired and they provided excellent customer support throughout the process!',
    },
    {
      name: 'Mohammad Aslam',
      location: 'Karachi, Pakistan',
      review: 'Highly recommend 𝙔𝙤𝙪𝙧 𝙈𝙚𝙘𝙝𝙖𝙣𝙞𝙘𝙨 for their fast, affordable, and dependable car repair services. They never disappoint!',
    },
  ]);

  const [newReview, setNewReview] = useState<Review>({
    name: '',
    location: '',
    review: '',
  });

  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', location: '', review: '' });
    setSuccessMessage('Review Submitted Successfully!');
    setTimeout(() => setSuccessMessage(''), 3000); 
  };

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h2 className="reviews-header ">What Our Customers Say</h2>

        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-star">
                {/* Example of a star icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="star-icon" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.97 3.72a3 3 0 011.075-.947c.207-.136.441-.256.682-.368 1.11-.453 2.316-.458 3.418-.01l.54.306 1.048-.182a1 1 0 011.064.866l.216 2.186a1 1 0 01-.27.853l-2.61 2.539a1 1 0 01-.827.249l-1.13-.494a1 1 0 01-.706-.99l.132-1.093a1 1 0 01.226-.701l1.024-.974a3.014 3.014 0 01-.149-.038l-.198-.123a3.033 3.033 0 01-2.23-.532l-2.702 2.33a1 1 0 01-.428.14l-2.245-1.163a3.042 3.042 0 01-.788-.746 3.002 3.002 0 01-.574-.99l.345-2.876a1 1 0 01.553-.87z" clipRule="evenodd"/>
                </svg>
              </div>
              <p className="review-text">{review.review}</p>
              <div className="review-author">{review.name}</div>
              <div className="review-location">{review.location}</div>
            </div>
          ))}
        </div>

        <div className="review-form-container">
          <h3 className="review-form-header">Share Your Experience</h3>
          <form onSubmit={handleSubmit} className="review-form">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newReview.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={newReview.location}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="review">Your Review</label>
              <textarea
                id="review"
                name="review"
                value={newReview.review}
                onChange={handleChange}
                className="form-input"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="form-submit">
              <button type="submit" className="submit-btn">Submit Review</button>
            </div>
          </form>

          {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
