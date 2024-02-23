const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const mongoose = require("mongoose");
const router = require("./src/routes/router");

app.get("/", (req, res) => {
  res.send("File Storage Service is running");
});


app.use(router);
app.use((error, req, res, next)=>{
   res.status(500).json({status_code: 500, message: "Internal server error"});
})


// mongoose connection
main().catch((err) => console.log(err));

async function main() {
  // connection string
  const uri = process.env.DB_URI;
  await mongoose.connect(uri);
  console.log("mongodb connected");
}

app.listen(port, () => {
  console.log(`File storage app listening on port ${port}`);
});
