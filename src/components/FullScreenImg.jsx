import React from 'react';

const FullScreenImg = ({img, setCurrentImage}) => {
    return (
        <div className='fullScreenDiv' onClick={() => setCurrentImage(undefined)}>
            <div className='close'>x</div>
            <img src={img} alt='full' className='fullScreenImg' />
        </div>
    );
};

export default FullScreenImg;
