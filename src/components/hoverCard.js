import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PriceIcon } from './priceIcon';
import { redeemProduct } from '../actions/redeemActions';

export const HoverCard = ({product, coins}) => {
    const [isShown, setIsShown] = useState(false);
    const dispatch = useDispatch()

    const redeem = () => {
        setIsShown(false);
        dispatch(redeemProduct(product));
    };
    
    let card = [];

    if (product) {
        card = (
        
        <div className="card productCard p-12" 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>

            {(!isShown || coins < product.cost) && ( <PriceIcon coins={coins} price={product.cost} /> )}
            
            <img className="card-img-top border-bottom" src={product.img.url} alt="..." />
            <div className="card-body">
                <p className="card-title">{product.category}</p>
                <h5 className="card-text">{product.name}</h5>
            </div>

            {isShown && (coins >= product.cost) && (
                <div className="hoverSection">
                    <div className="hoverBackground" />
                    <div className="hoverCard">
                    <img src='/icons/buy-white.svg' className="productCost ms-1" alt="buy_icon" />
                    <div className="priceTag">
                        {product.cost}
                        <img src='/icons/coin.svg' className="ms-1" alt="coin_icon" height="36px" width="36px" />
                    </div>
                    <button type="button" onClick={redeem} className="btn btn-redeem">Redeem now</button>
                    </div>
                </div>
            )}
        </div>
    )};


    return (card);
};

