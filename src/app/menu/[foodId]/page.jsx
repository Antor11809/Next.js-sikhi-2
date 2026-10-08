import React from 'react';

const FoodDetailpage = async({params}) => {
    const {foodId} = await params;
    const res = await fetch (`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
    const data = await res.json();
    const {dish_name, image_link, origin_and_popularity} = data.data
    return (
        <div>
            <h2>Food detail:{foodId}</h2>
            <div>
              <p>{dish_name}</p>
                <h3>{origin_and_popularity}</h3>
            </div>
        </div>
    );
};

export default FoodDetailpage;