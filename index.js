const app = require('express')();
const port = process.env.PORT ||  8080
const {sum} = require('./sum_moudle/utils/sum')

app.get('/', (req, res)=>{
    res.json({status:"ok"})
})

app.get('/y', (req, res)=>{
    const result = sum(1,2);
    res.json(result)
})

app.listen(port, ()=>{
    console.log(`listining at port ${port}`)
})