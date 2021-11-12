import React from 'react';
import comma from '../../../../watch-img/comma.png';

const SingleReview = (props) => {
    const { name, description, img } = props.review;
    return (
        <div className="px-2">
            <div className="p-2 m-3" style={{ width: '300px', height: '220px', backgroundColor: 'ghostWhite' }}>
                <div >
                    <span><img style={{ height: '30px' }} src={comma} alt="" /></span>
                    <span className="ms-3" style={{ color: 'slategrey' }}>{description}</span>
                </div>

                <div className="row mx-3">
                    <div className="col-md-6"> <img style={{ height: '80px', width: '80px' }} src={img} alt="" /></div>
                    <div className="col-md-6 mt-3"><h5 style={{ color: 'crimson' }}>{name}</h5></div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;