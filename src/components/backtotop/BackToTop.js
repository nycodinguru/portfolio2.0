import React from 'react';
import Scrollchor from 'react-scrollchor';


const BackToTop = () => {
    return(
        <div>
            <Scrollchor to="" animate={{offset: 0, duration: 250}}>
            <div className="Back-to-top">
                <h5>back to top</h5>
            </div>
            </Scrollchor>
        </div>
    )
}

export default BackToTop;