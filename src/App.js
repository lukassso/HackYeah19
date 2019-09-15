import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Airplane from '@lot-edge/components/Airplane';
import PromoBox from '@lot-edge/components/PromoBox';
import Panel from '@lot-edge/components/Panel';
import GuidePage from '@lot-edge/components/GuidePage';

function App() {
  const [selectedCategory, select] = useState('Europe')
  const visibleDestinations = destinations.filter(d => d.category === selectedCategory)
  visibleDestinations.reverse()
  return (
    <div className="App">
      <GuidePage
        onCategoryChange={select}
        categories={categories}
        destinations={visibleDestinations} />
      {/* <Panel background='white' color='black'>
        <PromoBox title='#shalonasroda' price='1250PLN' city='Singapur' description='Most peacful city in the world' />
        <h1>LOT edge rock!</h1>
      </Panel>
      <Panel background='blue' color='white'>
        <PromoBox title='#shalonasroda' price='1250PLN' city='Singapur' description='Most peacful city in the world' />
        <h1>LOT edge rock!</h1>
      </Panel> */}
    </div>
  );
}

const categories = ['Europe', 'Asia']

const destinations = [
  {
    category: 'Europe',
    title: 'Amsterdam',
    description: `Amsterdam is a multicultural and multinational place called Venice of the North. The city has gained
    such a nickname due to the many water channels that give it a charming character. In Amsterdam
    there are a lot of monuments, including Oude Kerk, a church from the thirteenth and fourteenth
    centuries with the oldest wooden ceiling. Also, there are many wonderful museums, e.g. the
    Rijksmuseum with collections of masters such as Rembrandt and Vermeer.`,
    color: 'white',
    bg: { r: 150, g: 100, b: 100 },
    image: '/AMS.jpg',
    friends: [
      { avatar: 'http://lorempixel.com/50/50/people/1/', name: 'Maria' },
      { avatar: 'http://lorempixel.com/50/50/people/2/', name: 'Tobias' },
      { avatar: 'http://lorempixel.com/50/50/people/3/', name: 'John' },
    ]
  },
  {
    category: 'Europe',
    title: 'Zielona Góra',
    description: `Flight to Zielona Góra is an ideal opportunity to catch the sun in the bosom of nature. The Lubuskie
    Voivodeship offers unusual facilities. Among them there are the bat parks, where are 30,000
    specimens, and the National Park that is home to 270 species of birds.`,
    color: 'white',
    bg: { r: 150, g: 100, b: 100 },
    image: '/VNO.png',
    friends: [
      { avatar: 'http://lorempixel.com/50/50/people/1/', name: 'Maria' },
      { avatar: 'http://lorempixel.com/50/50/people/2/', name: 'Tobias' },
      { avatar: 'http://lorempixel.com/50/50/people/3/', name: 'John' },
    ]
  },
  {
    category: 'Asia',
    title: 'Bangkok',
    description: `Bangkok belongs to those Asian metropolises that never fall asleep. Around the clock you can see
    speeding tuk-tuks, eat aromatic street food delicacies and enjoy the bustle of this amazing city.
    During your stay, you can go to the Temple of the Wat Phra Kaew and the Grand Palace, the flagship
    attractions of the Thai capital. This is one of our many connections to Asia, Australia and
    New Zealand, prepared with partner airlines with a convenient transfer in Singapore.`,
    color: 'white',
    bg: { r: 150, g: 150, b: 100 },
    image: '/BKK.jpg',
    friends: [
      { avatar: 'http://lorempixel.com/50/50/people/4/', name: 'Maria' },
      { avatar: 'http://lorempixel.com/50/50/people/5/', name: 'Tobias' },
      { avatar: 'http://lorempixel.com/50/50/people/6/', name: 'John' },
      { avatar: 'http://lorempixel.com/50/50/people/3/', name: 'John' },
    ]
  },
  {
    category: 'Asia',
    title: 'Kuala Lumpur',
    description: `A visit to the capital of Malaysia is a feast for all the senses. The city landscape is decorated with
    skyscrapers, minarets and lush parks. The walks are accompanied by amazing aromas of freshly
    prepared dishes and drinks. Kuala Lumpur is characterized by multiculturalism which is perfectly
    reflected in the colorful Chinatown and fragrant Little India. This is one of our many connections to
    Asia, Australia and New Zealand, prepared with partner airlines with a convenient transfer in
    Singapore.`,
    color: 'white',
    bg: { r: 100, g: 150, b: 150 },
    image: '/KUL.jpg',
    friends: [
      { avatar: 'http://lorempixel.com/50/50/people/7/', name: 'Maria' },
      { avatar: 'http://lorempixel.com/50/50/people/8/', name: 'Tobias' },
      { avatar: 'http://lorempixel.com/50/50/people/2/', name: 'Tobias' },
      { avatar: 'http://lorempixel.com/50/50/people/9/', name: 'John' },
      { avatar: 'http://lorempixel.com/50/50/people/1/', name: 'Maria' },
    ]
  },
  {
    category: 'Asia',
    title: 'Singapore',
    description: `Fly to Singapore - one of the most friendly places in the world. It is really popular among travelers
    because it is a gateway to other exotic destinations. However, it is worth considering a longer stay in
    the City of Lion. Exotic districts drawing from diverse cultures make it possible to move to another
    Asian region - India, China or Arab countries - with every meal.`,
    color: 'white',
    bg: { r: 140, g: 120, b: 160 },
    image: '/SIN.jpg',
    friends: [
      { avatar: 'http://lorempixel.com/50/50/people/1/', name: 'Maria' },
      { avatar: 'http://lorempixel.com/50/50/people/2/', name: 'Tobias' },
      { avatar: 'http://lorempixel.com/50/50/people/3/', name: 'John' },
    ]
  }
]

export default App;
