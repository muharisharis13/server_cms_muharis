const mongoose = require("mongoose")
require("dotenv").config();

const koneksi = `mongodb+srv://muharis:muharis@officia.m7i2l.mongodb.net/jualan_emak`

mongoose.connect(koneksi, {
  useUnifiedTopology : true,
  useNewUrlParser : true
}, ()=>console.log("Terkoneksi dengan database"))


exports.db = mongoose.connection