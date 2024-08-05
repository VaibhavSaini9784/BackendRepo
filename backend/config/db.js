const mongoose = require("mongoose");

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        // res.send({
        //     message: `database connected`,
        // })
        console.log(`database is connected`.bgGreen.white);
    }
    catch (error) {
        // res.send({
        //     message: `Internal server error ${error}`,
        //     success: false,
        //     description: `database not connected`,
        // })
        console.log(` error ${error}`.bgRed.white);
    }
}
module.exports = connectDB;