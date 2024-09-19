import mongoose from 'mongoose';

const URI = process.env.MONGO_URI;
const DB = process.env.MONGO_DB;

const connectDB = async () =>{
    try{
        await mongoose.connect(`${URI}/${DB}`);
        console.log('Conectado a la base de datos');
    }catch(err){
        console.log(err);
    }
}
