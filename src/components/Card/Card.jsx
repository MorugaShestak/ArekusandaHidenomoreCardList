import React from 'react';
import "./Card.css"
import img from '../../img/Discord Profile Banner 4.png'

const Card = ({name, amount, description, cost, img, type, rare}) => {

    let open = () => {
        window.open(img)
    }
    return (
        <div id={type} className={"card " + rare}>
            <h1 className={"name"}>{name}</h1>
            {/*<h4>Данных карт в колоде - {amount}</h4>*/}
            {img ? <img onClick={open} title={"Click to open full img!"} className={'img'}  src={img} alt="Image here"/> : ''}
            <h3 className={"description"}>{description}</h3>
            <h3 className={"cost"}>{cost}</h3>
        </div>
    );
};

export default Card;