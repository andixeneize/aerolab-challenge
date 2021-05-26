import React from 'react';

export const PriceIcon = ({price, coins}) => {
    if (price > coins) {
        return ( 
            <div>
                <span className="productCost badge bg-dark rounded-pill">You need {price - coins} 
                    <img src='/icons/coin.svg' className="ms-1" alt="coin_icon" height="20px" width="20px" />
                </span>
            </div>
        );
    } else {
        return (
            <div>
                <span className="productCost">
                    <img src='/icons/buy-blue.svg' className="ms-1" alt="buy_icon" />
                </span>
            </div>
        );
    }
};

