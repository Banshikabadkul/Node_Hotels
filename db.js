const mongoose = require("mongoose");
//  define the mongodb url for connection
const mongoUrl = "mongodb://localhost:27017/hotels";

// establish connection and set up
mongoose.connect(mongoUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
// define event listeners 

db.on('connected',()=>{
  console.log("connected to db server!!");
});

db.on("disconnected", () => {
	console.log("Mongodb Disconnected!!");
});

db.on("error", (err) => {
	console.log("Mongodb connection error!!",err);
});

module.exports = db