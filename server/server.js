const express = require("express")
const connectDB = require("./db");
const app = express();


const PORT = 5000
connectDB();

app.use(express.json())
app.use("/api/auth", require("./Auth/route"))
const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
);

app.use("/words", generateWord)
const cors = require('cors');
app.use(cors({
    origin: "*"
}));

function generateWord(req, res) {
    const {readFileSync, promises: fsPromises} = require('fs');
    const path = require("path");
    const content = readFileSync(path.resolve(__dirname, "../server/" + req.query["category"] + ".txt"), "utf-8");
    const arr = content.split(/\r?\n/)
    console.log(arr)
    const random_num = Math.floor(Math.random() * arr.length)
    res.send({"word": arr[random_num]})
    return arr[random_num]
}
//Connecting the Database


process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
  })





  
