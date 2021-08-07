import React from 'react'
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className = "cards">
    <h1>Upcoming Events</h1>
    <div className = "cards__container" >
      <div className = "cards__wrapper">
        <ul className = "cards__items">
          <CardItem
          src = "https://i.pinimg.com/originals/f5/10/0f/f5100f72b303d6e5be8357d02a8dbb5e.gif"
          text = "Poetry Contest"
          label = "Register Now"
          /*path = "/login"  */
          />
          <CardItem
              src="https://www.childsown.com/wp-content/uploads/2020/01/how-step-1.gif"
              text='Painting Contest'
              label='Register Now'
              /*path='/login'*/
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="https://lh3.googleusercontent.com/proxy/dKqOEV7YUAomrfqCyZEcmrYiOVe9qG0S-uLZoi76i4wJBxBlZ25l-IekbZkirhUwKFkACPPEkUBbhlusBCTDpczCfhfFKvBHaW_4Ztbvgm1kRwsa9ObCnPk"
              text='Photography Contest'
              label='Register Now'
              /*path='/login'*/
            />
            <CardItem
              src="https://i.pinimg.com/originals/5d/8b/e6/5d8be68175bb83b6b415d0d65171f3ae.gif"
              text='Singing Contest'
              label='Register Now'
              /*path='/login' */
            />
            <CardItem
              src="https://profesor-particular.es/inter-content/uploads/2019/02/debate.png"
              text='Debate Competition'
              label='Register Now'
              /*path='/login' */
            />
        </ul>
      </div>    
    </div>
      
    </div>
  )
}

export default Cards