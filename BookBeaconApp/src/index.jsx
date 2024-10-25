

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
import book10 from '../src/assets/book10.jpg'
import book11 from '../src/assets/book11.jpg'
import book12 from '../src/assets/book12.jpg'
import book13 from '../src/assets/book13.jpg'
import book14 from '../src/assets/book14.jpg'
import book15 from '../src/assets/book15.jpg'
import book16 from '../src/assets/book16.jpg'
import book17 from '../src/assets/book17.jpg'
import book18 from '../src/assets/book18.jpg'
import book19 from '../src/assets/book19.jpg'
import book20 from '../src/assets/book20.jpg'
import book21 from '../src/assets/book21.jpg'
import book22 from '../src/assets/book22.jpg'
import book23 from '../src/assets/book23.jpg'
import book24 from '../src/assets/book24.jpg'
import book25 from '../src/assets/book25.jpg'
import book26 from '../src/assets/book26.jpg'
import book27 from '../src/assets/book27.jpg'



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
   FamousAuthors:
    [
        {id :"JK Rowling" , label:"JK Rowling"},
      {id:"Paulo Coelho" ,label:"Paulo Coelho"},
      {id:"Charles Dickens" , label:"Charles Dickens" },
      {id:"Jane Austen" , label :"Jane Austen"},
      {id:"William Shakespeare",label:"William Shakespeare"},
      {id:"Mark Twain"   ,label:"Mark Twain" },
      {id:"Ruskin Bond"   ,label:"Ruskin Bond" },

    ]
}

export const sortOptions=[
    {id:"Price-LowToHigh" , label:"Price: Low To High"},
    {id:"Price-HighToLow" , label:"Price: High To Low"},
    {id:"title-atoz" , label:"Title: A to Z"},
    {id:"title-ztoa" , label:"Title : Z to A"},
];

export const booklist=[
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
  category:"Humour",
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
  category:"Fantasy",
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
},
{
id:16,
name:'Lallan Sweets',
price:650,
image:book16,
category:"Humour",
Author:'Shristi C',
slug:'book10-auth10'
},
{
id:17,
name:'Silent Girl',
price:400,
image:book17,
category:"Horror",
Author:'Blake Pierce',
slug:'book10-auth10'
},
{
id:18,
name:'Samsara',
price:790,
image:book18,
category:"History Fiction",
Author:'Saksham Garg',
slug:'book10-auth10'
},
{
id:19,
name:'Sherlock Holmes',
price:590,
image:book19,
category:"Adventures",
Author:'Arthur C Doyle',
slug:'book10-auth10'
},
{
id:20,
name:'Ove',
price:490,
image:book20,
category:"Humour",
Author:'Fredrick Backman',
slug:'book10-auth10'
},
{
id:21,
name:'Time Keepers',
price:780,
image:book21,
category:"Science Fiction",
Author:'S Nambiath',
slug:'book10-auth10'
},
{
id:22,
name:'Cymbeline',
price:590,
image:book22,
category:"FairyTales",
Author:'William Shakespeare',
slug:'book10-auth10'
},
{
id:23,
name:'Pride & Prejudice',
price:980,
image:book23,
category:"Fantasy",
Author:'Jane Austen',
slug:'book10-auth10'
}
,
{
id:24,
name:'Harry Potter',
price:1080,
image:book24,
category:"FairyTales",
Author:'JK Rowling',
slug:'book10-auth10'
}
,
{
id:25,
name:'Eves Diary',
price:800,
image:book25,
category:"FairyTales",
Author:'Mark Twain',
slug:'book10-auth10'
},
{
id:26,
name:'David CopperField',
price:900,
image:book26,
category:"Fantasy",
Author:'Charles Dickens',
slug:'book10-auth10'
},
{
id:27,
name:'The Alchemist',
price:400,
image:book27,
category:"Science Fiction",
Author:'Paulo Coelho',
slug:'book10-auth10'
}
]  