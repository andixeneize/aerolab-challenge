import React from 'react';
import Image from 'react-bootstrap/Image';

export const Category = ({name, coins}) => {
    return ( 
        <div className="row align-items-end category">
            <div className="col">
                <h1 className="categoryTitle mb-4">Electronics</h1>
            </div>
            <Image src={process.env.PUBLIC_URL + '/header-x2.png'} alt="Header" className="categoryImage" fluid  />
        </div>
    );
};

