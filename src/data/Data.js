import burger1 from '../components/dataImages/burger-1.avif'
import burger2 from '../components/dataImages/burger-2.avif'
import burger3 from '../components/dataImages/burger-3.avif'
import burger4 from '../components/dataImages/burger-4.avif'
import piza1 from '../components/dataImages/piza-1.avif'
import piza2 from '../components/dataImages/piza-2.avif'
import piza3 from '../components/dataImages/piza-3.avif'
import piza4 from '../components/dataImages/piza-4.avif'
import salad1 from '../components/dataImages/salad-1.avif'
import salad2 from '../components/dataImages/salad-2.avif'
import salad3 from '../components/dataImages/salad-3.avif'
import salad4 from '../components/dataImages/salad-4.avif'
import chicken1 from '../components/dataImages/chicken-1.avif'
import chicken2 from '../components/dataImages/chicken-2.avif'
import chicken3 from '../components/dataImages/chicken-3.avif'
import chicken4 from '../components/dataImages/chicken-4.avif'

import bestOverall from '../components/categoryImages/bestOverall.png'
import fastFood from '../components/categoryImages/fastFood.png'
import indian from '../components/categoryImages/indian.png'
import latestDeal from '../components/categoryImages/latestDeals.png'
import pizza from '../components/categoryImages/pizza.png'
import resRew from '../components/categoryImages/resRew.png'
import sFree from '../components/categoryImages/sFree.png'
import wings from '../components/categoryImages/wings.png'



export const data=[
    //burger
    {
        id:1,
        name:'Double Cheeseburger',
        category:'burger',
        image:burger1,
        price:'Rs.500/.',
    },
    {
        id:2,
        name:'Bacon Cheeseburger',
        category:'burger',
        image:burger2,
        price:'Rs.300/.',
    },
    {
        id:3,
        name:'Mushroom Burger',
        category:'burger',
        image:burger3,
        price:'Rs.100/.',
    },
    {
        id:4,
        name:'Loaded Burger',
        category:'burger',
        image:burger4,
        price:'Rs.600/.'
    },

    //pizza
    {
        id:5,
        name:'Feta & Spinnach',
        category:'pizza',
        image:piza1,
        price:'Rs.500/.'
    },
    {
        id:6,
        name:'Supreme Pizza',
        category:'pizza',
        image:piza2,
        price:'Rs.300/.'
    },
    {
        id:7,
        name:'Meat Lovers',
        category:'pizza',
        image:piza3,
        price:'Rs.100/.'
    },
    {
        id:8,
        name:'Cheese Pizza',
        category:'pizza',
        image:piza4,
        price:'Rs.600/.'
    },
  
    //salad
    {
        id:9,
        name:'Kale Salad',
        category:'salad',
        image:salad1,
        price:'Rs.100/.'
    },
    {
        id:10,
        name:'Ceasar Salad',
        category:'salad',
        image:salad2,
        price:'Rs.600/.'
    },
    {
        id:11,
        name:'Loaded Salad',
        category:'salad',
        image:salad3,
        price:'Rs.500/.'
    },
    {
        id:12,
        name:'Fruit Salad',
        category:'salad',
        image:salad4,
        price:'Rs.300/.'
    },

    //chicken
    {
        id:13,
        name:'Wings',
        category:'chicken',
        image:chicken1,
        price:'Rs.500/.'
    },
    {
        id:14,
        name:'Baked Chicken',
        category:'chicken',
        image:chicken2,
        price:'Rs.300/.'
    },
    {
        id:15,
        name:'Chicken Tinders',
        category:'chicken',
        image:chicken3,
        price:'Rs.600/.'
    },
    {
        id:13,
        name:'Chicken Kabab',
        category:'chicken',
        image:chicken4,
        price:'Rs.100/.'
    },
];

export const categories=[
    {
        id:1,
        name:'Fast Food',
        image:fastFood,

    },
    {
        id:2,
        name:'Pizza',
        image:pizza,
    },
    {
        id:3,
        name:'Wings',
        image:wings,
    },
    {
        id:4,
        name:'Indian',
        image:indian,
    },
    {
        id:5,
        name:'Latest Deals',
        image:latestDeal,
    },
    {
        id:6,
        name:'Best Overall',
        image:bestOverall,
    },
    {
        id:7,
        name:'Resturant Reward',
        image:resRew,
    },
    {
        id:8,
        name:'Shipped Free',
        image:sFree,
    }
]
