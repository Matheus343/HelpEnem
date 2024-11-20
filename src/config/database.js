const mongoose = require('mongoose');
const url = 'mongodb+srv://usertkmont:BR54321@cluster0.ztnmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url, { useNewUrlParser: true }); // https://mongoosejs.com/docs/5.x/docs/deprecations.html

module.exports = mongoose;
