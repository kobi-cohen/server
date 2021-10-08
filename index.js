const cors = require('cors')
const { default: axios } = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()




app.use(express.json())
app.use(cors()) // fix security issues header 
let array = []
// app.use(bodyParser.json())
// app.use(.urlencoded({extends:false}))
// app.use(bodyParser());



app.post('/post',(req,res)=>{
    let value = req.body
    array.push(value)
    console.log(value.name + ' was recoded to the array')
    res.send('succeess !!! ')
})


app.get('/',(req,res)=>{
 res.json(array)
   
})

app.listen(process.env.PORT || 3000,()=>{
    console.log(`the server is running  `)
})
