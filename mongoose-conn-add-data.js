var mongose=require("mongoose")
mongose.connect("mongodb://localhost:27017/totos")
var todo=mongose.model('toto',
{
	
	text:{
		
		type:String
	},  
	completed:{
		type:Array
		
	},
	completedat:{
		type:Number
	}
})

var newtodo=new todo({
	
	text:"cook food",
	completed:["james","peter","andolo","indiza"]
})

newtodo.save().then((doc)=>{
console.log("saved",JSON.stringify(doc.text))	
})



