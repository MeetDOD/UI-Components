import React from 'react'
import './cards.css'

const Card = () => {
  return (
    <div>
      <div class="container my-5">
    <div class="cards mt-5">
      <div class="card card-one">
        <h2 class="card-title">Card One</h2>
        <p class="date">May 25, 2021</p>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ut veniam?</p>
      </div>
      
      <div class="card card-two">
        <h2 class="card-title">Card Two</h2>
        <p class="date">May 26, 2021</p>
        <p class="description">If you read carefully, you'll find that this is not your typical lorem ipsum.</p>
      </div>
      
      <div class="card card-three">
        <h2 class="card-title">Card Three</h2>
        <p class="date">May 27, 2021</p>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ut veniam?</p>
      </div>
      
      <div class="card card-four">
        <h2 class="card-title">Card Four</h2>
        <p class="date">May 28, 2021</p>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ut veniam?</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Card
