const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;


app.get("/",(req,res,next) => {
    res.send("Welcome devops from Ajay Varshaan")
})


const server = app.listen(PORT,()=>{
    console.log(`Server is running sucessfully on te port ${PORT}`);
    
})


module.exports = {app, server}