import React from 'react';
import { Pagination } from './pagination';

export const SortBy = ({showing, total}) => {
    // TODO: implement actual pagination
    return ( 
        <div className="row sortBy align-items-center border-bottom pb-4">
            <Pagination total={total} />
            <div className="col-md-auto px-4">
                <span className="">Sort by:</span>
            </div>
            <div className="col-auto mt-2 mt-md-0">
                <button className="btn btn-secondary btn-sort">Lowest price</button>
            </div>
            <div className="col-auto mt-2 mt-md-0">
                <button className="btn btn-secondary btn-sort">Highest price</button>
            </div>
        </div>
    );
};

