const app = require('express')();

const port = process.env.PORT ||  8080


app.get('/', (req, res)=>{
    res.json({status:"ok"})
})

app.listen(port, ()=>{
    console.log(`listining at port ${port}`)
})