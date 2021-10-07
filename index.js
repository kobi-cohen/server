const cors = require('cors')
const { default: axios } = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()




app.use(express.json())
app.use(cors()) // fix security issues header 
let val = null
// app.use(bodyParser.json())
// app.use(.urlencoded({extends:false}))
// app.use(bodyParser());



app.post('/post',(req,res)=>{
    val = req.body
    console.log(val)
    res.send('succeess !!! ')
})


app.get('/',(req,res)=>{
 res.json(val)
   
})

app.listen(process.env.PORT || 8080,()=>{
    console.log(`the server is running  `)
})
