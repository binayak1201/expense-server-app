const mongoose=require('mongoose');
const dbConnect=async()=>{
    try {
        await mongoose.connect('mongodb+srv://binayaksingh14:q5oc9PNh7BYaswjr@expenses-tracker.eqbb0sf.mongodb.net/?retryWrites=true&w=majority',
        {
            useUnifiedTopology:true,
            useNewUrlParser:true,
        }
        );
        console.log('db connected succesfully');
    } catch (error) {
       console.log(`connection unsuccesful ${error.message}`); 
    }
};
module.exports=dbConnect;
//password-q5oc9PNh7BYaswjr