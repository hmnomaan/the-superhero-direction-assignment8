import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Menu from '../Menu/Menu';
import './Shop.css'
const Shop = () => {
    const [foods, setFoods] = useState([]);
    const [menu, setmenu] = useState([]);
    useEffect(() => {
        fetch('./food.JSON')
            .then(res => res.json())

            .then(data => setFoods(data));

    }, [])

    const handleAddToMenu = (food) => {
        const newMenu = [...menu, food];
        setmenu(newMenu);
    }
    return (
        <div>
            <h3 className="biriyani-amount">Available Biriyani Types: {foods.length} </h3>
            <div className='shop-container'>
                <div className=" product-container">
                    {

                        foods.map(food => <Food
                            key={food.key}
                            food={food}
                            handleAddToMenu={handleAddToMenu}
                        >

                        </Food>)
                    }
                </div>
                <div className="cart-container">

                    <Menu menu={menu}></Menu>

                </div>
            </div>
        </div >
    );
};

export default Shop;