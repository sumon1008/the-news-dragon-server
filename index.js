const express= require('express');
const app=express();
const cors=require('cors')
const category=require('./data/category.json');
const port=process.env.PORT || 5000;
app.get('/',(req,res)=>{
   res.send('the dragon')
})
app.use(cors())
app.get('/category',(req,res)=>{
    res.send(category);
})
app.listen(port,()=>
{
    console.log(`the dragon is comming ${port}`);
})