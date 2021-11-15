import React from 'react';
import Rating from 'react-rating';
import comma from '../../../../watch-img/comma.png';
import './SingleReview.css';

const SingleReview = (props) => {
    const { star, name, description, img } = props.review;
    return (
        <div className="px-2">
            <div className="p-2 m-3" style={{ width: '300px', height: '220px', backgroundColor: 'ghostWhite' }}>
                <div >
                    <span><img style={{ height: '30px' }} src={comma} alt="" /></span>
                    <span className="ms-3" style={{ color: 'slategrey' }}>{description}</span>
                </div>

                <div className="row mx-3">
                    <div className="col-md-6"> <img style={{ height: '80px', width: '80px' }} src={img} alt="" /></div>
                    <div className="col-md-6 mt-3">
                        <h5 style={{ color: 'crimson' }}>{name}</h5>
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly>
                        </Rating>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;