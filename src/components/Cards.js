import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Roll from 'react-reveal/Roll';
import Wobble from 'react-reveal/Wobble';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <Roll left>
            <CardItem
              src='images/icu.jpg'
              text='Icu Care'
              
              path='/services'
              
            />
             </Roll>
             <Roll right>
            <CardItem
               src='images/patient.jpg'
              text='Patient Care'

              
              path='/services'
            />
            </Roll>
          </ul>
          <ul className='cards__items'>
          <Roll left>
            <CardItem
              src='images/medicalEquipment.jpg'
              text='Medical Equipement on Rent '
              label='Mystery'
              path='/services'
            />
            </Roll>
          
            <Roll right>
            <CardItem
              src='images/medicalServices.jpg'
              text='Nurshing Services'
              label='Adventure'
              path='/products'
            />
            </Roll>
            </ul>
            <ul className='cards__items'>
            <Roll left>
            <CardItem
              src='images/nurseVisiting.jpg'
              text='Home Visit of Nurse for Nurshing Process'
              label='Adrenaline'
              path='/sign-up'
            />
             </Roll>
             <Roll right>
            <CardItem
              src='images/doctor-home-visit.jpg'
              text='Home Visit of Doctor in Emergency Process'
              label='Adrenaline'
              path='/sign-up'
            />
            </Roll>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
