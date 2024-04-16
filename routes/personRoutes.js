const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

router.post('/',async(req,res)=>{
	try{
		const data = req.body;
		// create a new person document using mongoose model
		const newPerson = new Person(data);
		//save the new person to the db
		const response = await newPerson.save();
		console.log('data saved');
		res.status(200).json(response);
	}
	catch(err){
		console.log(err);
		res.status(500).json({error:"Internal server error!"})
	}
});
//get method to fetch person data
router.get('/', async(req,res)=>{
	try{
		const data = await Person.find();
		console.log("data fetched");
		res.status(200).json(data);
	}
	catch(err){
		console.log(err);
		res.status(500).json({error:"Internal server error!"})
	}
});
router.get("/:workType", async (req, res) => {
	try{
		const workType = req.params.workType; // extract the work type from url
	if(workType=="chef" ||workType=="manager" || workType=="waiter"){
		const response = await Person.find({work:workType});
		console.log("data fetched successfully");
		res.status(200).json(response);
	}
	else{
		res.status(400).json({error:"Invalid work type!"})
	}
	}
	catch(err){
		console.log(err);
		res.status(500).json({error:"Internal server error!"})
	}
});
// updating person data using its id
router.put('/:id',async(req,res)=>{
	try{
		const personId = req.params.id; // extract the person id from url
		const updatedPersonData = req.body; // updated data for person

		const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
			new: true, // return the updated document
			runValidators : true, //run mongoose validation
		})

		if(!response){
			res.status(400).json({error:"Person not found"});
		}
		console.log("data updated successfully");
		res.status(200).json(response);

	}
	catch(err){
		console.log(err);
		res.status(500).json({error:"Internal server error!"})
	}
});
//deleting person with id
router.delete('/:id', async(req,res)=>{
	try{
		const personId = req.params.id;
		const response = await Person.findByIdAndDelete(personId);
		if(!response){
			res.status(400).json({error:"Person not found"});
		}
		console.log("Person deleted successfully");
		res.status(200).json({message : "Person deleted successfully!!"});
	}
	catch(err){
		console.log(err);
		res.status(500).json({error:"Internal server error!"})
	}
})

module.exports = router;