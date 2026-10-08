import React from 'react';
import FoodCard from './../component/FoodCard';

const Menupage = async() => {
const res = await fetch ('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
const data = await res.json();
const foods = data.data;
    return (
        <div>
            <p>Menu page</p>

<div className='grid grid-cols-3 gap-4'>
    {foods.map((food) => (
  <FoodCard key={food.id} food={food} />
   ))}
</div>


        </div>
    );
};

export default Menupage;