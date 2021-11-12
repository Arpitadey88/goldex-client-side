import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
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

    return (
        <div style={{ backgroundColor: 'whiteSmoke' }} className="m-4 border p-3 ">
            <h2 className="text-center" style={{ color: 'orange' }}>What Our Customer Says </h2>
            <div className="row row-cols-1 row-cols-md-3">
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