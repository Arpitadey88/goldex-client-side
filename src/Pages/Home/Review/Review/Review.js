import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';
// import contact from '../../../../watch-img/contact.jpg';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://powerful-caverns-46584.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])


    return (
        <div style={{ backgroundColor: 'whiteSmoke' }} className="review-bg my-5 py-5">
            {/* <h2 className="text-center pb-4" style={{ color: 'orange' }}>What Our Customer Says </h2> */}
            <h1 className='text-center' style={{ color: '#1E3163' }}> What Our <span style={{ color: 'orange' }} >Customer</span> Says</h1>
            <div className="row row-cols-1 row-cols-md-4 g-3 d-flex justify-content-center py-4">
                {
                    reviews.map(review => <SingleReview
                        key={review.id}
                        review={review}>
                    </SingleReview>)
                }
            </div>
        </div>
    );
};

export default Review;




 // const reviews = [

    //     {
    //         id: 1,
    //         img: 'https://i.ibb.co/BKwB9nV/user1.png',
    //         name: 'Frank Klin',
    //         description: 'I loved my piece, it looks great, it delivered fast with no trouble, looking forward to my next transaction with you.',

    //     },
    //     {
    //         id: 2,
    //         img: 'https://i.ibb.co/1vyBGDr/user2.png',
    //         name: 'Linda Anand',
    //         description: 'The watch arrived incredibly fast, the website is easy to use, good.prices, excellent variety... what is not to love?',

    //     },
    //     {
    //         id: 3,
    //         img: 'https://i.ibb.co/pKwgkR7/user3.png',
    //         name: 'David Gueta',
    //         description: 'Great sales, no problem with orders and delivery is on time. Customer support great people👍'

    //     },
    // ]