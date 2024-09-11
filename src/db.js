const mongoose = require("mongoose");

// const mongoDB = "mongodb+srv://admin:admin123@cluster0.r60c3.mongodb.net/pet";

async function main() {
  await mongoose.connect(mongoDB);
}

main()
  .then(() => console.log("Conexão realizada com sucesso"))
  .catch((err) => console.log(err));

module.exports = mongoose;