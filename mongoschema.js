const userschema=new Schema({
	
	name:{
		type:String,
		required:true
		
	}
	
	email:{
		type:String,
		required:true
		
	}
	
	password:{
		type:String,
		required:true
		
	} 
	
	
mongoose.model("users",userschema)
	
})