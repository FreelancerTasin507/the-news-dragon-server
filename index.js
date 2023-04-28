const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const catagories = require('./data/catagories.json')

app.use(cors())
app.get('/',(req,res) =>{
    res.send('Dragon is runnig')
});
app.get('/catagories' ,(req, res) =>{
    res.send(catagories)
})
app.listen(port,()=>{
    console.log(`Dragon API in running port ${port}`);
})