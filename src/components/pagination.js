import React from 'react';

export const Pagination = ({showing, total}) => {
    // TODO: implement actual pagination
    return ( 
        <div className="col-md-auto px-4 border-end">
            {total} of {total} products
        </div>
    );
};

