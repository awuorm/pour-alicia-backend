const dotenv = require("dotenv");
dotenv.config();
const server = require("./server");

const port = process.env.PORT;

server.get("*",(req,res) => {
    res.status(200).json("Hello from pour alicia backend!");
})

server.listen(port,() => {
    console.log("Listening on port",port);
})