var mongoose = require("mongoose");
// local -> mongodb://127.0.0.1/mekanbul
// live -> mongodb+srv://zkcndnmez:zkcndnmez@mekanbul.m4to1p8.mongodb.net/mekanbul

var dbURI = "mongodb+srv://zkcndnmez:zkcndnmez@mekanbul.m4to1p8.mongodb.net/mekanbul";
mongoose.connect(dbURI);

// Bağlantı Olayları (Connection Events)
mongoose.connection.on("connected", () => {
  console.log(dbURI + " adresine bağlandı!");
});

mongoose.connection.on("error", () => {
  console.log("Bağlantı hatası!");
});

mongoose.connection.on("disconnected", () => {
  console.log("Bağlantı kesildi!");
});

process.on("SIGINT", () => {
  mongoose.connection.close();
  console.log("Bağlantı kapatıldı!");
  process.exit(0);
});

require("./venue")