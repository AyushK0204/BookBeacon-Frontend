

import React from 'react'
import book1 from '../src/assets/book1.jpg'
import book2 from '../src/assets/book2.jpg'
import book3 from '../src/assets/book3.jpg'
import book4 from '../src/assets/book4.jpg'
import book5 from '../src/assets/book5.jpg'
import book6 from '../src/assets/book6.jpg'
import book7 from '../src/assets/book7.jpg'
import book8 from '../src/assets/book8.jpg'
import book9 from '../src/assets/book9.jpg'
import book10 from '../src/assets/book1.jpg'
import book11 from '../src/assets/book1.jpg'
import book12 from '../src/assets/book1.jpg'
import book13 from '../src/assets/book1.jpg'
import book14 from '../src/assets/book1.jpg'
import book15 from '../src/assets/book1.jpg'







export  const filterOptions={
    category:[
      {id :"Humour" , label:"Humour"},
      {id:"FairyTales" ,label:"FairyTales"},
      {id:"Science Fiction" , label:"Science Fiction" },
      {id:"History Fiction" , label :"History Fiction"},
      {id:"Thriller" , label :"Thriller"},
      {id:"Horror",label:"Horror"},
      {id:"Adventures"   ,label:"Adventures" },
      {id:"Fantasy" , label:"Fantasy"},

    ],
    brand:
    [
        {id :"Humour" , label:"Humour"},
      {id:"FairyTales" ,label:"FairyTales"},
      {id:"Science Fiction" , label:"Science Fiction" },
      {id:"History Fiction" , label :"History Fiction"},
      {id:"Thriller" , label :"Thriller"},
      {id:"Horror",label:"Horror"},
      {id:"Adventures"   ,label:"Adventures" },
      {id:"Fantasy" , label:"Fantasy"},

    ]
}

export const sortOptions=[
    {id:"Price-LowToHigh" , label:"Price: Low To High"},
    {id:"Price-HighToLow" , label:"Price: High To Low"},
    {id:"title-atoz" , label:"Title: A to Z"},
    {id:"title-ztoa" , label:"Title : Z to A"},
];

export const books=[
  {
     id:1,
     name:'The secret Garden',
     price:1090,
     category:"FairyTales",
     image:book1,
     Author:'France Hodgson',
     slug:'book1-auth1'
  },

{
     id:2,
     name:'The Time Machine',
     price:720,
     category:"Adventures",
     image:book2,
     Author:'H.G Wells',
     slug:'book2-auth2'
  },
  {
    id:3,
    name:'Ghosts of Silent Hills',
    price:780,
    category:"Horror",
    image:book3,
    Author:'Anita Krishan',
    slug:'book3-auth3'
 },
 {
  id:4,
  name:'Blue Umbrella',
  price:700,
  image:book4,
  category:"Fantasy",
  Author:'Ruskin Bond',
  slug:'book4-auth4'
},
{
  id:5,
  name:'Magic Of Lost Temple',
  price:250,
  image:book5,
  category:"History Fiction",
  Author:'Sudha Murthy',
  slug:'book5-auth5'
},
{
  id:6,
  name:'The Great Gatsby',
  price:800,
  image:book6,
  category:"Thriller",
  Author:'F. Scott FitzGerald',
  slug:'book6-auth6'
},
{
  id:7,
  name:'The Kalki Trilogy',
  price:1290,
  image:book7,
  category:"Thriller",
  Author:'Kelvin Missal',
  slug:'book7-auth7'
},
{
  id:8,
  name:'Far From Madding Crowd',
  price:950,
  image:book8,
  category:"Horror",
  Author:'Thomas Hardy',
  slug:'book8-auth8'
},
{
  id:9,
  name:'    Railway Children',
  price:890,
  image:book9,
  category:"Thriller",
  Author:'E . Nesbit',
  slug:'book9-auth9'
},
{
  id:10,
  name:'The Prince',
  price:1000,
  image:book10,
  category:"Fantasy",
  Author:'Nicollas Machiavelli',
  slug:'book10-auth10'
},
{
  id:11,
  name:'As You Like It',
  price:990,
  image:book11,
  category:"History Fiction",
  Author:'William Shakespeare',
  slug:'book10-auth10'
},
{
  id:12,
  name:'One Day Life Will Change',
  price:690,
  image:book12,
  category:"Science Fiction",
  Author:'Saranya Umakanthan',
  slug:'book10-auth10'
}
,
{
id:13,
name:'As a Man Thinketh',
price:700,
image:book13,
category:"Horror",
Author:'James Allen',
slug:'book10-auth10'
},
{
id:14,
name:'The Prophet',
price:1090,
image:book14,
category:"Science Fiction",
Author:'Kahlil Gibran',
slug:'book10-auth10'
},
{
id:15,
name:'Frankenstein',
price:990,
image:book15,
category:"Adventures",
Author:'Mary Shelley',
slug:'book10-auth10'
}
]  