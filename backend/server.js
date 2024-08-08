const  express = require("express");
const  colors = require("colors");
const  dotenv = require("dotenv").config();
const  morgan = require("morgan");
const rootroute = require("./routes/rootroutes")
const productroute=require("./routes/productroute")
const connectDB = require("./config/db")

const app = express();
const PORT = process.env.PORT || 6000 || 8080;
// const PORT = process.env.PORT 
// const PORT = 8000;
connectDB();
app.use("/", rootroute);
// app.get("/", (req, res) => {
//     res.send("api is working");
// });
app.use('/fashiontrends', productroute)

// app.use('/fashiontrends', rootroute)

app.listen(PORT , () => {
    console.log(`server is running on http://localhost:${PORT}`.bgBlue.white);
});