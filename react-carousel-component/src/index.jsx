import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const carouselImages = [
  'https://images.nintendolife.com/3b0ad1ac0aa8e/ankha-amiibo-card.300x.png',
  'https://animalcrossingworld.com/wp-content/uploads/2015/08/amiibo_card_AnimalCrossing_89_Diana_europe.jpg',
  'https://i.pinimg.com/236x/47/cf/4f/47cf4f6fd7e215ea0402e0f42d8e52d0--animal-cards-animal-crossing-amiibo-cards.jpg',
  'https://www.imore.com/sites/imore.com/files/field/image/2020/05/animal-crossing-amiibo-cards-marshal.jpg',
  'https://www.imore.com/sites/imore.com/files/field/image/2020/05/animal-crossing-amiibo-cards-zucker.jpg'
];

root.render(<Carousel images={carouselImages} />);
