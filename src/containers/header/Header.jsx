import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className='gpt5__header section__padding' id='home'>
      <div className='gpt5__header-content'>
          <h1 className='gradient__text'>
            Let's Build Something Amazing With GPT-3 OpenAI
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Laborum necessitatibus, ea quam voluptas, repellat illum 
            sint iste enim temporibus accusamus minima exercitationem. 
            Ipsam molestias minima quam eum, aliquam ut commodi.
          </p>
          <div className='gpt5__header-content__input'>
            <input type="email" placeholder='Your Email Address' />
            <button type='button'>Get Started</button>
          </div>
          <div className='gpt5__header-content__people'>
            <img src={people} alt='people'/>
            <p>
              1,700 people requested access in the last 24 hours
            </p>
          </div>
      </div>
      <div className="gpt5__header-image">
          <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header;
