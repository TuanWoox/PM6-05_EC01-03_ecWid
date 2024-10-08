const express = require('express');
const app = express();
const PORT = 5030;
const path = require('path');
const ejsMate = require('ejs-mate')

app.set('view engine', 'ejs')
//This one right here is app.engine used for layouts, partials, block
app.engine('ejs', ejsMate);
//This one is for req.render 
app.set('views', path.join(__dirname,'views'));

app.get('/',(req,res) => {
    res.render('website/index')
})
app.use(express.static(path.join(__dirname,'public')));


app.listen(PORT,() => {
    console.log('Serving on POST 5030');
})