import React from 'react';
import "./Card.css"
import img from '../../img/Discord Profile Banner 4.png'

const Card = ({name, description, cost, img}) => {
    return (
        <div className={"card"}>
            <h1 className={"name"}>{name}</h1>
            {img ? <img className={'img'} src={img} alt="Image here"/> : ''}
            <h3 className={"description"}>{description}</h3>
            <h3 className={"cost"}>{cost}</h3>
        </div>
    );
};

export default Card;