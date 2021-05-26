import React from 'react';
import { HoverCard } from './hoverCard';

export const ProductList = ({products, coins}) => {
  let cards = [];

  if (products) {
  cards = products.map(product => (
    <div className="col-auto g-4" key={product._id}>     
      <HoverCard product={product} coins={coins} />
    </div>
  ));
  }

  return (
    <div className="row justify-content-md-between justify-content-center pt-4">
      {cards}
    </div>
  )
}

