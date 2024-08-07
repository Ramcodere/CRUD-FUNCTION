const mongoose = require('mongoose'); 
const Product = require('./models/Product');

const products = [
    {
        name:"iphone 15pro ",
        img:"https://images.unsplash.com/photo-1695048132832-b41495f12eb4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
        price:"15000",
        desc:"I will purchase this phone in next year"
    },
    {
        name:"Mac Pro",
        img:"https://images.unsplash.com/photo-1650265424401-9d34eecae180?q=80&w=1049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:"50000",
        desc:"I will purchase this phone in next year"
    },
    {
        name:"apple",
        img:"https://images.unsplash.com/photo-1630573998423-046dd1afcbdf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:"150000",
        desc:"I will purchase this phone in next year"
    }
]

async function seedDB(){
    await Product.insertMany(products);  
    console.log("DB seeded");
}

module.exports = seedDB;