import React from 'react'
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <h1>THE MAN THE MYTH THE LEGEND</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/steallook.jpg'
                        text='Achieve his ICONIC outfit'
                        label='outfit'
                        path='/articles'
                    />
                    <CardItem 
                        src='images/hotornot.jpg'
                        text='Hot or not?'
                        label='rate'
                        path='/articles'
                    />
                    </ul>
                    <ul className='cards__items'>
                      <CardItem
                        src='images/evo.jpeg'
                        text='The Evolution'
                        label='Mystery'
                        path='/articles'
                      />
                      <CardItem
                        src='images/pop.jpg'
                        text='GET YOUR OWN POP FIGURE'
                        label='Figurines'
                        path='/articles'
                      />
                      <CardItem
                        src='images/eggman.jpg'
                        text='Top 10 Dr Eggman Moments That Made Me Cry'
                        label='sad'
                        path='/articles'
                  />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;