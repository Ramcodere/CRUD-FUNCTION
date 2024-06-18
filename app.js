const express = require('express');
const app = express(); 
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed')
const methodOverride = require('method-override');
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/User');
const session = require('express-session');


let configSesion = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  };




mongoose.connect('mongodb://127.0.0.1:27017/AprilProject')
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log("Error is:", err)})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))



// expess-session middleware -
app.use(session(configSesion));

// seedDB();



app.use(passport.initialize());  
app.use(passport.session());     

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
// passport.use(User.createStrategy()); 
passport.serializeUser(User.serializeUser());  
passport.deserializeUser(User.deserializeUser());   

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));


//Routes
app.use(productRoutes);
app.use(authRoutes);


const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server is connected at port: ${PORT}`);
})