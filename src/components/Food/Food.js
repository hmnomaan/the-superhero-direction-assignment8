import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Food.css';

const Food = (props) => {
    // console.log(props.food)
    const { key, image, name, description, origin, price, facebook, twitter, instagram } = props.food;
    const menuIcon = <FontAwesomeIcon icon={faPlus} />
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
    return (
        <div className="food ">
            <div>
                <div><img src={image} alt="" /></div>
                <div>
                    <h2><span className="biriyani-name">{name}</span></h2>
                    <small>Food ID:{key}</small>
                    <p><small className="about-food">Description: {description.slice(0, 100)}</small></p>
                    <p className="origin-name">Origin: <span className="origin">{origin}</span></p>
                    <p className="">Price: <span className="price-rate">{price} </span>BDT/-
                    </p>
                    <button onClick={() => props.handleAddToMenu(props.food)}
                        className="order-btn">{menuIcon} Add to Menu</button>

                    {/* social icon  */}
                    <div >
                        <a className="social-icon" target="_blank" rel="noopener noreferrer" href={props.food.facebook}>{facebookIcon}</a>
                        <a className="social-icon" target="_blank" rel="noopener noreferrer" href={props.food.twitter}>{twitterIcon}</a>
                        <a className="social-icon" target="_blank" rel="noopener noreferrer" href={props.food.instagram}>{instagramIcon}</a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Food;