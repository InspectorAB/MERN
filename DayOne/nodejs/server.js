var express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

var app = express()
app.use(bodyparser.json())

const userdata = []
var uid = 1
app.use(cors())
app.get("/loadusers",(req,res) =>{
res.send(userdata)
})

app.get("/loaduser/:id",(req,res) =>{
    const uid = parseInt(req.params.id)
    var mtd;
    userdata.forEach(function(todo){
        if(uid == todo.id){
            mtd = todo
        }
    })
    if(mtd){
        res.json(mtd)
    }
    else{
        res.send("Not Dounf")
    }
})


app.post("/adduser",(req,res) =>{
    var data = req.body;
    console.log(data); 
    data.id = uid++
    userdata.push(data)
    res.send('user added');
})
app.use(express.static('public'))


app.listen(4000, () => {
    console.log('server is ready....')
})