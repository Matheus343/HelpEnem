const Mongoose = require('mongoose');

const url = 'mongodb+srv://usertkmont:BR54321@cluster0.ztnmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

Mongoose.connect(url)
    .then(() => console.log("Conexão com MongoDB bem-sucedida"))
    .catch((error) => console.error("Erro ao conectar ao MongoDB:", error));
    
module.exports = Mongoose;
