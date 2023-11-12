const express = require("express");
const db = require("./db");
const app = express();

app.get('/',(req,res)=>{
    res.render('')
})

app.listen(3000, () => {
  console.log("connected to the server on port 3000");
});
