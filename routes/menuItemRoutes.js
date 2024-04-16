const express = require("express");
const router = express.Router();

const MenuItem = require("./../models/MenuItem");

router.get('/', async(req,res)=>{
	try{
		const response = await MenuItem.find();
		console.log("Data fetched");
		res.status(200).json(response);
	}
	catch(err){
		console.log(err);
		res.status(500).json({error:"Internal server error!"})
	}
});

router.post("/", async (req, res) => {
	try {
		const data = req.body;
		const newMenuItem = new MenuItem(data);
		const response = await newMenuItem.save();
		console.log("Data saved");
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res
			.status(500)
			.json({ error: "Internal server error!" });
	}
});

module.exports = router;