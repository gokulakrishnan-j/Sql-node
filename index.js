import express from "express"
import { MongoClient } from "mongodb"
import * as dotenv from "dotenv"
import cors from 'cors'

dotenv.config()
var app =express()

var Mongo_Url =process.env.Mongo_Url
var client = new MongoClient(Mongo_Url)
await client.connect()
app.use(cors())
const PORT =process.env.PORT || 4000
app.get("/",async function(request,response){
    var data = await client
    .db("SQL_Bolt")
    .collection("image")
    .find({})
    .toArray()
    response.send(data)
})
app.listen(PORT)

// website to see screenshots
//https://sql-71uc.onrender.com/
