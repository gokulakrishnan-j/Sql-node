import express from "express"
import { MongoClient } from "mongodb"
import * as dotenv from "dotenv"
import cors from 'cors'

dotenv.config()
var app =express()
const PORT =process.env.PORT || 4000
var Mongo_Url ="mongodb+srv://gokulakrishnan:Gokul4580@cluster0.lsiocek.mongodb.net"
var client = new MongoClient(Mongo_Url)
await client.connect()
app.use(cors())

app.get("/",async function(request,response){
    var data = await client
    .db("SQL_Bolt")
    .collection("image")
    .find({})
    .toArray()
    response.send(data)
})
app.listen(PORT)
//https://sql-71uc.onrender.com/
