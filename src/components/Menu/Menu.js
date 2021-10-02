import React from 'react';
import './Menu.css'
const Menu = (props) => {
    const { menu } = props;
    let total = 0;
    for (const food of menu) {
        total = total + food.price;
    }
    return (
        <div className="menu-display">
            <h2 className="order-menu">Order Menu</h2>
            <h4>iteams Ordered: {menu.length} </h4>
            <hr />
            <h4>Total: {total} BDT/-</h4> <br /><hr />
            <h4>Selected Food :</h4>
            <ul>

                {

                    menu.map(pd =>
                        <li className="menu-ui"><div><img src={pd.image} /></div>
                            <div className="menu-text"><div><h4>{pd.name}</h4> <h4>Price:{pd.price}</h4></div></div>
                        </li>)
                }
                <button className="order-confirm">Confirm List</button>
            </ul>

        </div>
    );
};

export default Menu;