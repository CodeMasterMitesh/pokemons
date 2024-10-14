import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Loader({size}) {
    return (
        <div>
            <div className='spinner'>
                <Spinner animation="border" size={size} />;
            </div>
        </div>
    )
}

export default Loader
