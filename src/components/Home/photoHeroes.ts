import { PhotoHeroModel } from "../PhotoHero";

import japanImg1 from 'public/static/img/japan/1.jpeg'
import japanImg2 from 'public/static/img/japan/2.jpeg'
import japanImg3 from 'public/static/img/japan/3.jpeg'
import japanImg4 from 'public/static/img/japan/4.jpeg'
import japanImg5 from 'public/static/img/japan/5.jpeg'

import norwayImg1 from 'public/static/img/norway/1.jpeg'
import norwayImg2 from 'public/static/img/norway/2.jpeg'
import norwayImg3 from 'public/static/img/norway/3.jpeg'
import norwayImg4 from 'public/static/img/norway/4.jpeg'
import norwayImg5 from 'public/static/img/norway/5.jpeg'

import oregonImg1 from 'public/static/img/bend/1.jpeg'
import oregonImg2 from 'public/static/img/bend/2.jpeg'
import oregonImg3 from 'public/static/img/bend/3.jpeg'
import oregonImg4 from 'public/static/img/bend/4.jpeg'
import oregonImg5 from 'public/static/img/bend/5.jpeg'

export const photoHeroes: PhotoHeroModel[] = [
    {
    title: 'Norway',
    month: 'June',
    year: '2023',
    emoji: '🇳🇴',
    imgSrc: [
      norwayImg1,
      norwayImg2,
      norwayImg3,
      norwayImg4,
      norwayImg5
    ]
  },
  {
    title: 'Japan',
    month: 'February',
    year: '2023',
    emoji: '🇯🇵',
    imgSrc: [
      japanImg1,
      japanImg2,
      japanImg3,
      japanImg4,
      japanImg5
    ]
  },
  {
    title: 'Oregon',
    month: 'July',
    year: '2022',
    emoji: '⛰️',
    imgSrc: [
      oregonImg1,
      oregonImg2,
      oregonImg3,
      oregonImg4,
      oregonImg5
    ]
  }
]
