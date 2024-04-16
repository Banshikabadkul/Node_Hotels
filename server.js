// server making food: chef
// api acts as a waiter
// json to present data in structured and organized way
// GET - method to read only data// server shows data to frontend 	
// POST - method to receive data from client and send data to client// server take data from client in various forms


const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const MenuItem = require('./models/MenuItem');


const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.get('/',(req,res)=>{
	res.send("Hello !! Welcome to my hotel ")
	
});

app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);


app.listen(3000,(req,res)=>{
	console.log("Listening to port 3000");
});

// hosting using- git github
// git init
// git status
// git add .
// create .gitignore file so that it cant be tracked in git and ignore untracked files in it. git never add ignore file and never track it.
// git add .gitignore
// to remove file from tracking --- git rm -r --cached node_modules
// save snpashot git commit -m "first version of hotels"
// github create repo and dont include readme file
// git remote add origin https://github.com/Banshikabadkul/Node_Hotels.git
// git branch -M main
// git push -u origin main































// Dear mam,
// My name is Banshika Badkul, and I am a fourth-year student currently in my eighth semester at SVVV. I am writing to seek your assistance regarding the collection of my marksheet for Accenture verification purposes.I am currently in Chennai undertaking an internship, which restricts my ability to visit the college personally to collect the marksheet.
// As per the requirements of the Accenture verification process, I need to provide my marksheet, and due to my current location and commitments, I am unable to collect it in person. Therefore, I would like to authorize my friend, Akhilesh Singh Dhakre, to collect the marksheet on my behalf.  
// Please let me know if there are any specific procedures or documents required for this process.
// Thank you very much for your attention to this request. I look forward to your prompt response.

// Warm regards,

// Banshika Badkul
// 4th Year, 8th Semester Student
// 20100BTCSE07537
