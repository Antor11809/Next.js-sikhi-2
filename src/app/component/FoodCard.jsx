import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCard = ({food}) => {
  const {id, dish_name, image_link} = food;
    return (
  <div className="card bg-base-100 shadow-sm">
  <figure>
 <Image
 width={400}
 height={400}
 src={image_link}
 alt='nai re baba nai re baba '
 
 ></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
       {dish_name}
      <div className="badge badge-secondary">350 Taka</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline border-amber-300 p-3">With Coffe</div>

    <Link href={`menu/${id}`}>
  <div className="badge badge-outline border-amber-300 p-3">Show Details</div>
    </Link>

    </div>
  </div>
</div>
    );
};

export default FoodCard;