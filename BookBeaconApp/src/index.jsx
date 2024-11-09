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
     name:'The Secret Garden',
     price:1090,
     category:"FairyTales",
     image:book1,
     Author:'France Hodgson',
     desc:'The Secret Garden by Frances Hodgson Burnett is a classic tale of transformation and friendship. The story follows Mary Lennox, a spoiled and lonely young girl who, after being orphaned, is sent to live at her uncles mysterious estate in England. There, she discovers a hidden, neglected garden and begins restoring it, finding purpose and joy in the process. Alongside new friends, she learns about love, resilience, and the healing power of nature. This beautifully written story captures the magic of friendship, the beauty of the natural world, and the potential for personal growth and redemption.'
  },

{
     id:2,
     name:'The Time Machine',
     price:720,
     category:"Adventures",
     image:book2,
     Author:'H.G Wells',
     desc:'The Time Machine by H.G. Wells follows a Victorian scientist known only as "The Time Traveller," who builds a machine capable of journeying through time. Venturing far into the future, he encounters the peaceful Eloi and the sinister Morlocks, uncovering unsettling truths about humanitys evolution. Through his adventures, the novel explores themes of class disparity, survival, and the unpredictable course of human progress.'
  },
  {
    id:3,
    name:'Ghosts of Silent Hills',
    price:780,
    category:"Horror",
    image:book3,
    Author:'Anita Krishan',
    desc:'Ghosts of Silent Hills by Anita Krishan is a chilling collection of supernatural tales set in the eerie, mist-covered hills of India. Each story reveals haunting encounters with restless spirits, exploring themes of fear, revenge, and the mysteries of the afterlife. Rich in atmospheric detail, the book captures the haunting beauty and lurking darkness of remote hill stations, making for a suspenseful and spine-tingling read.'
 },
 {
  id:4,
  name:'Blue Umbrella',
  price:700,
  image:book4,
  category:"Humour",
  Author:'Ruskin Bond',
  desc:'The Blue Umbrella by Ruskin Bond is a charming story set in a small Himalayan village, following a young girl named Binya who acquires a beautiful blue umbrella that becomes the envy of everyone around. This simple yet poignant tale explores themes of kindness, jealousy, and the value of generosity, capturing the innocence of childhood and the beauty of village life.'
},
{
  id:5,
  name:'Magic Of Lost Temple',
  price:250,
  image:book5,
  category:"History Fiction",
  Author:'Sudha Murthy',
  desc:'The Magic of the Lost Temple by Sudha Murthy follows 12-year-old Nooni as she spends her summer in a quaint village and stumbles upon an ancient stepwell with a fascinating history. Through her adventures, she learns about Indian culture, rural life, and the power of curiosity, making this a delightful and educational story filled with warmth and discovery.'
},
{
  id:6,
  name:'The Great Gatsby',
  price:800,
  image:book6,
  category:"Thriller",
  Author:'F. Scott FitzGerald',
  desc:'The Great Gatsby by F. Scott Fitzgerald is a tragic tale of wealth, love, and ambition set in the Jazz Age. It follows the mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan, revealing the disillusionment beneath the glitzy surface of the American Dream. Through Gatsbys rise and fall, the novel explores themes of class, aspiration, and the elusive pursuit of happiness.'
},
{
  id:7,
  name:'The Kalki Trilogy',
  price:1290,
  image:book7,
  category:"Thriller",
  Author:'Kelvin Missal',
  desc:'The Kalki Trilogy by Kevin Missal is an action-packed mythological series that reimagines the story of Kalki, the final avatar of Vishnu, destined to bring balance in a world descending into darkness. Blending ancient Indian mythology with thrilling adventure, the trilogy follows Kalki’s journey from a simple village boy to a powerful hero confronting evil forces, exploring themes of duty, destiny, and the battle between good and evil.'
},
{
  id:8,
  name:'Far From Madding Crowd',
  price:950,
  image:book8,
  category:"Fantasy",
  Author:'Thomas Hardy',
  desc:'Far from the Madding Crowd by Thomas Hardy is a classic novel set in rural England, centered around the independent and spirited Bathsheba Everdene. As she inherits a farm and attracts the attention of three very different suitors, Bathsheba navigates love, heartbreak, and the challenges of life in a close-knit farming community. The novel explores themes of love, resilience, and the impact of personal choices amid the beauty and hardships of pastoral life.'
},
{
  id:9,
  name:'Railway Children',
  price:890,
  image:book9,
  category:"Thriller",
  Author:'E . Nesbit',
  desc:'The Railway Children by E. Nesbit is a heartwarming story about three children—Roberta, Peter, and Phyllis—who are forced to move to a small countryside home after their father is wrongfully imprisoned. As they adapt to their new life, the children form a special bond with the local railway and its workers, leading to a series of adventures and a heartwarming reunion. The novel celebrates themes of courage, family, and the power of kindness.'
},
{
  id:10,
  name:'The Prince',
  price:1000,
  image:book10,
  category:"Fantasy",
  Author:'Nicollas Machiavelli',
  desc:'The Prince by Niccolò Machiavelli is a political treatise offering practical advice on power, leadership, and statecraft. Written in the 16th century, it examines the qualities a ruler should possess to gain and maintain power, advocating for pragmatic and sometimes ruthless strategies. The book is known for its controversial ideas on politics, morality, and the nature of authority, often summed up by the phrase "the ends justify the means."'
},
{
  id:11,
  name:'As You Like It',
  price:990,
  image:book11,
  category:"History Fiction",
  Author:'William Shakespeare'
},
{
  id:12,
  name:'One Day Life Will Change',
  price:690,
  image:book12,
  category:"Science Fiction",
  Author:'Saranya Umakanthan'
}
,
{
id:13,
name:'As a Man Thinketh',
price:700,
image:book13,
category:"Horror",
Author:'James Allen'
},
{
id:14,
name:'The Prophet',
price:1090,
image:book14,
category:"Science Fiction",
Author:'Kahlil Gibran'
},
{
id:15,
name:'Frankenstein',
price:990,
image:book15,
category:"Adventures",
Author:'Mary Shelley'
},
{
id:16,
name:'Lallan Sweets',
price:650,
image:book16,
category:"Humour",
Author:'Shristi C'
},
{
id:17,
name:'Silent Girl',
price:400,
image:book17,
category:"Horror",
Author:'Blake Pierce'
},
{
id:18,
name:'Samsara',
price:790,
image:book18,
category:"History Fiction",
Author:'Saksham Garg'
},
{
id:19,
name:'Sherlock Holmes',
price:590,
image:book19,
category:"Adventures",
Author:'Arthur C Doyle'
},
{
id:20,
name:'Ove',
price:490,
image:book20,
category:"Humour",
Author:'Fredrick Backman'
},
{
id:21,
name:'Time Keepers',
price:780,
image:book21,
category:"Science Fiction",
Author:'S Nambiath'
},
{
id:22,
name:'Cymbeline',
price:590,
image:book22,
category:"FairyTales",
Author:'William Shakespeare'
},
{
id:23,
name:'Pride & Prejudice',
price:980,
image:book23,
category:"Fantasy",
Author:'Jane Austen'
}
,
{
id:24,
name:'Harry Potter',
price:1080,
image:book24,
category:"FairyTales",
Author:'JK Rowling'
}
,
{
id:25,
name:'Eves Diary',
price:800,
image:book25,
category:"FairyTales",
Author:'Mark Twain'
},
{
id:26,
name:'David CopperField',
price:900,
image:book26,
category:"Fantasy",
Author:'Charles Dickens'
},
{
id:27,
name:'The Alchemist',
price:400,
image:book27,
category:"Science Fiction",
Author:'Paulo Coelho'
}
]  