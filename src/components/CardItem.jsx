import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItem(props) {
  return (
    <>
      <li className = "cards__item">
        <Link className = "cards__item__link" /*to = {props.path}*/ href="#popup1">
          <figure className = "cards__item__pic-wrap" data-category = {props.label}>
            <img src = {props.src} alt = "Travel Image" className = "cards__item__img" />
          </figure>
          <div className = "cards__item__info" >
            <h5 className = "cards__item__text" >{props.text}</h5>
          </div>
        </Link>
      </li>
      <div id="popup1" class="overlay">
	<div class="popup">
		<h2>Enter Your Details</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
<div class = "shortForm">
			Name: <input type = "text" /><br/>
                        Class: <input type = "text" />	<br/>	
</div>
</div>
	</div>
</div>

    </>
  )
}

export default CardItem