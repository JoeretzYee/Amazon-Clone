import React from "react";
import "./Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    // console.log("This are all the items in the basket", basket);
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        });
    };

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p>
                    <small>$</small>
                    <strong className='product__price'>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarRateIcon className='product__ratingStarIcon' />
                        ))}
                </div>
            </div>
            <img src={image} alt='' />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;
