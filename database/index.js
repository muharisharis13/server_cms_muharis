const mongoose = require("mongoose")

const koneksi = process.env.DB_CONNECTION //===> Link koneksi mongoose

mongoose.connect(koneksi, {
  useUnifiedTopology : true,
  useNewUrlParser : true
}, ()=>console.log("Terkoneksi dengan database"))


exports.db = mongoose.connection