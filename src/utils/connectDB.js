const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            retryWrites: true 
        });
        console.log('Conectado a la base de datos');
    } catch (err) {
        console.log(err);
    }
};

module.exports = { connectDB };
