var rq=require("mongoose")
rq.connect("mongodb://localhost/testaroo");
rq.connection.once('open',function()
{
	console.log("con has been made...")
	
}).on("error",function(){
	
	console.log("connection error")
})
console.log(rq)