const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/social_network_api';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/HogwartsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;