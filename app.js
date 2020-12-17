const express = require('express');
const path = require('path');
const app= express();

app.use('/static', express.static(path.join(__dirname, 'views')))
app.get('/', (req, res)=>{
    res.send('Hello world');
});
app.listen(8083, ()=>{
    console.log('Server is running at 8083 ,nb plus')
})

